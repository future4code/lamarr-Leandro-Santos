import { CardInfo, Img } from "../card/style";
import { getProfile } from "../constants/apis";
import React, { useState, useEffect } from "react";
import { ButtonNO, Buttons, ButtonYes, Container } from "../homepage/style";
import { AiFillHeart, AiOutlineClose } from "react-icons/ai";
import axios from "axios";

export function Card(props) {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    getProfile(setProfile);
  }, []);

  async function CreateMatch(id) {
    try {
      const response = await axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leandro/choose-person",
        {
          id: id,
          choice: true,
        },
        {}
      );
      getProfile(setProfile);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Container>
    <button onClick={()=>props.trocaTela}>Matches</button>

          <CardInfo>
        <Img src={profile.photo} />
        <h2>
          {profile.name} {profile.age}
        </h2>
        <p>{profile.bio}</p>
      </CardInfo>
      <Buttons>
        <ButtonNO onClick={() => getProfile(setProfile)}>
          <AiOutlineClose className="icon-no" />
        </ButtonNO>
        <ButtonYes onClick={() => CreateMatch(profile.id)}>
          <AiFillHeart className="icon-yes" />
        </ButtonYes>
      </Buttons>
    </Container>
    
  );
}
