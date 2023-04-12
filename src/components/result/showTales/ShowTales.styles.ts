import styled, { keyframes } from 'styled-components';
import { Img } from "../../../styles/GlobalStyles";

export const TaleWrapper = styled.div`

`

export const TaleImgBlock = styled.div<{ flip?: boolean }>`
    position: relative;
    cursor: pointer;
    width: 200px;
    height: 360px;
    margin: 0px 5px 5px 5px;
    transform: ${props => fliped(props.flip)};
`
const fliped = (flipped: boolean) => flipped ? ' scale(-1, -1) ' : " ";


export const TaleImgWrapper = styled.div`
  float: left;
  margin-right: 15px;
  @media (max-width: 460px) {
    align-self: center;
  }
`
export const TaleImg = styled(Img)`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  backface-visibility: hidden;
  position: absolute;
`



export const Tale = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media (max-width: 460px) {
    flex-direction: column;
  }
`
export const TaleContent = styled.div`
  width: -webkit-fill-available;
  padding: 0 10px 0 10px;
`
export const TaleTitle = styled.div`
font-size: 24px;
font-weight: bold;
`
export const TaleDescription = styled.div`
color: #64748B;
margin-bottom: 10px;
`
export const TaleId = styled.div`
font-size: 24px;
margin-bottom: 5px;

`

export const Return = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 40px;;
  cursor: pointer;

  max-width: 535px;

  /* Sky/50 */
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  background: #F0F9FF;
  margin: 5px;
    @media (max-width: 1100px) {
        margin: 0px auto;
    }
    @media (max-width: 460px) {
      font-size: 16px;
        width: 100%;
    }
`

export const ButtonBottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end; 
  flex-wrap: wrap;
`