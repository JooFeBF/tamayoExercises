import { useState } from 'react'

function Child(props) {
  return (
    <>
      <div>
        <p>{props.bool.toString()}</p>
        <button onClick={props.changeBool}>Invert bool</button>
      </div>
    </>
  )
}

export default Child
