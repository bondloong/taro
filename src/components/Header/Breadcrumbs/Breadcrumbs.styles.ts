import styled from "styled-components";

export const BreadcrumbsWrapper = styled.div`
    align-self: center;
    margin-top: 15px;
    color: #94A3B8;
    @media (max-width: 1100px) {
        text-align: center;
    }
`

export const Bread = styled.span`
    color: white;
    cursor: pointer;
    &:before {
        content: " > ";
    }
    &:last-child {
        font-weight: bold;
    }
    &:first-of-type::before{
        content: "";
    }
`

export const BreatText = styled.span`
    &:hover {
        text-decoration: underline;
        color: #FE8311;
    }
`