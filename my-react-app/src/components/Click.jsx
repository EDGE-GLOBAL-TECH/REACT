import React from 'react'

const Click = () => {

function handleClick(){
    console.log('OUCH')
}


function handleClick2(name){
    console.log(`${name}stop calling me`)
}

  return (
    <div>
      <button onClick={handleClick()}>Click me</button>
      <button onClick={() => handleClick2("David")}>Click me</button>

    </div>
  )
}

export default Click