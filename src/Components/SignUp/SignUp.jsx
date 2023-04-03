import { useState } from "react";

const SignUp = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
    }
    return (

        <div className="signup-container">
            <form onSubmit={handleSignUp}>
                <label htmlFor="name">Full Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <div>
                    <label htmlFor="email">Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <p>Already registered ? <button onClick={()=> props.onSwitchForm('login')}>Login In</button></p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;