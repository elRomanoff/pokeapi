import './App.css';
import React from "react"
import HeaderInfo from "./components/header/HeaderInfo"
import HeaderButtons from "./components/header/HeaderButtons.jsx"
import DataPicture from "./components/data/DataPicture"
import DataAside from "./components/aside/DataAside"
import DataMemo from "./components/DataMemo"
import localPokemonData from "./pokemon-data.json"


function App() {
  
  const [i, setIndex] = React.useState(0)
  const [localData, setLocalData] = React.useState(localPokemonData[i])
  const [apiData, setData] = React.useState([])

  const obtenerDatos = async (pokemon) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const pokemonData = await data.json();
    setData(pokemonData)
  }

  React.useEffect(() => {
    obtenerDatos(localPokemonData[i].name)
  }, [])

const pkmup = ()=>{
    if(localPokemonData[i + 1]){
      setIndex(i + 1);
      obtenerDatos(localPokemonData[i].name)
      setLocalData(localPokemonData[i])
    }
    else {
      setIndex(0)
      obtenerDatos(localPokemonData[i].name)
      setLocalData(localPokemonData[i])
    }
}
const pkmdown = () =>{

  console.log(localPokemonData[i])

  if(localPokemonData[i - 1]){
    setIndex(i - 1);
    obtenerDatos(localPokemonData[i].name)
    setLocalData(localPokemonData[i])
  }
  else {
    setIndex(localPokemonData.length - 1)
    obtenerDatos(localPokemonData[i].name)
    setLocalData(localPokemonData[i])
  }
}


  return (
    <>
      <div className="up change-btn" onClick={pkmup}><span>↑</span></div>
    <div className="container">
      <header>
        <HeaderInfo/>
        <HeaderButtons/>
      </header>
      <div className="pokemon-data-container">
        <div className="data-subcontainer">
          <DataPicture apiData={apiData} localData={localData}/>
          <DataAside apiData={apiData} localData={localData}/>
        </div>
        <div className="data-memo">
          <div className="data--item--left">
            <p>TRAINER MEMO</p>
          </div>
          <DataMemo class="nature" localData={localData}/>
        </div>
      </div>
    </div>
      <div className="down change-btn" onClick={pkmdown}><span>↓</span></div>
    </>
  );
}

export default App;
