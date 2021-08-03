import { useState } from 'react';
import styled from "styled-components";

import Card from './Card';
import Details from './Details';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
`;

const StyledTitle = styled.p`
  font-family: Inter;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.01em;
  margin-bottom: 23px;
`;

const List = ({ loading, error, movies, query }) => {
  const [currentMovie, setCurrentMovie] = useState(null);

  return (
    <StyledSection>
      {loading ? (
        <span>Loading...</span>
      ) :
        error ? (
          <span>Error:{error} ...</span>
        ) : (
          <>
            {query ? (
              <StyledTitle>Showing results for: {query}</StyledTitle>
            ) : (
              <StyledTitle>Most Recent Movies</StyledTitle>
            )}
            <StyledList>
              {movies?.map((movie) => <Card movie={movie} key={movie.id} setCurrentMovie={setCurrentMovie} />)}
            </StyledList>
            <Details movie={currentMovie} />

          </>
        )}

    </StyledSection >
  );
}

export default List;
