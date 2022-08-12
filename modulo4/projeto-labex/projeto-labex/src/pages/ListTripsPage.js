import React from "react";
import {useNavigate} from "react-router-dom"
import { goToBack, goToApplicationFormPage } from "../routes/Coordinator";

import { BASE_URL } from "../constants/constants";
import { useRequestDataGet } from "../hooks/UseRequestData";

function ListTripsPage() {
  const navigate = useNavigate();

  const [dataTrip,isLoadingUser,erroUser]=useRequestDataGet(`${BASE_URL}trips`)

  const tripList=dataTrip&&dataTrip.trips.map((data)=>{

    return <div key={data.id}><p>{data.name}</p>
    <p>{data.planet} </p>
    <p>{data.durationInDays}</p>
    <p>{data.date}</p>
    <p>{data.description}</p>  </div>
    })


  return (
    <div>
        {isLoadingUser&&"...Carregando!!! ...."}
        <ul>
        {!isLoadingUser&&dataTrip&&tripList}
        </ul>
        {!isLoadingUser&&!dataTrip&&erroUser&&erroUser}
        

    <p> ListTripsPage.js → Para vermos todas as viagens</p>
    <button
        onClick={() => {goToBack(navigate)}}
      >
        Voltar
      </button>
      <button
        onClick={() => {
          goToApplicationFormPage(navigate);
        }}
      >
        Inscrever-se
      </button>

    </div>
  );
}

export default ListTripsPage;