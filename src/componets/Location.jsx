import Residents from "./Residents";

const Location = ({dataLocation}) => {

  return ( 
    <div >
<div className="container-location container">
      <div>
        <h3><span>Nombre:</span></h3>
        <h3><span>Tipo:</span></h3>
        <h3><span>Dimensión:</span></h3>
        <h3><span>Población:</span></h3>
      </div>
      <div>
      <p>{dataLocation.name}</p>
        <p>{dataLocation.type}</p>
        <p>{dataLocation.dimension}</p>
        <p>{dataLocation?.residents?.length}</p>
      </div>
  </div>


  <div>
    {
     dataLocation?.residents?.map((resident) => {
      return(
<Residents 
key={resident}
resident ={resident}
/>
      )
     } )
}
  </div>
  </div>
   );
}
 
export default Location;