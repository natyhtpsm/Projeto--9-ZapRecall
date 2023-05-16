import { useState } from 'react';

import Closed from './closedQuestion';
import Opened from './openedQuestion';
import Answer from './answer';


export default function Flashcard(props){
    const question = props.Q;
    const answer = props.R;
    const index = props.I;

    const [cardState, setCardState] = useState('closed');

    if(cardState === 'closed'){return <Closed number={index+1} setCardState={setCardState}/>}
    else if(cardState==='opened'){return <Opened pergunta={question} setCardState={setCardState}/>}
    else if(cardState==='answer'){return<Answer resposta={answer} setCardState={setCardState}/>}
}