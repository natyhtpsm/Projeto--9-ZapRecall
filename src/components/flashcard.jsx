import { useState } from 'react';
import Closed from './closedQuestion';
import Opened from './openedQuestion';
import Answer from './answer';

export default function Flashcard(props) {
  const [cardcolor, setCardColor] = useState('preto');
  const [cardState, setCardState] = useState('closed');
  const question = props.Q;
  const answer = props.R;
  const index = props.I;

  let conteudo = null;

  if (cardState === 'closed') {
    conteudo = <Closed number={index + 1} setCardState={setCardState} cardcolor={cardcolor} />;
  } else if (cardState === 'opened') {
    conteudo = <Opened pergunta={question} setCardState={setCardState} />;
  } else if (cardState === 'answer') {
    conteudo = <Answer resposta={answer} setCardState={setCardState} setCardColor={setCardColor} setContado={props.setContado} contado={props.contado} />;
  }

  return <div data-test="flashcard">{conteudo}</div>;
}
