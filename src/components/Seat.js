import styled from "styled-components";

export default function Seat({ seat, handleSeat, isSelected }) {

    return (
        <>
            {seat.isAvailable === false && (
                <BoxSeat data-identifier="seat" className="occupied" onClick={() => {handleSeat(seat)}}>
                    {seat.name}
                </BoxSeat>
            )}

            {seat.isAvailable === true && (
                <BoxSeat data-identifier="seat" className={`${isSelected && "selected"}`} onClick={() => {handleSeat(seat)}} >
                    {seat.name}
                </BoxSeat>
            )}
        </>

    );
}


const BoxSeat = styled.div`
    height: 26px;
    width: 26px;
    border-radius: 50%;

    display: grid;
    grid-template-columns: repeat(1fr, 10);

    align-items: center;
    justify-content: center;

    background-color: #C3CFD9;

    border: 1px solid #808F9D;

    font-size: 11px;

    cursor: pointer;

    &.occupied {
        background: #FBE192;
        border-color: #F7C52B;
    }

    &.selected {
        background: #1AAE9E;
        border-color: #0E7D71;
    }
`;