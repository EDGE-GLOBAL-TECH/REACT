import React from "react";

const List2 = () => {
  const fruits = [
    {  name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "Coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ]


//   fruits.sort((a,b) =>a.name.localeCompare(b.calories))

//   fruits.sort((a,b) =>a.calories.localeCompare(b.name))


const localeFruits = fruits.filter(fruit=>fruit.calories>100);

//   const listItems = fruits.map((fruit, i) => 
//     <li key={i}>
//       {fruit.name}: &nbsp;
//       <b>{fruit.calories}</b>
//     </li>
//   );

  const listItems = localeFruits.map(localeFruits => <li key={localeFruits.id}>
                                                        {localeFruits.name}: &nbsp;
                                                    <b>{localeFruits.calories}</b></li>);
  return (

    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default List2
