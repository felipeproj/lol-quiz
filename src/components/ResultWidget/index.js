import { useRouter } from 'next/router';

import Widget from '../Widget';
import AlternativesForm from '../AlternativesForm';
import Button from '../Button';

export default function ResultWidget({ results }) {
  const router = useRouter();

  const urlParams = new URLSearchParams(window.location.search);
    return (
      <Widget>
        <Widget.Header>
          Resultados
        </Widget.Header>
  
        
          <Widget.Content>
            <h2>Parabéns, {urlParams.get('name')}</h2>
            <p>Você acertou {results.reduce((total, itemAtual) => itemAtual === true ? total + 1 : total, 0)} de {results.length} perguntas</p>

            <AlternativesForm 
              onSubmit={(events) => {
                events.preventDefault();
                router.push(`/`);
              }}
            >
              {results.map((result, index) => (
                <Widget.Topic
                  as="label"
                  key={`result__${index}`}
                  data-read-only="true"
                >
                  #{index + 1} Resultado: {result === true ? 'Acertou' : 'Errou'}
                </Widget.Topic>
              ))}
              
              <Button type="submit">VOLTAR AO INICIO</Button>
                
            </AlternativesForm>
          </Widget.Content>
      </Widget>
    )
}