import styled from "styled-components"

export default function Movie({imgSrc}) {
    return(
        <Box>
            <img src={imgSrc} alt="poster"></img>
        </Box>
        )
}


const Box = styled.div`
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