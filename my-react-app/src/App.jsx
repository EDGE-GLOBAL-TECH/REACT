import Food  from './components/Food'
import Card from './components/Card'
import Button from './components/Button/Button'
import Student from './components/Student'
import UserGreating from './components/UserGreating'
import List2 from './components/List2'
import Click from './components/Click'
import Click2 from './components/Click2'
import MyComponent from './components/MyComponent'
import ClassWork from './components/ClassWork'

function App() {
  

  return (
    <>
      {/* <Food/>
      <Card/> 
       <Button/>
      <Student name ='David' age ={20} isStudent ={true}/>
      <Student name ='Doe' age ={20} isStudent ={false}/>
      <Student name ='Tamilore' age ={20} isStudent ={false}/>  */}


  <UserGreating isLoggedIn={true} username='Dave'/>
  
  <List2/>
   <Click/>
   <Click2/>
   <MyComponent/>
   <ClassWork/>
       


    </>
  )
}

export default App