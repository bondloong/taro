import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: head;
  margin: 0px 30px;
  box-sizing: content-box;
  @media (min-width: 1100px) {
      min-height: 467px;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;

`
export const HeaderH1 = styled.h1`
  font-family: Motel Americana;
  text-align: center;
  font-weight: inherit;
  font-size: 60px;
  margin: 20px 0 0 0;
  @media (max-width: 1100px) {
    font-size: 60px;
  }
  @media (max-width: 940px) {
    font-size: 40px;
  }
  @media (max-width: 460px) {
    font-size: 40px;
  }
`

export const HeaderDiv = styled.div`
  cursor: pointer;
  font-family: Motel Americana;
  text-align: center;
  font-weight: inherit;
  font-size: 60px;
  margin: 50px 0 0 0;
  @media (max-width: 1100px) {
    font-size: 60px;
  }
  @media (max-width: 940px) {
    font-size: 40px;
  }
  @media (max-width: 460px) {
    font-size: 40px;
  }
`

export const HeaderDescription = styled.div`
    padding: 25px 0px 10px 0px;
    max-width: 575px;
    align-self: center;
    text-align: justify;
    @media (max-width: 460px) {
      font-size: 16px;
    }
`


export const HeaderOne = styled.div`
  font-family: Motel Americana;
  font-size: 127px;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: center;
  text-transform: uppercase;
  line-height: 70%;
  @media (max-width: 1100px) {
    font-size: 130px;
  }
  @media (max-width: 940px) {
    font-size: 85px;
  }
  @media (max-width: 460px) {
    font-size: 85px;
  }
`

export const HeaderTwo = styled.div`
  font-family: Yanone Kaffeesatz;
  font-size: 59px;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: center;
  text-decoration: underline;
  line-height: 70%;
  @media (max-width: 1100px) {
    font-size: 60px;
  }
  @media (max-width: 940px) {
    font-size: 40px;
  }
  @media (max-width: 460px) {
    font-size: 40px;
  }
`