import React from 'react'

const UserGreating = (props) => {

    if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }
    else{
        return <h2>Please Login in to continue</h2>
    }

    


  return (
    <div>
       {/* {props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Please Login to continue</h2>} */}
    </div>
  )
}

export default UserGreating