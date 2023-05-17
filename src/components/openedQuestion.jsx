import styled from 'styled-components';
import virar from '../assets/seta_virar.png';

export default function OpenedQuestion(props){
    function changeState(){
        props.setCardState('answer');
    }
    return(
        <>
            <Container>
                <Title data-test="flashcard-text">{props.pergunta}</Title>
                <Bottom>
                    <Seta data-test="turn-btn" onClick={() => changeState()} src={virar}/>
                </Bottom>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 299px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    display: flex; 
    align-itens: center;
    justify-content: space-between;
    flex-direction: column;

`
const Title = styled.h1`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-top: 20px;
    margin-left: 15.05px;
`
const Bottom = styled.div`
    width: 100%;
    height: 40px;
    bottom: 0px;
    border-radius: 5px;
    display:flex;
    align-itens: center;
    justify-content: center;
`
const Seta = styled.img`
    width: 30px;
    height: 20px;
    margin-left: 240px;
`