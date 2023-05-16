import styled from 'styled-components';
import virar from '../assets/seta_virar.png';

export default function OpenedQuestion(props){
    function changeState(){
        props.setCardState('answer');
    }
    return(
        <>
            <Container>
                <Title>{props.pergunta}</Title>
                <Seta onClick={() => changeState()} src={virar}/>
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
`
const Title = styled.h1`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-top: 18px;
    margin-left: 15px;
`
const Seta = styled.img`
    width: 30px;
    height: 20px;
    margin-top: 80px;
    margin-left: 254px;
`