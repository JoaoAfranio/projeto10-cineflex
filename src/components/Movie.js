import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Movie({imgSrc, idMovie}) {
    return(
        <Box data-identifier="movie-outdoor" to={`/filme/${idMovie}`}>
            <img src={imgSrc} alt="poster"></img>
        </Box>
        )
}


const Box = styled(Link)`
    height: 200px;
    width: 130px;

    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    padding: 5px;

    img {
        width: 100%;
        height: 100%;
    }

    &:hover {
        cursor: pointer;
    }
`