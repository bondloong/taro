import styled from "styled-components";
import Image from 'next/image'


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
    };
  }
}

export const Wrapper = styled.div`
    max-width: 1356px;
    margin: 0px auto;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    gap: 20px 20px;
    line-height: 1.5;
    grid-template-areas: 
      "head head head-cards"
      "ad ad ad"
      "h1 h1 h1"
      "FortuneTellingsWrapper FortuneTellingsWrapper FortuneTellingsWrapper"
      "footer footer footer"; 
    @media (max-width: 1100px) {
      grid-template-areas: 
      "head-cards head-cards head-cards "
      "head head head"
      "ad ad ad"
      "h1 h1 h1"
      "FortuneTellingsWrapper FortuneTellingsWrapper FortuneTellingsWrapper"
      "footer footer footer"; 
    }
    @media (max-width: 480px) {
      grid-template-areas: 
      "head-cards head-cards head-cards"
      "head head head"
      "ad ad ad"
      "h1 h1 h1"
      "FortuneTellingsWrapper FortuneTellingsWrapper FortuneTellingsWrapper"
      "footer footer footer"; 
    }
`
export const Img = styled(Image)`
  width: 200px;
  height: 200px;
`

export const Stop = styled.div`
    font-family: Сomediant Decor;
    font-size: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
interface BorderGradientProps {
  borderNone?: boolean;
  fullBackgound?: boolean;
  noHover?: boolean;
}
export const BorderGradient = styled.div<BorderGradientProps>`
  border: 4px solid transparent;
  border-radius: 20px;
  background: ${props => props.borderNone ? "" : props.fullBackgound ? `linear-gradient(286.03deg, #F0D650 1.04%, #FE8311 41.24%, #F1C554 100%);` : `linear-gradient(to right, #171717, #171717),
    linear-gradient(
      to right,
      rgba(240, 214, 80, 0.3),
      rgba(254, 131, 17, 0.3),
      rgba(241, 197, 84, 0.3)
    )`};

  ${props => props.fullBackgound ? `
    font-weight: 700;
    color: black;
  ` : ``};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  
  cursor: ${props => props.noHover ? 'default' : 'pointer'};


  &:hover {
    background: ${props => props.fullBackgound || props.noHover ? "" : `linear-gradient(to right, #171717, #171717),
      linear-gradient(
        to right,
        rgba(240, 214, 80, 1),
        rgba(254, 131, 17, 1),
        rgba(241, 197, 84, 1)
      )`};
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;

    box-shadow: ${props => props.noHover ? "" : `4px 4px 10px #000000, inset 4px 4px 10px #f0d650`};
  }
`


export const LineGradient = styled.div`
  position: relative;
  
  &:before{
    content:'';
    position:absolute;
    width:100%;
    height:10px;
    background: linear-gradient(90deg, rgba(245, 184, 58, 0) 0%, #F5B83A 51.56%, rgba(245, 184, 58, 0) 100%);
    top:-30px;
    left:0;
  }
`

export const Ad = styled(LineGradient)`
  margin: 30px 30px 0px 30px;
  grid-area: ad;
`