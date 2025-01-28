import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 147px;
  background-color: #EEEEEE;
  text-align: center;
  padding: 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000; 
  
    a {
       color: #4F372F;
        text-decoration: underline;
        font-weight: 700;
    }

`;

const ButtonContainer = styled.div`
  width: 100%;
  background-color: #EEEEEE;
  text-align: center;
  padding: 8px 24px 24px 24px;
  position: fixed;
  bottom: 0;
  left: 0;
`;


export { Container, ButtonContainer }