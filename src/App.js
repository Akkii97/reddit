import Header from './Components/Header/Header';
import Upvote from './Components/Upvote/Upvote';
import Login from './Components/Login/Login';
import './App.css';

function App() {

  // const login =() => {
  //     <Login />
  // };
  return (
    <div className="App">
      {/* <Header /> */}
      <h1>Reddit App</h1>
      {/* <button >Login</button> */}
      <Login />
      {/* <Upvote /> */}
    </div>
  );
}

export default App;
