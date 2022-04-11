import './App.css';
import "./components/header/header.css"

import React from "react"
import HeaderInfo from "./components/header/HeaderInfo"
import HeaderSkills from "./components/header/HeaderSkills"
import HeaderMoves from "./components/header/HeaderMoves"
import HeaderButtons from "./components/header/HeaderButtons.jsx"
import DataPicture from "./components/data/DataPicture"
import DataAside from "./components/aside/DataAside"
import DataMemo from "./components/DataMemo"
import localPokemonData from "./pokemon-data.json"


function App() {

  const [section, setSection] = React.useState(0)
  const [i, setIndex] = React.useState(0)
  const [localData, setLocalData] = React.useState(localPokemonData[i])
  const [apiData, setData] = React.useState([])
  //este state booleano es para la animacion del salto
  const [state, setState] = React.useState(true)


  const obtenerDatos = async (pokemon) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const pokemonData = await data.json();
    setData(pokemonData)
  }
  const setAllData = (index) =>{
    setIndex(index);
    obtenerDatos(localPokemonData[i].name)
    setLocalData(localPokemonData[i])
    setState(true)  
    setTimeout(() => {
      setState(false)
    }, 700)
  }

  React.useEffect(() => {
    obtenerDatos(localPokemonData[i].name);
    setTimeout(() => {
      setState(false)
    }, 700);
  }, [])


const pkmup = ()=>{
    if(localPokemonData[i + 1]){
      setAllData(i+1)
    }
    else {
      setAllData(0)
    }
    
}
const pkmdown = () =>{

  if(localPokemonData[i - 1]){
    setAllData(i-1)
  }
  else {
    setAllData(localPokemonData.length - 1)
  }
}


  if(section === 0){
    return (
      <>
        <div className="up change-btn" onClick={pkmup}><span>↑</span></div>
        <div className="container">
          <header>
            <HeaderInfo/>
            <HeaderButtons section={section} setSection={setSection}/>
          </header>
          <div className="pokemon-data-container">
            <div className="data-subcontainer">
              <DataPicture apiData={apiData} localData={localData} state={state} />
              <DataAside apiData={apiData} localData={localData} />
            </div>
            <div className="data-memo">
              <div className="data--item--left">
                <p>TRAINER MEMO</p>
              </div>
              <DataMemo class="nature" localData={localData} />
            </div>
          </div>
        </div>
        <div className="down change-btn" onClick={pkmdown}><span>↓</span></div>
      </>
    );
  }
  else if (section === 1){
    return(
      <>
        <div className="up change-btn" onClick={pkmup}><span>↑</span></div>
        <div className="container">
          <header>
            <HeaderSkills/>
            <HeaderButtons section={section} setSection={setSection}/>
          </header>
        </div>
        <div className="down change-btn" onClick={pkmdown}><span>↓</span></div>
      </>
    )
  }
  else if (section === 2) {
    return (
      <>
        <div className="up change-btn" onClick={pkmup}><span>↑</span></div>
        <div className="container">
          <header>
            <HeaderMoves/>
            <HeaderButtons section={section} setSection={setSection}/>
          </header>
        </div>
        <div className="down change-btn" onClick={pkmdown}><span>↓</span></div>
      </>
    )
  }


}


export default App;
