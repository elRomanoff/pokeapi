import React from 'react'
import DataPictureTitles from "./DataPictureTitles"
import Images from "./Images"

export default function DataPicture({apiData, localData}) {
  return (
    <div className="data__picture title">
      <DataPictureTitles localData={localData}/>
        <div className="data__picture--imgcontainer">
          <div className="flex-pokemon-container">
            <Images src={apiData?.sprites?.other?.dream_world?.front_default}/>
          </div>
          <div className="flex-pokeball-container">
            <Images src={"pokeball"}/>
          </div>  
        </div>
    </div>
  )
}
