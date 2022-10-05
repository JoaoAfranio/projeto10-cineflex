import styled from "styled-components";

export default function Seats({listSeats}) {

    return (
        <BoxSeats>
            {listSeats?.map((s) => <Seat>{s.name}</Seat>)}
        </BoxSeats>
    );
}

const BoxSeats = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    gap: 18px 8px
`;

const Seat = styled.div`
    height: 26px;
    width: 26px;
    border-radius: 12px;

    display: grid;
    grid-template-columns: repeat(1fr, 10);

    align-items: center;
    justify-content: center;

    background-color: #C3CFD9;

    border: 1px solid #808F9D;

    font-size: 11px;

`;