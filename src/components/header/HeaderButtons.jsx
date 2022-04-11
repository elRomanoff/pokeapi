import React from 'react'
import HeaderButton from "./HeaderButton.jsx"

export default function HeaderButtons({setSection, section}) {

  if(!section){
    return (
      <div className="header__buttons">  
        <HeaderButton selected={true} sectionNumber={0} setSection={setSection}/>
        <HeaderButton sectionNumber={1} setSection={setSection}/>
        <HeaderButton sectionNumber={2} setSection={setSection}/>
      </div>
    )
  }
  else if(section === 1){
    return(
      <div className="header__buttons">
        <HeaderButton covered={true} sectionNumber={0} setSection={setSection} />
        <HeaderButton selected={true} sectionNumber={1} setSection={setSection} />
        <HeaderButton sectionNumber={2} setSection={setSection} />
      </div>
    )
  }
  else if (section === 2) {
    return(
      <div className="header__buttons">
        <HeaderButton covered={true} sectionNumber={0} setSection={setSection} />
        <HeaderButton covered={true} sectionNumber={1} setSection={setSection} />
        <HeaderButton selected={true} sectionNumber={2} setSection={setSection} />
      </div>
    )
  }
}
