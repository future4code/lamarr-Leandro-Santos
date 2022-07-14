import React, {useState} from 'react'



function Etapa1() {
  return (
    <div>
       <h1>ETAPA 1 - DADOS GERAIS</h1>
      <ul>
        <li>
          <label>1. Qual seu nome?</label>
          <input type="text"></input>
        </li>
        <li>
          <label>2. Qual sua idade?</label>
          <input type="text"></input>
        </li>
        <li>
          <label>3. Qual o seu e-mail?</label>
          <input type="text"></input>
        </li>
        <li>
          <label>4. Qual seu nome</label>
          <select>   
          <option>Selecione</option>
          <option>Ensino Médio Incompleto</option>
          <option>Ensino Médio Completo</option>
          <option>Ensino Superior Incompleto</option>
          <option>Ensino Superior Completo</option>
          </select>
        </li>
        
           </ul>

    </div>
  );
}

export default Etapa1;
