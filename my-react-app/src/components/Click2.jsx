import React from "react";

const Click2 = () => {

    let count=0
    const handleClick=(name)=>{
        if(count<3){
            count++;
            console.log(`You clicked me ${count} times`)
        }

        else{
            console.log('Stop clicking me')
        }
    }
  return (
    <div>
      <button onClick={()=> handleClick('Bro')}>Click me</button>
    </div>
  );
};

export default Click2;
