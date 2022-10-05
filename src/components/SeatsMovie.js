import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Main from "./Main";

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
            
            {console.log(session)}


                <Main tittle={"Selecione o(s) assento(s)"}>
                    assentos
                </Main>
                <Footer imgSrc={session.posterURL} tittle={session.title}/>
            </>
        )}
        </>
    )
}