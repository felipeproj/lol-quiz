import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';
import { Button, HoverButton } from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (events) {
              events.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}>
              <Input 
                onChange={(events) => setName(events.target.value)}
                placeholder="Diz aí seu nome" 
              />
              
              <Button type="submit" disabled={name.length === 0}>JOGAR</Button>
            </form>

          </Widget.Content>
        </Widget>


        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>{db.external[0]}</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <GitHubCorner projectUrl={db.projectRepo} />
    </QuizBackground>
  );
}
