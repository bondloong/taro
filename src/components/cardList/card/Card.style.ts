import styled from "styled-components";

export const CardWrapper = styled.div`
    position: relative;
    cursor: pointer;
    width: 75px;
    height: 135px;
    margin: 0px 5px 5px 5px;
    @media (max-width: 940px) {
      width: 50px;
      height: 90px;
    }
`

export const Card = styled.div<{ active: boolean, flip?: boolean }>`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: 1s;
  backface-visibility: hidden;
  position: absolute;
`

const fliped = (flipped: boolean) => flipped ? ' scale(-1, -1) ' : " ";

export const Front = styled(Card)`
    transform: ${props => props.active
    ? ' perspective(600px) rotateY(0deg) ' + fliped(props.flip)
    : ' perspective(600px) rotateY(-180deg) ' + fliped(props.flip)};
`
export const Back = styled(Card)`
    transform: ${props => props.active
    ? ' perspective(600px) rotateY(180deg) ' + fliped(props.flip)
    : ' perspective(600px) rotateY(0deg) ' + fliped(props.flip)};
`

