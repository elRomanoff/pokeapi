import React from 'react'

export default function DataPictureTitles({ data, localData}) {
  const genderEmoji = localData.gender==="male" ? "♂" : "♀️"
  return (
    <p className="data__picture--titles">
      <span><b>Lv</b>{localData.lvl}</span>
      <span>{localData.name.toUpperCase()}</span>
      <span className={localData.gender}>{genderEmoji}</span>
    </p>
  )
}