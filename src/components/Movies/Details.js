import styled from "styled-components";
import closeIcon from '../../images/close-icon.svg';

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
  z-index: 1;
  :target {
    visibility: visible;
    opacity: 1;
  }
`;

const StyledPopup = styled.div`
  margin: 70px auto;
  padding: 20px 27px;
  background: #fff;
  width: 583px;
  height: 474px;
  position: relative;
  transition: all 5s ease-in-out;
  @media screen and (max-width: 550px){
    width: 80%;
    height: 80%;
  }
`;

const StyledContent = styled.div`
  max-height: 100%;
  height: 87%;
  overflow: auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 550px){
    flex-direction: column;
  }
`;

const StyledHeader = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = styled.h1`
  font-family: Inter;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.01em;
`;

const StyledImage = styled.img`
  width: 266px;
  height: 100%;
  object-position: center;
  object-fit: cover;
  margin-right: 22px;
  @media screen and (max-width: 550px){
    width: 100%;
    height: 70%;
    margin-right: 0;
  }
  @media screen and (max-width: 380px){
    height: 65%;
  }
`;

const StyledOverview = styled.p`
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.01em;
  margin: 16px 0;
`;

const StyledText = styled.p`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
`;

const StyledBoldText = styled.span`
  font-weight: 600;
`;

const API_BASE_IMAGE_URL = process.env.REACT_APP_API_BASE_IMAGE_URL;


const Modal = ({ movie }) => (
    <StyledOverlay id="popup1">
        <StyledPopup>

            <StyledHeader>
                <StyledTitle>{movie?.title}</StyledTitle>
                <a href="#">
                    <img src={closeIcon} alt="Close" />
                </a>
            </StyledHeader>

            <StyledContent>
                <StyledImage alt={movie?.title} src={`${API_BASE_IMAGE_URL + movie?.poster_path}`} />

                <div>
                    <StyledText>
                        <StyledBoldText>Release Date: </StyledBoldText>
                        {movie?.release_date}
                    </StyledText>
                    <StyledOverview>{movie?.overview}</StyledOverview>
                    <StyledText>
                        <StyledBoldText>{movie?.vote_average} /</StyledBoldText> 10
                        ({movie?.vote_count} total votes)
                    </StyledText>
                </div>


            </StyledContent>
        </StyledPopup>
    </StyledOverlay>
)

export default Modal;
