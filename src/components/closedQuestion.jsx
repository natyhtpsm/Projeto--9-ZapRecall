import styled from 'styled-components';
import Setinha from '../assets/seta_play.png';

export default function ClosedQuestion(props){
    function changeState(){
        props.setCardState('opened');
    };

    return(
        <>
            <Container>
                <Title>Pergunta {props.number}</Title>
                <Play src={Setinha} onClick={() => changeState()}/>
            </Container>
        </>
    );
}

const Play = styled.img`
    width: 20px;
    height: 23px;
    margin-left: 265px;
    margin-top: 20px;
`

const Container = styled.div`
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
`
const Title = styled.h1`
    width: 87px;
    height: 19px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
`