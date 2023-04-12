import styled from "styled-components";
import { BorderGradient, LineGradient } from '../../styles/GlobalStyles';

export const FortuneTellingsWrapper = styled(LineGradient)`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-area: FortuneTellingsWrapper;
  margin: 30px;


  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 460px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const FortuneTellingWrapper = styled(BorderGradient)`
  display: flex;
  flex-direction: row;

  padding: 20px 20px;

  border-radius: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 460px) {
    flex-direction: column;
  }
`;


export const FortuneTellingImage = styled.div`
    min-width: 236px;

    align-self: center;
    margin: 0 10px;
`

export const FortuneTellingFigcaption = styled.div`
    margin: 0 10px;
`

export const FortuneTellingImg = styled.img`
  width: 100%;
  cursor: pointer;
`;
export const FortuneTellingTitle = styled.h2`
  font-size: 22px;
  text-align: center;
  font-weight: bold;
`;
export const FortuneTellingDescription = styled.div``;
