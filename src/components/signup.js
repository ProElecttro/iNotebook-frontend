import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import alertContext from '../contexts/alert/alertcontext';

const SignUp = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const {showAlert} = useContext(alertContext)

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = "https://i-notebook-backend-sandy.vercel.app:4000/api/v1/auth/signup";
            const method = "POST";

            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            };

            const body = JSON.stringify({
                email: credentials.email,
                password: credentials.password
            });

            const response = await fetch(url, { method, headers, body });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}, ${await response.text()}`);
            }

            const data = await response.json();
            
            if(data.success) {
                localStorage.setItem('auth-token', data.token)
                navigate("/")
                showAlert("Account created successfully", "success")
            }

        } catch (error) {
            showAlert( "Internal server error", "danger")
        }
    };

    return (
        <div className="container">
            <h2 className='my-3'>Create Your iNotebook Account</h2>
            <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={credentials.email} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SignUp
