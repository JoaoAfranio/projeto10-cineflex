import { useEffect, useState } from "react";
import axios from "axios";
import Main from "./Main";
import Session from "./Session";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

export default function SessionMovie() {
    const { id }  = useParams();

    const [movie, setMovie] = useState([])
    const [movieDays, setMovieDays] = useState([])

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`
        axios.get(URL)
        .then((res) => {
            setMovie(res.data)
            setMovieDays(res.data.days)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [id])


    return (
        <>
            {movie && (
                <>
                    <Main tittle={"Selecione o horário"}>
                        {movieDays.map((session) => <Session key={session.id} session={session}/>)}
                    </Main>
                    <Footer imgSrc={movie.posterURL} tittle={movie.title}/>
                </>
            )}
        </>
    );
}

