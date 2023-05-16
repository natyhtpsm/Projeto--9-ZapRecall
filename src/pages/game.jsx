import styled from 'styled-components';
import Imagem from '../assets/logo.png';
import Flashcard from '../components/flashcard';
import Deck from '../components/deck';

export default function Game(){
    return(
        <>
        <Container>
            <Header>
                <Logo src={Imagem}/>
                <Title>ZapRecall</Title>
                <Tabuleiro>
                    {Deck.map((card, i) => {
                        return (
                            <>
                                <Flashcard Q={card.Q} R={card.R} I={i}/>
                            </>
                        )
                    })}
                </Tabuleiro>
            </Header>
        </Container>
        </>
    );
};

const Tabuleiro = styled.div`
 
`

const Container = styled.div`
    background-color: #FB6B6B;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-itens: center;
`
const Header = styled.div`
    height: 60px;
    width: 255.17px;
    margin-top: 42px;
    display: flex;
    align-itens: center;
    flex-direction: row;
`
const Logo = styled.img`
    height: 60px;
    width: 52px;
    margin-left: 0px;
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