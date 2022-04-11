import React from 'react'

export default function HeaderButton({sectionNumber, setSection, selected = false, covered = false}) {


  const setSectionNumber = () =>{
    setSection(sectionNumber)
  }
  let className = "header__buttons--button" 

  if(covered) className += " covered-btn"
  else if(selected) className += " selected-btn"

  return (
      <div className={className} onClick={setSectionNumber} ></div>
  )
}
