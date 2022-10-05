import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Seat from "./Seat";

export default function SeatsMovie() {
    const { id }  = useParams();
    const [session, setSession] = useState([])
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [name, setName] = useState("");
    const [CPF, setCPF] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`
        axios.get(URL)
        .then(({data}) => {
            setSession(data)
        })
        .catch((err) => {
            console.log(err)
        })

    }, [id])

    function handleSeat(seat) {
        if(!seat.isAvailable) {
            alert("Esse assento não está disponível")
            return;
        }

        if(selectedSeats.includes(seat.name) === true) {
            const idSelectedSeat = selectedSeats.indexOf(seat.name)
            selectedSeats.splice(idSelectedSeat,1)
            setSelectedSeats([...selectedSeats])
        } else {    
            setSelectedSeats([...selectedSeats, seat.name])
        }
    }

    function bookSeats() {
        if(selectedSeats.length === 0 ) {
            alert("Você deve selecionar ao menos 1 assento")
            return ;
        }

        if(name === "" ) {
            alert("Você deve digitar o seu nome")
            return ;
        }

        if(CPF === "" ) {
            alert("Você deve digitar o seu CPF")
            return ;
        }


        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
        axios.post(URL, {
                ids: selectedSeats,
                name: name,
                cpf: CPF
            })
            .then(response => {
                const info = JSON.parse(response.config.data)
                navigate('/sucesso', {state : {infoPurchase: info, movie: session }})
            })
            .catch(error  => {
                console.log(error);
            });
    }


    return (
        <>
        {session && (
            <> 
                <Header />
                <Main tittle={"Selecione o(s) assento(s)"}>
                    <BoxSeats>
                        {session?.seats?.map((s) => 
                            <Seat key={s.id} seat={s} isSelected={selectedSeats.includes(s.name)} handleSeat={handleSeat}/>)
                        }
                    </BoxSeats>

                    <ContainerStatus>
                            <BoxStatus>
                                <Status className="selected" data-identifier="seat-selected-subtitle"/>
                                <p>Selecionado</p>
                            </BoxStatus>
                            <BoxStatus>
                                <Status className="available" data-identifier="seat-available-subtitle"/>
                                <p>Disponível</p>
                            </BoxStatus>
                            <BoxStatus>
                                <Status className="occupied" data-identifier="seat-unavailable-subtitle"/>
                                <p>Ocupado</p>
                            </BoxStatus>
                    </ContainerStatus>

                    <ContainerPerson>
                        <Info>
                            <label>Nome do comprador:</label>
                            <input onChange={(e) => {setName(e.target.value)}} value={name} type="text" placeholder="Digite seu nome..."  data-identifier="buyer-name-input"/>
                        </Info>

                        <Info>
                            <label>CPF do comprador:</label>
                            <input onChange={(e) => {setCPF(e.target.value)}} value={CPF} type="text" placeholder="Digite seu CPF..." data-identifier="buyer-cpf-input"/>
                        </Info>
                    </ContainerPerson>

                    <Button onClick={() => {bookSeats()}} data-identifier="reservation-btn">Reservar assento(s)</Button>
                </Main>
                <Footer imgSrc={session?.movie?.posterURL} tittle={session?.movie?.title} time={{day : session?.day?.weekday, hour: session?.name}}/>
            </>
        )}
        </>
    )
}

const BoxSeats = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    margin-top: -15px;

    gap: 18px 8px
`;

const ContainerStatus = styled.div`
    display: flex;
    justify-content: center;

    gap: 40px;

    margin-top: 30px;
`

const BoxStatus = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 13px;
        color: #4E5A65;
    }

    gap: 5px;
`

const Status = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 50%;

    border: 1px solid #808F9D;

    &.available {
        background-color: #C3CFD9;
    }

    &.occupied {
        background: #FBE192;
        border-color: #F7C52B;
    }

    &.selected {
        background: #1AAE9E;
        border-color: #0E7D71;
    }
`

const ContainerPerson = styled.div`
    width: 85%;

    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-top: 30px;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;

    gap: 5px;

    input {
        height: 40px;
        border-radius: 3px;
        border: 1px solid #D4D4D4;

        padding-left: 20px; 
    }

    label {
        font-size: 16px;
        color: #293845;
    }
`

const Button = styled.button`
    cursor: pointer;

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