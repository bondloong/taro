import styled from 'styled-components';
import { LineGradient } from '../../styles/GlobalStyles';


export const FooterWrapper = styled(LineGradient)`
    display: flex;
    margin: 30px;
    grid-area: footer;
    align-items: center;
    flex-direction: column;
    
`

export const FooterTop = styled.div`
  display: flex;
  text-align: justify;
  gap: 15px;
  @media (max-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
`