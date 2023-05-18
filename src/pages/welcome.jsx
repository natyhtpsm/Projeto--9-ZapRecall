import styled from 'styled-components';
import Imagem from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';


export default function Welcome(){
    const navigate = useNavigate();    
    return (   
        <>
        <Cointainer>
            <Logo src={Imagem}/>
            <Title>ZapRecall</Title>
            <Button data-test = "start-btn" onClick={() => navigate('/game')}>Iniciar Recall!</Button>
        </Cointainer>
        </>
    );
}

const Logo = styled.img`
    width: 136px;
    height: 161px;
    margin-bottom: 13px;
`
const Button = styled.button`
    background-color: #ffffff;
    height: 54px;
    width: 246px;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive', sans-serif;
    color: #D70900;
`

const Cointainer = styled.div `
    background-color: #FB6B6B;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-family: 'Righteous', cursive;
    font-size: 36px;
    font-style: normal;
    color: #ffffff;
    margin-bottom: 30px;
`
