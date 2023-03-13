const Card = () => {
  return ( 
    
    <div className="containerCard">
      <div className="containerImg">
      <img className="imgcard" src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="" />
      </div>
      <div className="containerTitle">
        <p>Adjudicator Rick</p>
      </div>
      <div>
        <div>
          <p>RAZA</p>
          <p>ORIGEN</p>
          <p>APARICIONES</p>
        </div>
        <div>
          <p>Humano</p>
          <p>Sin info</p>
          <p>1 Vez</p>
        </div>
      </div>
    </div>
   );
}
 
export default Card; 