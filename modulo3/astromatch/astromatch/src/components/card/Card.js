import {Img} from "../card/style"


export function Card(props){
  const {photo,age, bio} = props
  return(
    <div>      
      <Img src={"https://s1.r29static.com/bin/entry/7e8/340x408,85/2138124/image.webp"} alt="Fotos usuário" />
      <h3>Nome</h3>
      <h3>idade</h3>
      <p>Descrition</p>
            
    </div>
  )
}