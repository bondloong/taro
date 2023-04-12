import styled from 'styled-components';

export const H1 = styled.h1`
    grid-area: h1;
    font-family: Motel Americana;
    text-align: center;
    font-weight: inherit;
    font-size: 50px;
    margin: 30px 0;
    position: relative;
	cursor: pointer; 

    @media (max-width: 1100px) {
        font-size: 40px;
    }
    @media (max-width: 940px) {
        font-size: 30px;
    }
    @media (max-width: 460px) {
        font-size: 25px;
    }
/*  
    &:before{
    content:'';
    position:absolute;
    width:100%;
    height:10px;
    background: linear-gradient(90deg, rgba(245, 184, 58, 0) 0%, #F5B83A 51.56%, rgba(245, 184, 58, 0) 100%);
    top:-30px;
    left:0;
    }*/
`