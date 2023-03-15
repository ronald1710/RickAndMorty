import { useState } from "react";
import axios from "axios";

const Input = ({setLocation}) => {

  const[id, setId] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    }

  const searchById = () => {
    axios
        .get (`https://rickandmortyapi.com/api/location/${id}`)
        .then(resp=>setLocation(resp.data))
        .catch(error=>console.error(error))
 }


  return ( 

    <form onSubmit={handleSubmit} className="container form">
        <input 
        className="input"
        type="text" 
        placeholder="Type location Id  (1-126)" 
        value={id} 
        onChange={(e) => setId(e.target.value)}
         />
        <button 
        className="button"
        type="submit"
        onClick={searchById}
        >Search</button>
      </form>


   );
}
 
export default Input;