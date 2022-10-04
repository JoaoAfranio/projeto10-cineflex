import styled from "styled-components";

export default function Main({tittle, children}) {
    return (
        <ContainerMain>
            <h1>{tittle}</h1>
            {children}
        </ContainerMain>
    )
}

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-family: Roboto;
        font-size: 24px;
        letter-spacing: 0.04em;
        color: #293845;

        margin: 50px 0;
`