import React from 'react'
import Type from "./Type"

const returnFunction = (e)=>{
  return
}

export default function DataItem({clave,value}) {
  if(!value) value = "none"
  try{
    value = value.toUpperCase()
  }
  catch(e){
    returnFunction(e)
  }
  if (clave === "No" && value) {
    if(value < 10) value = "00"+value
    else if (value < 100) value = "0" + value
    return(
      <div className="data--item">
        <span className="data--item--left">
          <p>{clave}</p>
        </span>
        <span className="subtitle data--item--right">
          <p>{value}</p>
        </span>
      </div>
    )
  }

  else if(clave === "TYPE" && value !== "NONE") return(
    <div className="data--item">
      <span className="data--item--left">
        <p>{clave}</p>
      </span>
      <span className="subtitle data--item--right type">
        <p>
          {
            value.map((type,index) =>{
              return <Type key={"value"+index} type={type.type.name}></Type>
            })
          }
        </p>
      </span>
    </div>
    )
  
  else return (
    <div className="data--item">
        <span className="data--item--left">
        <p>{clave}</p>
        </span>
        <span className="subtitle data--item--right">
        <p>{value}</p>
        </span>
    </div>
  )
}
