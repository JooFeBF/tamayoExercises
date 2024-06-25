import { useState } from 'react'
import Child from './Child'
function Parent() {
  const [bool, setBool] = useState(true)

  const handleChangeBool = () => {
    setBool((bool) => !bool)
  }


  return (
    <>
      <div>
        <Child bool={bool} changeBool={handleChangeBool}></Child>
      </div>
    </>
  )
}

export default Parent
