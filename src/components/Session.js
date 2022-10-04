import styled from "styled-components"

export default function Session({session}) {
    return(
        <Container>
            <h1>{session.weekday} - {session.date}</h1>
            <BoxButton>
                {session.showtimes.map((hour) => <ButtonHour key={hour.id}>{hour.name}</ButtonHour>)}
            </BoxButton>
            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;

    h1 {
        font-family: Roboto;
        font-size: 20px;
        margin-bottom: 30px;
    }

`;

const BoxButton = styled.div`
    display: flex;

    gap: 10px;
`

const ButtonHour = styled.button `
    width: 80px;
    height: 40px;

    background: #E8833A;
    border-radius: 3px;
    border: none;

    font-family: Roboto;
    font-size: 18px;
    color: #FFFFFF;

`;