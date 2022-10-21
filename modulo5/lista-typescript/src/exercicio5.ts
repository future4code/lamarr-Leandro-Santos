//EXERCICIO 05

type Users = {
  name: string;
  email: string;
  role: string;
};

const lista = () => {
  const usuarios: Users[] = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" },
  ];

  let admin: Users[] = usuarios.filter((item: Users) => {
    return item.role === "admin";
  });

  let emails: string[] = admin.map((item) => {
    return item.email;
  });

  return emails;
};

console.table(lista());
