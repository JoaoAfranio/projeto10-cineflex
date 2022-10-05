import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Session({session}) {
    return(
        <Container data-identifier="session-date">
            <h1>{session.weekday} - {session.date}</h1>
            <BoxButton>
                {session.showtimes.map((hour) => <ButtonHour data-identifier="hour-minute-btn" to={`/sessao/${hour.id}`} key={hour.id}>{hour.name}</ButtonHour>)}
            </BoxButton>
            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;

    margin-bottom: 20px;

    h1 {
        font-family: Roboto;
        font-size: 20px;
        margin-bottom: 15px;
    }

`;

const BoxButton = styled.div`
    display: flex;

    gap: 10px;
`

const ButtonHour = styled(Link) `
    padding: 10px;

    background: #E8833A;
    border-radius: 3px;
    border: none;

    font-family: Roboto;
    font-size: 18px;
    color: #FFFFFF;
    text-decoration: none;

`;