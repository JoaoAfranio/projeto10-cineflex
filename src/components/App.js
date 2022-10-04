import Header from "./Header";
import GlobalStyle from "../assets/css/GlobalStyle";
import Home from "./Home";
import Footer from "./Footer";

export default function App(){
    return (
    <>
        <GlobalStyle />   
        <Header /> 
        <Home />
        <Footer imgSrc={"https://image.tmdb.org/t/p/w500/riYInlsq2kf1AWoGm80JQW5dLKp.jpg"} tittle={"Enola Holmes"}/>
    </>
    )
}