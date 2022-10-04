import Header from "./Header";
import GlobalStyle from "../assets/css/GlobalStyle";
import Home from "./Home";
import SessionMovie from "./SessionMovie";

export default function App(){
    return (
    <>
        <GlobalStyle />   
        <Header /> 
        {/* <Home /> */}
        <SessionMovie idMovie={"1"}/>
        
    </>
    )
}