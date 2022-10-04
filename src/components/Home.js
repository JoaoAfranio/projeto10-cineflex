import styled from "styled-components";
import Main from "./Main"
import Movie from "./Movie";

export default function Home() {

    return (
        <Main tittle={"Selecione o Filme"}>
            <ContainerMovies>
                <Movie imgSrc={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"}/>
                <Movie imgSrc={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"}/>
                <Movie imgSrc={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"}/>
                <Movie imgSrc={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"}/>
                <Movie imgSrc={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"}/>
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