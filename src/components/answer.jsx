import styled from 'styled-components';

export default function Answer(props){
    function changeColor(color){
        props.setCardColor(color);
        props.setCardState('closed');

    };
    return(
        <>
            <Container>
                <Title>{props.resposta}</Title>
                <Buttons>
                    <Wrong onClick={() => changeColor('red')}>Não lembrei</Wrong>
                    <Remember onClick={() => changeColor('yellow')}>Quase não lembrei</Remember>
                    <Right onClick={() => changeColor('green')}>Zap!</Right>
                </Buttons>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 300px;
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
const Buttons = styled.div`
    height:37.17;
    width: 271px;
    margin-top: 33px;
    display: flex;
    justify-content: space-around;

`
const Wrong = styled.button`
    width: 85.17px;
    height: 37.17px;
    background: #FF3030;
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    margin-left: 17px;
    margin-right: 7.74px;
    
`
const Remember = styled.button`
    width: 85.17px;
    height: 37.17px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    background: #FF922E;
    border-radius: 5px;
    margin-right: 7.74px;
`
const Right = styled.button`
    width: 85.17px;
    height: 37.17px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    background: #2FBE34;
    border-radius: 5px;
    margin-right: 7.74px;
`