import styled from 'styled-components';
import { BorderGradient } from '../../styles/GlobalStyles';


export const Button = styled(BorderGradient)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 40px;;

  width: fit-content;

  padding: 20px 30px;
  border-radius: 30px;

  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  margin: 5px;
    @media (max-width: 1100px) {
        margin: 0px auto;
    }
    @media (max-width: 460px) {
      font-size: 15px;
        width: 100%;
    }
`