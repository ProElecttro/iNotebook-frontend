import React, { useContext, useState } from 'react'

import { useNavigate } from "react-router-dom";
import alertContext from '../contexts/alert/alertcontext';

const Login = () => {
    const { showAlert } = useContext(alertContext)
    const [credentials, setCredentials] = useState({ email: '', password: '' })

    const navigate = useNavigate()

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            let url = "http://localhost:4000/api/v1/auth/login"

            const method = "POST"

            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            };

            const body = JSON.stringify({
                email: credentials.email,
                password: credentials.password
            })

            const response = await fetch(url, { method, headers, body });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            
            if(data.success) {
                localStorage.setItem('auth-token', data.token)
                navigate("/")
                showAlert("Logged In successfully", "success")
            }
            
        } catch (error) {
            showAlert("Internal Server Error", "Danger")
        }
    }

    return (
        <div className="container">
            <h2 className='my-3'>Login to Your iNotebook Account</h2>
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

export default Login
