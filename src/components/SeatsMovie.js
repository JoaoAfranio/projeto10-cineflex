import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Main from "./Main";
import Seats from "./Seats";

export default function SeatsMovie() {
    const { id }  = useParams();
    const [session, setSession] = useState([])

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


    return (
        <>
        {session && (
            <> 
                <Main tittle={"Selecione o(s) assento(s)"}>
                    <Seats listSeats={session?.seats}/>
                </Main>
                <Footer imgSrc={session?.movie?.posterURL} tittle={session?.movie?.title}/>
            </>
        )}
        </>
    )
}