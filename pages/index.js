import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    const listener = event => {
      if ((event.code === "Enter" || event.code === "NumpadEnter") && name.length > 0) {
        router.push(`/quiz?name=${name}`);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form 
              autoComplete="off"
              onSubmit={(events) => {
                events.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(events) => setName(events.target.value)}
                placeholder="Diz aí seu nome"
                value={name}
                autocomplete="off"
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
