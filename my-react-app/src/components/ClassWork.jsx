import React, { useState } from 'react'

const ClassWork = () => {
    const [count1, setCount1] = useState(0);
    // const [count2, setCount2] = useState(0);

    const Increment=()=>{
        setCount(count1+1);

        // const Decrement=()=>{
        //     setCount2(count2 -1);

        // }




    }

  return (
    <div>
        <h1>Variables</h1>
        
        <div>
        <button onClick={Increment}>Increment</button>
        <p>Increment Count: {Count1}</p>
        </div>
        
        {/* <div>
        <button onClick={Decrement}>Decrement</button>
        <p>Decrement Count: {Count2}</p>
        </div> */}
        
        
        
    </div>
  )
}

export default ClassWork