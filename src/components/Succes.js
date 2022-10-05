import { Link, useLocation } from "react-router-dom"
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";

export default function Sucess() {
    const location = useLocation();
    const {ids, name, cpf} = location.state.infoPurchase;
    const session = location.state.movie;

    return (
        <>
            <Header />
            <Main tittle={"Pedido feito com sucesso!"} sucess={true}>
                <Info>
                    <h1>Filme e sessão</h1>
                    <h2 data-identifier="movie-session-infos-reserve-finished">{session?.movie.title}</h2>
                    <h2 data-identifier="movie-session-infos-reserve-finished">{session?.day.date} {session?.name}</h2>
                </Info>

                <Info>
                    <h1>Ingressos</h1>
                    {ids.map((id) => <h2 data-identifier="seat-infos-reserve-finished" key={id}>Assento {id}</h2>)}
                </Info>

                <Info>
                    <h1>Comprador</h1>
                    <h2 data-identifier="buyer-infos-reserve-finished">Nome: {name}</h2>
                    <h2 data-identifier="buyer-infos-reserve-finished">CPF: {cpf}</h2>
                </Info>

                <ButtonHome data-identifier="back-to-home-btn" to="/">Voltar para Home</ButtonHome>
            </Main>
        </>
    )
}


const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;

    color: #293845;

    margin-bottom: 30px;

    h1 {
        margin-bottom: 15px;
        font-size: 20px;
        font-weight: 700;
    }

    h2 {
        margin-bottom: 5px;
        font-size: 18px;
    }
`

const ButtonHome = styled(Link)`
    margin-top: 15px;

    height: 40px;
    width: 225px;

    border-radius: 3px;
    border: none;

    background: #E8833A;
    color: #FFFFFF;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
`