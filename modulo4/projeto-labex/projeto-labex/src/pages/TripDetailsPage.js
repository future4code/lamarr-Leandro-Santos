import React, {useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProtectedPage from "../hooks/UseProtectedPage";
import { goToBack } from "../routes/Coordinator";
import axios from "axios";
import { Buttons, CentralizerDiv, Header, StyledH2 } from "./style";
import { BASE_URL } from "../constants/constants";

function TripDetailsPage() {
  const navigate = useNavigate();
  const pathParams=useParams();
  const { id } = useParams()
  useProtectedPage()

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get(
        `${BASE_URL}trip/${id}`,
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
      <StyledH2>Detalhes da viagem!</StyledH2>
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
