import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../routes/Coordinator";

function TripDetailsPage() {
  const navigate = useNavigate();

  return (
    <div>
      <p>TripDetailsPage.js →</p>

      <button
        onClick={() => {
          goToBack(navigate);
        }}
      >
        Voltar
      </button>
      <button>Aprovar</button>
      <button>Reprovar</button>
    </div>
  );
}

export default TripDetailsPage;
