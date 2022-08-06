import axios from "axios";

export const getProfile = async (setProfile) => {
  try {
    const response = await axios.get(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Leandro/person"
    );
    setProfile(response.data.profile);
  } catch (error) {
    console.log(error);
  }
};

export const getMatches = async (setMatches) => {
  try {
    const response = await axios.get(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Leandro/matches"
    );
    setMatches(response.data.matches);
  } catch (error) {
    console.log(error);
  }
};

// export const choosePerson =
//   "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leandro/choose-person";

// export const clear =
//   "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leandro/clear";
