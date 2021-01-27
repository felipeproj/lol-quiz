import styled from 'styled-components'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 50px;
  margin: auto 10% auto 55%;
  z-index: 20;

  @media screen and (min-width: 501px) and (max-width: 1024px) {
    width: 80%;
    margin: auto;
    padding-top: 70px;
    max-width: 500px;
  }

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;