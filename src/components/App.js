import Header from "./Header";
import GlobalStyle from "../assets/css/GlobalStyle";
import Home from "./Home";
import SessionMovie from "./SessionMovie";
import SeatsMovie from "./SeatsMovie";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
    return (
    <>
        <GlobalStyle />   
        <Header /> 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<SessionMovie idMovie={"1"}/>} />
                <Route path="/sessao/:id" element={<SeatsMovie idSession={"1"}/>} />
            </Routes>
        </BrowserRouter>     
    </>
    )
}