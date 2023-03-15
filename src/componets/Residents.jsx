import axios from "axios";
import { useEffect, useState } from "react";

const Residents = ({resident}) => {
 const [character, setCharacter] = useState ({})
 useEffect (()=>{
  axios
    .get(resident)
    .then((resp)=>{setCharacter(resp.data)})
    .catch(error=>console.error(error))
 },[])

  return (

 <div>
        <img src={character?.image} alt={character?.name} />
        <h3>{character?.name}</h3>
        <div>
          <div>
            <h3>RAZA</h3>
            <h3>ORIGEN</h3>
            <h3>APARICIONES</h3>
          </div>
          <div>
            <h3>{character?.species}</h3>
            <h3>{character?.origin?.name}</h3>
            <h3>{character?.episode?.length}</h3>
          </div>
          <span>{character?.status}</span>
        </div>
      </div> 

    );
}
 
export default Residents;