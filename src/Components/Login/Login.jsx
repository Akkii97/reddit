import './Login.css'
const Login = () => {
    return (
        <div className="login-form">
            <h3>Login</h3>
            <div className='login-container'>
                <input type="email" placeholder="enter your email" />
                <input type="password" placeholder="password" />
                <button type='submit'>Login</button>
                <p>New to Reddit ? SignUp</p>
            </div>
            

        </div>
    );
};

export default Login;