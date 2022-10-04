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

    width: 100%;
    height: 70px;
    background-color: #C3CFD9;

    position: fixed;
    top: 0;
    left: 0;

    h1 {
        font-family: Roboto;
        font-size: 34px;
        color: #E8833A;
    }

`;