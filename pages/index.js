import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import { Button, HoverButton } from '../src/components/Button';

export default function Home() {
  const router = useRouter();

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>

        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>

            <HoverButton>
              <Button onClick={() => router.push('/quiz')}>JOGAR</Button>
            </HoverButton>
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
