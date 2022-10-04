import { useEffect, useState } from "react";
import axios from "axios";
import Main from "./Main";
import Session from "./Session";

export default function SessionMovie({idMovie}) {
    const [listSession, setListSession] = useState([])

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/1/showtimes`
        axios.get(URL)
        .then((res) => {
            setListSession(res.data.days)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])


    return (
        <Main tittle={"Selecione o horário"}>
            {listSession.map((session) => <Session session={session}/>)}
        </Main>
    );
}

