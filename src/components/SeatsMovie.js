import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Main from "./Main";
import Seat from "./Seat";

export default function SeatsMovie() {
    const { id }  = useParams();
    const [session, setSession] = useState([])
    const [selectedSeats, setSelectedSeats] = useState([]);

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
        if(!seat.isAvailable) alert("Esse assento não está disponível")

        if(selectedSeats.includes(seat.id) === true) {
            const idSelectedSeat = selectedSeats.indexOf(seat.id)
            selectedSeats.splice(idSelectedSeat,1)
            setSelectedSeats([...selectedSeats])
        } else {    
            setSelectedSeats([...selectedSeats, seat.id])
        }
    }


    return (
        <>
        {session && (
            <> 
                <Main tittle={"Selecione o(s) assento(s)"}>
                    <BoxSeats>
                        {session?.seats?.map((s) => 
                            <Seat key={s.id} seat={s} isSelected={selectedSeats.includes(s.id)} handleSeat={handleSeat}/>)
                        }
                    </BoxSeats>
                </Main>
                <Footer imgSrc={session?.movie?.posterURL} tittle={session?.movie?.title}/>
            </>
        )}
        </>
    )
}

const BoxSeats = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    gap: 18px 8px
`;