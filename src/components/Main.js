import styled from "styled-components";

export default function Main({tittle, children, sucess}) {
    return (
        <ContainerMain>
            <TittleContainer sucess={sucess}>{tittle}</TittleContainer>
            {children}
        </ContainerMain>
    )
}

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 70px;
    margin-bottom: 140px;

`

const TittleContainer = styled.h1`
font-family: Roboto;
        font-size: 24px;
        letter-spacing: 0.04em;
        color: ${props => props.sucess === true ? "#247A6B" : "#293845"};

        margin: 40px 0;
`