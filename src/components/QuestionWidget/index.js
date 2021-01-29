import Widget from '../Widget';
import Button from '../Button';
import Alert from '../Alert';
import AlternativesForm from '../AlternativesForm';

export default function QuestionWidget({ 
    question,
    questionIndex,
    totalQuestions,
    onSubmit,
    addResult
  }) {
    const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
    const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);

    const questionId = `question__${questionIndex}`;
    const isCorrect = selectedAlternative === question.answer;
    const hasAlternativeSelected = selectedAlternative !== undefined;
  
    return (
      <Widget>
        <Widget.Header>
          <h3>Questão número { questionIndex + 1 } de { totalQuestions }</h3>
        </Widget.Header>
  
        <img 
          alt="Descrição"
          style={{
            width: '100%',
            maxHeight: '150px',
            objectFit: 'cover',
          }}
          src={question.image}
        />
  
        <Widget.Content>
          <h2>{question.title}</h2>
          <p>{question.description}</p>
  
          <AlternativesForm 
            onSubmit={(events) => {
              events.preventDefault();
              setIsQuestionSubmited(true);
              addResult(isCorrect);
              
              setTimeout(() => {
                setSelectedAlternative(undefined);
                onSubmit();
                setIsQuestionSubmited(false);
              }, 3 * 1000);
            }}
          >
            {question.alternatives.map((alt, index) => {
              const alternativeId = `alternative__${index}`;
              const isSelectedAlternative = index === selectedAlternative;
              const status = 
              isQuestionSubmited 
                ? (((isCorrect && isSelectedAlternative) || question.answer === index) 
                  ? 'SUCCESS' 
                  : isSelectedAlternative 
                    ? 'ERROR' 
                    : '')
                : '';
              return (
                <Widget.Topic
                  as="label"
                  key={alternativeId}
                  htmlFor={alternativeId}
                  data-selected={selectedAlternative === index}
                  data-status={status}
                  data-disabled={isQuestionSubmited}
                >
                  <input
                    name={questionId}
                    id={alternativeId}
                    type="radio"
                    disabled={isQuestionSubmited}
                    onClick={() => {
                      setSelectedAlternative(index);
                    }}
                  />
                  {alt}
                </Widget.Topic>
              )
            })}
            
            {isQuestionSubmited && <Alert content={isCorrect === true ? 'Você acertou!' : 'Você errou'} classList={isCorrect === true ? 'success' : 'failed'}/>}

            <Button 
              type="submit"
              disabled={!hasAlternativeSelected || isQuestionSubmited}
            >
              CONFIRMAR
            </Button>
            
          </AlternativesForm>
        </Widget.Content>
      </Widget>
    )
}