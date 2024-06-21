import React from 'react'

const Optionalprops = ({person = "Default Person "}) => {
  return (
    <div>
      Hello ,{person}!
    </div>
  )
}

export default Optionalprops
