import styled from "styled-components";
import Main from "./Main"
import Movie from "./Movie";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
    const [listMovies, setListMovies] = useState([])

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
        axios.get(URL)
        .then((res) => {
            setListMovies(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])


    return (
        <Main tittle={"Selecione o Filme"}>
            <ContainerMovies>
                {listMovies.map((movie) => <Movie key={movie.id} idMovie={movie.id} imgSrc={movie.posterURL} />)}
            </ContainerMovies>
        </Main>
    );
}

const ContainerMovies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
`