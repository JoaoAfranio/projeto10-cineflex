import styled from "styled-components";

export default function Header() {
    return (
        <Content>
            <h1>CINEFLEX</h1>
        </Content>
    );
}

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 70px;
    background-color: #C3CFD9;

    h1 {
        font-family: Roboto;
        font-size: 34px;
        color: #E8833A;
    }

`;