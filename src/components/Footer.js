import styled from "styled-components";

export default function Footer({imgSrc, tittle}) {
    return(
            <Container>
                <BoxImg>
                    <img src={imgSrc} alt="poster" />
                </BoxImg>
                
                <h1>{tittle}</h1>
            </Container>
          );
}


const Container = styled.div`
    height: 100px;
    width: 100%;

    display: flex;
    align-items: center;

    position: fixed;
    left: 0px;
    bottom: 0px;

    background-color: #DFE6ED;

    border-top: 1px solid #9EADBA;

    padding: 10px;
    gap: 20px;
`

const BoxImg = styled.div`
    height: 90px;
    width: 65px;
    border-radius: 2px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 5px;
    background-color: #FFFFFF;

    img {
        width: 100%;
        height: 100%;
    }

    h1 {
        font-family: Roboto;
        font-size: 26px;
    }
`;