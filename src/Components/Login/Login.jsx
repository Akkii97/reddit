import './Login.css'
const Login = () => {
    return (
        <div className="login-form">
            <h2>Login</h2>
            <div className='login-container'>
                <input type="email" placeholder="enter your email" />
                <input type="password" placeholder="password" />
                <button type='submit'>Login</button>
                <p>New to Reddit ? <button>SignUp</button></p>
            </div>
            

        </div>
    );
};

export default Login;