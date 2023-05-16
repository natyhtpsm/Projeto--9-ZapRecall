import styled from 'styled-components';
import Imagem from '../assets/logo.png';
import Flashcard from '../components/flashcard';
import Deck from '../components/deck';
import { useState } from 'react';

export default function Game(){
    const [contado, setContado] = useState(0);

    return(
        <>
        <Container>
            <Header>
                <Logo src={Imagem}/>
                <Title>ZapRecall</Title>
            </Header>
            <Tabuleiro>
                {Deck.map((card, i) => {
                    return (
                        <>
                            <Flashcard Q={card.Q} R={card.R} I={i} setContado={setContado} contado={contado}/>
                        </>
                        )
                    })}
            </Tabuleiro>
            <Footer>{contado}/4 CONCLUÍDOS</Footer>
        </Container>
        </>
    );
};

const Tabuleiro = styled.div`
    margin-top: 59px;
    margin-left: 40px;
    height: 500px;
    width: 255.17px;
 
`

const Container = styled.div`
    background-color: #FB6B6B;
    width: 375px;
    height: 667px;
    display: flex;
    justify-content: center;
    align-itens: center;
    flex-direction: column;
    overflow-x: none;
`
const Header = styled.div`
    height: 60px;
    width: 255.17px;
    margin-left: 59px;
    margin-top: 82px;
    display: flex;
    align-itens: center;
    flex-direction: row;
`
const Footer = styled.div`
    position: fixed;
    display: flex;
    align-itens: center;
    justify-content: center;
    position: absolute;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    width: 375px;
    height: 70px;
    margin-top: 400px;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`

const Logo = styled.img`
    height: 60px;
    width: 52px;
`
const Title = styled.h1`
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;

`