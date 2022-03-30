import React from 'react'
import "./Types.css"

export default function type({type}) {
  return (
      <b className={type + " title"}>{type.toUpperCase() }</b>
  )
}
