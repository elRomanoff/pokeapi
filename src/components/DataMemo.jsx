import React from 'react'

export default function DataMemo({localData}) {
  return (
    <>
      <p className="subtitle">{localData.nature.toUpperCase()} nature</p>
      <p className="subtitle">Met in {localData.location.toUpperCase()} at lvl {localData.foundLvl}.</p>
    </>
  )
}
