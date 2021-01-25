import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

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


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>

        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>


        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>{db.external[0]}</p>
          </Widget.Content>
        </Widget>
        
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={db.projectRepo} />
    </QuizBackground>
  );
}
