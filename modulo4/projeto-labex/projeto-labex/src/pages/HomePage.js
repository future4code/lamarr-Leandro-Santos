import React from "react";
import { useNavigate } from "react-router-dom";
import {goToAdminHomePage} from "../components/Coordinator";



function HomePage() {
   const navigate=useNavigate();
  return (
    <div>
    <p> HomePage.js  → Para o usuário escolher entre Área Administrativa e Lista de Viagens</p>

    <button onClick={()=>{goToAdminHomePage(navigate,"Inglês")}}>TESTE</button>
    </div>
  )
}

export default HomePage;