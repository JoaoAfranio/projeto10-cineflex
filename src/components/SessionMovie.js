import { useEffect, useState } from "react";
import axios from "axios";
import Main from "./Main";
import Session from "./Session";
import Footer from "./Footer";

export default function SessionMovie({idMovie}) {
    const [movie, setMovie] = useState([])
    const [movieDays, setMovieDays] = useState([])

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`
        axios.get(URL)
        .then((res) => {
            setMovie(res.data)
            setMovieDays(res.data.days)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [idMovie])


    return (
        <>
            <Main tittle={"Selecione o horário"}>
                {movie && (
                    movieDays.map((session) => <Session key={session.id}session={session}/>)
                )}
            </Main>
            <Footer imgSrc={movie.posterURL} tittle={movie.title}/>
        </>
    );
}

