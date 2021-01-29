
import db from '../../db.json';
import GitHubCorner from '../../src/components/GitHubCorner';
import QuizBackground from '../../src/components/QuizBackground';
import QuizContainer from '../../src/components/QuizContainer';
import LoadingWidget from '../../src/components/LoadingWidget';
import QuestionWidget from '../../src/components/QuestionWidget';
import ResultWidget from '../../src/components/ResultWidget';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.RESULT);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [results, setResult] = React.useState([]);
  const totalQuestions = db.questions.length;
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResult([
      ...results,
      result
    ])
  }

  // Lifecycle Components
  // [React chama de: Effects || Efeitos]
  // React.useEffect
  // atualizado === willUpdate
  // morre === willUnmount

  React.useEffect(() => {
    // setTimeout(() => setScreenState(screenStates.QUIZ), 1 * 1000);
    // nasce === didMount
  }, []);

  function handleSubmit() {
    if (questionIndex + 1 < totalQuestions)
      setCurrentQuestion(questionIndex + 1);
    else
      setScreenState(screenStates.RESULT);
  }
  
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>

        {screenState === screenStates.QUIZ && (
          <QuestionWidget 
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmit}
            addResult={addResult}
          ></QuestionWidget>
        )}
        
        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}

      </QuizContainer>
      <GitHubCorner projectUrl={db.projectRepo} />
    </QuizBackground>
  );
}