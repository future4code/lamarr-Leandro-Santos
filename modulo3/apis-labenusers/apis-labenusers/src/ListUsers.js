import { useState } from 'react'


const ListUsers = () => {
  const [myList, setMyList] = useState([])
  
  //Lista -> Componentes
  const inputs = myList.map((item, index) => {
      return (<ul key={index}>
          <li/>
          {item}
      </ul>)
  })
 
  //Evento troca de tela
  const swapScreen = (event) => {
    setMyList(event.target.value)
  }


  return (    
    <div>
  <section>
        <button onClick={swapScreen}>Trocar de tela</button>
   </section>  
     {inputs}
    </div>        

  )
}
export default ListUsers;