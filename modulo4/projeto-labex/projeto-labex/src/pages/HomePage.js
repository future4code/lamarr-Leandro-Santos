import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToListTripsPage } from "../routes/Coordinator";
import { Button, HomeDiv, HomeSection } from "./style";

function HomePage() {
  const navigate = useNavigate();

  return (
    <HomeDiv>
      <HomeSection>
        <h1>LabeX</h1>
      </HomeSection>

      <Button
        onClick={() => {
          goToListTripsPage(navigate);
        }}
      >
        Ver Viagens
      </Button>
      <Button
        onClick={() => {
          goToLoginPage(navigate);
        }}
      >
        Login Admin
      </Button>
    </HomeDiv>
  );
}

export default HomePage;
