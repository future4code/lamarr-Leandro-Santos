import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../hooks/UseProtectedPage";
import { goToBack } from "../routes/Coordinator";
import axios from "axios";
import { Buttons, CentralizerDiv, Header, StyledH2 } from "./style";

function TripDetailsPage() {
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
      <StyledH2>TripDetailsPage.js →</StyledH2>
      </Header>
      <CentralizerDiv>
      <Buttons
        onClick={() => {
          goToBack(navigate);
        }}
      >
        Voltar
      </Buttons>
      <Buttons>Aprovar</Buttons>
      <Buttons>Reprovar</Buttons>
      </CentralizerDiv>
    </div>
  );
}

export default TripDetailsPage;
