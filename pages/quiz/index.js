
import db from '../../db.json';
import Widget from '../../src/components/Widget';
import GitHubCorner from '../../src/components/GitHubCorner';
import QuizBackground from '../../src/components/QuizBackground';
import QuizContainer from '../../src/components/QuizContainer';

export default function Quiz() {
    return (
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
  
          <Widget>
            <Widget.Header>
              <h1>{db.questions[0].title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.questions[0].description}</p>
            </Widget.Content>
          </Widget>
          
        </QuizContainer>
        <GitHubCorner projectUrl={db.projectRepo} />
      </QuizBackground>
    );
  }