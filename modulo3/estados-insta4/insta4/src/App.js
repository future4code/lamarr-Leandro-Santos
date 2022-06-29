import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'leeoliima'}
            fotoUsuario={'https://media-exp2.licdn.com/dms/image/C5103AQG1P5ma_6sqyg/profile-displayphoto-shrink_200_200/0/1517275479726?e=1661990400&v=beta&t=RCtF2soLzoO2E7zqRNh4hIe3NDrFMRAl2PG1vyae9q4'}
            fotoPost={'https://th.bing.com/th/id/R.876431e612e1f2b9a74723054fd68a48?rik=urGykpqIHGKsGQ&pid=ImgRaw&r=0'}
          />
          <Post
            nomeUsuario={'v_mota'}
            fotoUsuario={'https://media-exp2.licdn.com/dms/image/C4D03AQFFZSK7Q-8pTg/profile-displayphoto-shrink_200_200/0/1545754980434?e=1661990400&v=beta&t=pIB-Z6j22gRDCjSybHMgHKOlntDe23P5HBKPqvoWyx8'}
            fotoPost={'https://th.bing.com/th/id/OIP.jbLcWYzC0AG9w925MUTgdgHaE8?pid=ImgDet&rs=1'}
          />
          <Post
            nomeUsuario={'brazaoo'}
            fotoUsuario={'https://media-exp2.licdn.com/dms/image/D4E03AQG1BARsxH3h9Q/profile-displayphoto-shrink_200_200/0/1648414713849?e=1661990400&v=beta&t=H2y-Jwau1pW8vf7OpjnRty2Vwatg5bPD-amV8nnOybY'}
            fotoPost={'https://media.istockphoto.com/photos/closeup-of-a-male-tattoo-artist-tattooing-a-tiger-on-a-young-mans-arm-picture-id1331291531?b=1&k=20&m=1331291531&s=170667a&w=0&h=sZY-QVx-QZBnwC6t_FuMYtE3Va3eOtux61GFM71rtEA='}
          />
  </div>
)

}


export default App;
