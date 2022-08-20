import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../hooks/UseProtectedPage";
import {
   goToCreateTripPage,
  goToHomePage,
  goToLoginPage,
} from "../routes/Coordinator";
import { Buttons, CentralizerDiv, Header, StyledH2 } from "./style";
import axios from "axios";

function AdminHomePage() {
  const navigate = useNavigate();
  useProtectedPage()

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-lima-lamarr/trip/NoIFVcOiSgTKTIPVZwXS",
    {
        headers: {
            auth: token
        }
    }).then((response) => {
        console.log(response.data)
    }).catch((error) => {
        console.log("Deu erro: ", error.response)
    })
}, [])

  return (
    <div>
      <Header>
      <StyledH2>Painel Administrativo</StyledH2>
      </Header>
      <CentralizerDiv>
        <Buttons
          onClick={() => {
            goToLoginPage(navigate);
          }}
        >
          Voltar
        </Buttons>
        <Buttons
          onClick={() => {
            goToCreateTripPage(navigate);
          }}
        >
          Criar Viagem
        </Buttons>
        <Buttons onClick={() => goToHomePage(navigate)}>Logout</Buttons>
      </CentralizerDiv>
    </div>
  );
}

export default AdminHomePage;
