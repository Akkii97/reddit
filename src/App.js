import Header from './Components/Header/Header';
import Upvote from './Components/Upvote/Upvote';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp'
import users from './Utils/Users';
import './App.css';
import { useState } from 'react';

function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm =(formName) =>{
    setCurrentForm(formName);
  }

  // const login =() => {
  //     <Login />
  // };
  return (
    <div className="App">
      {/* <Header /> */}
      <h1>Reddit App</h1>
      {/* <button >Login</button> */}
      {/* <Upvote /> */}
      {
        currentForm==='login'?<Login onSwitchForm={toggleForm}/>:<SignUp onSwitchForm={toggleForm}/>
      }
      {
        users.map((user)=>{
          return(
            <div>
              {user.name}
              {user.email}
              {user.password}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
