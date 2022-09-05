import React from "react";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../hooks/UseProtectedPage";
import {
  goToCreateTripPage,
  goToHomePage,
  goToLoginPage,
  goToTripDetailsPage,
} from "../routes/Coordinator";
import {
  AdminLists,
  ButtonDetalhes,
  Buttons,
  CardAdmin,
  CentralizerDiv,
  Header,
  Loading,
  StyledH2,
} from "./style";
import { BASE_URL } from "../constants/constants";
import { useRequestDataGet } from "../hooks/UseRequestData";
import { BiTrash } from "react-icons/bi";
import axios from "axios";

function AdminHomePage() {
  const navigate = useNavigate();
  useProtectedPage();

  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      auth: token,
    },
  };
  const [dataTrip, isLoadingUser, erroUser] = useRequestDataGet(
    `${BASE_URL}trips/`
  );

  const deleteTrip = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-lima-lamarr/trips/${id}`,
        headers
      )
      .then((response) => console.log(response.data), alert("Viagem Apagada!"))
      .catch((error) => console.log(error.message));
  };

  const getTrips =
    dataTrip &&
    dataTrip.trips.map((data) => {
      return (
        <div key={data.id}>
          <CardAdmin key={data.id}>
            <ButtonDetalhes
              onClick={() => {
                goToTripDetailsPage(navigate, data.id);
              }}
            >
              Detalhes
            </ButtonDetalhes>
            <h3>{data.name}</h3>

            <BiTrash
              className="trash"
              onClick={() => {
                deleteTrip(data.id);
              }}
            />
          </CardAdmin>
        </div>
      );
    });

  return (
    <div>
      <Header>
        <StyledH2>Painel Administrativo</StyledH2>
      </Header>

      <CentralizerDiv>
        {!isLoadingUser && !dataTrip && erroUser && erroUser}
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

        <AdminLists>{getTrips}</AdminLists>
        <Loading>{isLoadingUser && "...Carregando!!! ...."}</Loading>
      </CentralizerDiv>
    </div>
  );
}

export default AdminHomePage;
