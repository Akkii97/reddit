import './SignUp.css'
import users from '../../Utils/Users';
import Login from '../Login/Login';

import { useState } from "react";

const SignUp = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [user, setUser] = useState([]);

    const handleSignUp = (e) => {
        e.preventDefault();

       localStorage.setItem('name', name);
       localStorage.setItem('email',email);
       localStorage.setItem('password',password);


       console.log('Registered Succesfully');

       return(
        <>
        <h2>Registered Succesfully</h2>
        < Login />
        </>
        

       )
    
    }
    return (

        <div className="signup-container">
            <form onSubmit={handleSignUp} className='signup-form'>
                <label htmlFor="name">Full Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <div>
                    <label htmlFor="email">Email </label><br/>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label><br/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button>Sign Up</button>
                    <p>Already registered ? <button onClick={()=> props.onSwitchForm('login')}>Login</button></p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;