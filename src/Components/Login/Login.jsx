import { useState } from 'react';
import './Login.css'
const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginForm = (e) => {
        e.preventDefault();
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <div >
                <form onSubmit={onLoginForm} className='login-form'>
                    <input value={email} type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="enter your email" />
                    <input value={password} type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="password" />
                    <button type='submit'>Login</button>
                    <p>New to Reddit ? <button onClick={() => props.onSwitchForm('signup')}>SignUp</button></p>
                </form>
            </div>
        </div>
    );
};

export default Login;