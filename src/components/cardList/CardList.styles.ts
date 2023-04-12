import styled from "styled-components";
import { LineGradient } from '../../styles/GlobalStyles';


export const CardListWrapper = styled(LineGradient)`
    grid-area: FortuneTellingsWrapper;
    margin: 30px;
`

export const CardListHeader = styled.div`
    justify-content: end;
    position: sticky;
    display: flex;
    top: 0;
    z-index: 1;
    background-color: #0C0C0C;
    flex-flow: wrap;
    margin: 10px 0px 20px 0px;
    padding: 0px;
    box-shadow: 0px 4px 10px #0C0C0C;
`

export const CardListBody = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    
`

export const ResultButton = styled.div`
    cursor: pointer;
    position: relative;
`