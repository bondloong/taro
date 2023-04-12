import styled from "styled-components";

export const HeaderCardsWrapper = styled.div`
    flex-direction: row;
    grid-area: head-cards;
    position: relative;
    cursor: pointer;

    @media (max-width: 1100px) {
      display: none;
    }
`

export const HeaderImg = styled.div<{ index: number, flip: boolean }>`
    position: absolute;
    top: 40px;
    left: ${props => props.index * 16}%;
    transform: rotate( ${props => props.flip ? 180 - 20 + props.index * 20 : - 20 + props.index * 20}deg);
`
