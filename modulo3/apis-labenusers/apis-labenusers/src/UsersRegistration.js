import axios from 'axios'
import {useState} from 'react'



const UsersRegistration = () => {
  const [inputName, setInputName] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [myList] = useState([])


  //Lista -> Componentes
  const inputs = myList.map((item, index) => {
    return (<ul key={index}>
        <li/>
        {item.name}
    </ul>)
})

  //Recebe dados do Input
  const updatesName = (event) => {
    setInputName(event.target.value)
  }
  const updatesEmail = (event) => {
    setInputEmail(event.target.value)
}


  //---------- Axios -----------
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
  const myHeaders = {
      headers: {
          Authorization: "leandro-lima-lamarr"
      }
  }
  //GET
  const getInputs = () => {
      axios.get(url, myHeaders)
      .then((response) => {
            setInputName(inputName)
            setInputEmail(inputEmail)})
            .catch(
          (erro) => {
              console.log(erro.response);
          })
  }

      //POST
      const body = {
        "name": inputName,
        "email": inputEmail
    }

    const postUsers = () => {
        axios.post(url, body, myHeaders).then(() => {
            alert("Usuário adicionado com sucesso!")
            getInputs()
        }).catch((erro) => {
            alert("Ops! Erro ao criar usuário!")
            //console.log(erro.response);
        })
        setInputName("")
        setInputEmail("")
    }

    return (
    <div>

   <input type="text" placeholder="Nome" value={inputName} onChange={updatesName} />
   <input type="email" placeholder="E-mail" value={inputEmail} onChange={updatesEmail} />
    <button onClick={postUsers}>
       Criar Usuário
    </button>  
    {inputs}             

      </div>
  )
}
export default UsersRegistration;