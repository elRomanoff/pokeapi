import React from 'react'
import DataItem from './DataItem'
import "./aside.css";

const claves = ["No", "NAME","TYPE", "OT","IDNo","ITEM"]

export default function DataAside({localData, apiData}) {

    const objToPrint = {
        "No": apiData.id,
        "NAME": localData.name,
        "TYPE": apiData.types,
        "OT": localData.originalTrainer,
        "IDNo": localData.IDNo,
        "ITEM": localData.item
    }
    const arrValues = Object.values(objToPrint)

    return (
        <aside className="data">
            {
                claves.map((clave, indice) =>{
                    return <DataItem clave={clave} value={arrValues[indice]} key={"data-item" + indice}/>
                })
            }
        </aside>
    )
}
