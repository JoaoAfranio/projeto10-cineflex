import styled from "styled-components";

export default function Seats({listSeats}) {

    if(listSeats === undefined) <h1>Carregando...</h1>;

    return (
        <BoxSeats>
            {listSeats.map((s) => <Seat>{s.name}</Seat>)}
        </BoxSeats>
    );
}

const BoxSeats = styled.div`
    display: flex;
    flex-wrap: wrap;

    gap: 5px
`;

const Seat = styled.div`
    height: 26px;
    width: 26px;
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #808F9D;
    background-color: #C3CFD9;
`;