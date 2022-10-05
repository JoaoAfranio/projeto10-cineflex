import { useLocation } from "react-router-dom"
import Main from "./Main";

export default function Sucess() {
    const location = useLocation();
    const {ids, name, cpf} = location.state.info;
    console.log(location.state.info)

    return (
        <Main tittle={"Pedido feito com sucesso!"} sucess={true}>
            <p>{name} {cpf}</p>
        </Main>
    )
}