import { Card } from "../card/Card";
import React, { useState } from "react";
import { MatchPage } from "../matchpage/MatchPage";

export function Homepage() {
  const [openMatchpage, setOpenMatchpage] = useState(false);
  const [botao, setBotao] = useState(true);

  function renderizar() {
    switch (openMatchpage) {
      case false:
        return <Card trocaTela={trocaTela} />;
      case true:
        return <MatchPage trocaTela={trocaTela} />;
    }
  }
  
  function trocaTela() {
    if (openMatchpage === false) {
      setOpenMatchpage(true);
      setBotao(false);
    } else {
      setOpenMatchpage(false);
      setBotao(true);
    }
    return (
    <div>
        {renderizar()}
    </div>
    )
  }
}