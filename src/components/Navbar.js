import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/" >Trend in Tech</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item ms-3">
                            <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
                        </li>
                        <li className="nav-item ms-3">
                            <NavLink className="nav-link" to="/learning">LEARNING</NavLink>
                        </li>
                        <li className="nav-item ms-3">
                            <NavLink className="nav-link" to="/news">NEWS</NavLink>
                        </li>
                        {/* <li className="nav-item ms-3 dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar
