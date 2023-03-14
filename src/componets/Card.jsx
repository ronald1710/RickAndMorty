const Card = () => {
  return ( 
    
    <div className="containerCard">
      <div className="containerImg">
      <img className="imgcard" src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="" />
      </div>
      <div className="containerTitle">
        <p className="title">Adjudicator Rick</p>
      </div>
      <div className="containerInfoGeneral">
      <div className="containerInfo">
        <div className="containerInfo1">
          <p>RAZA</p>
          <p>ORIGEN</p>
          <p>APARICIONES</p>
        </div>
        <div className="containerInfo2">
          <p>Humano</p>
          <p>Sin info</p>
          <p>1 Vez</p>
        </div>
        </div>
      </div>
    </div>
   );
}
 
export default Card; 