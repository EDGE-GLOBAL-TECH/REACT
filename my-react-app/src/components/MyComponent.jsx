import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName=()=>{
    setName("Lasop");
  }

//   const updateName=(event)=>{
//     setName(event.target.value)
//   }

  const IncrementAge=()=>{
    setAge(age+2);
  }

  const toggleEmploymentStatus=()=>{
    setIsEmployed(!isEmployed);
  }

  return (
    <div>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Is Employed:{isEmployed ? 'Yes' : 'NO'}</p>
      <button onClick={updateName}>SetName</button>
      <button onClick={IncrementAge}>INCREMENT</button>
      <button onClick={toggleEmploymentStatus}>EMPLOYMENT STATUS</button>

      
    </div>
  );
};

export default MyComponent;
