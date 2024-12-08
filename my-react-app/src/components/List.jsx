import React from 'react'

const List = () => {

    const fruits=['apple' , 'orange' , 'Banana', 'coconut' ,'pineapple' ]

    const listItems= fruits.map(fruit=> <li>{fruit}</li>);
  return (
    <div>{ListItems}
    
    </div>
  )
}

export default List