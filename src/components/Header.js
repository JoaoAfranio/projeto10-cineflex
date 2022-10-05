import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Content>
            {location.pathname !== "/" && (
                <ion-icon onClick={() => {navigate(-1)}}name="arrow-back-outline"></ion-icon>
            )}
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

    ion-icon {
        cursor: pointer;
        
        font-size: 28px;
        color: #293845;;
        position: fixed;
        left: 30px;
    }

`;