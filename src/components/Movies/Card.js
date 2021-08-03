import styled from "styled-components";

const StyledContainer = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  font-style: inherit;
  display: block;
`;

const StyledCard = styled.div`
  width: 282px;
  height: 348px;
  display: flex;
  position: relative;
  flex-direction: column;
  border: 1px solid #E1E3E6;
  box-sizing: border-box;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 27px;
  transition: 0.3s;
  :hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 550px){
    width: 100%;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 302px;
  object-position: center;
  object-fit: cover;
`;

const StyledTitle = styled.h1`
  font-family: Inter;
  font-weight: normal;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 15px;
  letter-spacing: -0.01em;
  text-align: center;
`;

const StyledRating = styled.span`
  color: #000000;
  width: 34px;
  height: 34px;
  background: #FFFFFF;
  position: absolute;
  top: 14px;
  left: 14px;
  font-family: Inter;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.01em;
  text-align: center;
  border-radius 34px;
  border: 1px solid #000000;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const API_BASE_IMAGE_URL = process.env.REACT_APP_API_BASE_IMAGE_URL;


const Card = ({ movie, setCurrentMovie }) => (
  <StyledContainer href={`#popup1`} onClick={() => setCurrentMovie(movie)}>
    <StyledCard>
      <StyledRating>{movie.vote_average}</StyledRating>
      <StyledImage alt={movie.title} src={`${API_BASE_IMAGE_URL + movie.poster_path}`} />
      <StyledTitle>{movie.title}</StyledTitle>
    </StyledCard>
  </StyledContainer>
)

export default Card;
