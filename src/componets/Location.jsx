import Residents from "./Residents";

const Location = ({ dataLocation }) => {
  return (
    <div className="container locations">
      <div className="container-location d-flex justify-content-center">
        <div className="me-5 mt-2">
          <h3>
            <span>Nombre:</span>
          </h3>
          <h3>
            <span>Tipo:</span>
          </h3>
          <h3>
            <span>Dimensión:</span>
          </h3>
          <h3>
            <span>Población:</span>
          </h3>
        </div>
        <div className="ms-5 mt-2">
          <h3>{dataLocation.name}</h3>
          <h3>{dataLocation.type}</h3>
          <h3>{dataLocation.dimension}</h3>
          <h3>{dataLocation?.residents?.length}</h3>
        </div>
      </div>

      

      <div className="container-character">
        {dataLocation?.residents?.map((resident) => {
          return <Residents key={resident} resident={resident} />;
        })}
      </div>
    </div>

   
  );
};

export default Location;
