import { useState, useEffect } from "react";
import NavBar from "./componets/NavBar";
import Location from "./componets/Location";
import Input from "./componets/input";
import Loader from "./componets/Loader";
import axios from "axios";
import "./App.css";

function App() {
  const [loader, setLoader] = useState(true)
  const [location, setLocation] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/location/${Math.floor(
          Math.random() * 127
        )}`
      )
      .then((resp) => 
      {
        setTimeout(() => {setLoader(false); }, 2000);
        setLocation(resp.data)
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      {
        loader && <Loader/>
      }
      <NavBar />
      <Input setLocation={setLocation} />
      <Location dataLocation={location} />
    </div>
  );
}

export default App;
