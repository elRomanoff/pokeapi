import React from 'react'
import "./memo.css"

export default function DataMemo({localData}) {
  return (
    <>
      <p className="subtitle underlined">{localData.nature.toUpperCase()} nature.</p>
      <p className="subtitle underlined">Met in {localData.location.toUpperCase()} at lvl {localData.foundLvl}.</p>
    </>
  )
}
