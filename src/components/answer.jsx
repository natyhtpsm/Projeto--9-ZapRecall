import styled from 'styled-components';

export default function Answer(props){
    return(
        <>
            <Container>
                <Title>{props.resposta}</Title>
                <Buttons>
                    <Wrong>Não lembrei</Wrong>
                    <Remember>Quase não lembrei</Remember>
                    <Right>Zap!</Right>
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
`
const Title = styled.h1`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
`
const Buttons = styled.div`
    height:37.17;
    width: 271px;
    margin-top: 83.83px;
    margin left: 17px;
    display: flex;
    justify-content: space-around;
`
const Wrong = styled.button`
    width: 85.17px;
    height: 37.17px;
    background: #FF3030;
    border-radius: 5px;
    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: #FFFFFF
    }
`
const Remember = styled.button`
    width: 85.17px;
    height: 37.17px;
    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: #FFFFFF
    }
    background: #FF922E;
    border-radius: 5px;
`
const Right = styled.button`
    width: 85.17px;
    height: 37.17px;
    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: #FFFFFF
    }
    background: #2FBE34;
    border-radius: 5px;
`