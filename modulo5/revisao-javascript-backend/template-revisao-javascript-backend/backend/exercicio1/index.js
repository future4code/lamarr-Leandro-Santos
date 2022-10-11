//Parte 1 - Revisão JS para o Back-end

// Exercícios de exemplo
let client = {};

client = {
  user: "Leandro",
  account: 1234567,
  age: 27,
  login: () => {
    console.log(`Usuário logado com sucesso! Bem vindo ${client.user} :)`);
  },
};

client.login();

function sum(a, b) {
  return a + b;
}
console.log(sum(10, 6));

//Exercício Parte 1

const validation = (item) => {
  console.log(item);
};

function temperatureConverter(item, number, callback) {
  if (item === "K") {
    callback(` ${number}° Celsius é equivalente a ${number + 273.15}° Kelvin`);
  } else if (item === "F") {
    callback(
      `  ${number}° Celsius é equivalente a ${1.8 * number + 32}° Farenheit`
    );
  } else if (item !== "F" || item !== "K") {
    callback(`Erro. Parâmentro ${item} inválido`);
  }
}
temperatureConverter("K", "30", validation);
