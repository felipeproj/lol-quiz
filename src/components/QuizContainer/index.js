import styled from 'styled-components'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  position: absolute;
  top: 8%;
  border: 0;
  right: 20%;
  z-index: 20;

  @media screen and (max-width: 500px) {
    right: -10%;
    padding: 15px;
  }
`;

export default QuizContainer;