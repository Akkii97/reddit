import './Login.css'
const Login = (props) => {
    return (
        <div className="login-form">
            <h2>Login</h2>
            <div className='login-container'>
                <form onSubmit={onLoginForm}>
                <input value={email} type="email" placeholder="enter your email" />
                <input value={password} type="password" placeholder="password" />
                <button type='submit'>Login</button>
                <p>New to Reddit ? <button onClick={()=> props.onSwitchForm('signup')}>SignUp</button></p>
                </form>
            </div>
        </div>
    );
};

export default Login;