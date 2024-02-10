import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = (props) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        navigate("/login");
        window.location.reload();
    }

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">{props.title}</NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                    {!localStorage.getItem('auth-token') ? <form className="d-flex" role="search">
                        <NavLink to={"/login"} className="btn btn-outline-primary mx-1">Login</NavLink>
                        <NavLink to={"/signup"} className="btn btn-primary mx-1">SignUp</NavLink>
                    </form> : <button onClick={handleLogout} className="btn btn-primary mx-1">Logout</button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
