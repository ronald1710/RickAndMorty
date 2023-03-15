import axios from "axios";
import { useEffect, useState } from "react";

const Residents = ({ resident }) => {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios
      .get(resident)
      .then((resp) => {
        setCharacter(resp.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="">
      <div className="card  bg-transparent">
        <span className="status text-center">{character?.status}</span>
        <div className="container-img">
          <img
            src={character?.image}
            className="card-img-top"
            alt={character?.name}
          />
        </div>
        <div className="card-body">
          <div className="container-title">
            <h5 className="card-title text-center">{character?.name}</h5>
          </div>
          <div className="container-info">
            <div className="container-items">
              <p>RAZA</p>
              <p>ORIGEN</p>
              <p>APARICIONES</p>
            </div>
            <div className="container-descrptions">
              <p>{character?.species}</p>
              <p>{character?.origin?.name}</p>
              <p>{character?.episode?.length}</p>
            </div>
          </div>
          <div className="container-color"></div>
        </div>
      </div>
    </div>
  );
};

export default Residents;
