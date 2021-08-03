import logo from '../images/logo.svg';
import searchIcon from '../images/search-icon.svg';
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #C0C4CC;
  padding: 20px 0;
  @media screen and (max-width: 420px){
    flex-direction: column;
    padding: 10px 0;
  }
`;

const StyledInputContainer = styled.div`
  width: 180px;
  height: 36px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #C0C4CC;
  box-sizing: border-box;
  border-radius: 2px;
  @media screen and (max-width: 420px){
    width: 100%;
    margin-top: 10px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: transparent;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #898E9A;
  letter-spacing: -0.01em;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #898E9A;
  }
  :-ms-input-placeholder {
    color: #898E9A;
  }
`;

const StyledIcon = styled.img`
  width: 13px;
  height: 13px;
  margin-right: 9px;
`;


const Header = ({ searchMovies, query, setQuery }) => {

  const submitQuery = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchMovies();
    }
  };

  return (
    <StyledHeader>
      <img src={logo} alt="Timescale" />

      <StyledInputContainer>
        <StyledIcon src={searchIcon} alt="search" />
        <StyledInput
          placeholder="Search for a movie"
          type="search"
          onChange={e => setQuery(e.target.value)}
          onKeyPress={submitQuery}
        />
      </StyledInputContainer>
    </StyledHeader>
  );
}

export default Header;
