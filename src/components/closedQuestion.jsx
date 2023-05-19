import styled from 'styled-components';
import Setinha from '../assets/seta_play.png';
import Xizinho from '../assets/icone_erro.png';
import Quase from '../assets/icone_quase.png';
import Certo from '../assets/icone_certo.png';

export default function ClosedQuestion(props){
    function changeState(){
        props.setCardState('opened');
    }
    const getIcon = () => {
        if (props.cardColor === 'preto') {
            return Setinha;
        } else if (props.cardColor === 'red') {
            return Xizinho;
        } else if (props.cardColor === 'yellow') {
          return Quase;
        } else if (props.cardColor === 'green'){
            return Certo;
        } 
    }
    function getColor() {
        if (props.cardColor === 'preto') {
            return '#00000';
        } else if (props.cardColor === 'red') {
            return '#FF3030';
        } else if (props.cardColor === 'yellow') {
          return '#FF922E';
        } else if (props.cardColor === 'green'){
            return '#2FBE34';
        } 
    }

    let colorir = getColor();

    return(
        <>
            <Container>
                <Title data-test="flashcard-text" color={colorir}>Pergunta {props.number}</Title>
                <Play data-test="play-btn" src={getIcon()}   onClick={colorir === '#00000' ? () => changeState() : null}/>
            </Container>
        </>
    );
}

const Play = styled.img`
    width: 20px;
    height: 23px;
    margin-right: 15px;
`

const Container = styled.div`
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.h1`
    width: 87px;
    height: 19px;
    margin-left: 15px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.color};
    text-decoration:${props => props.color === '#00000' ? 'none' :  'line-through'};
`


