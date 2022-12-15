import React from 'react'

export default function Navbar() {

    let listStyle = {
        "listStyleType": "none"
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="navbar-right d-flex align-items-center ml-auto h-100">
                        <ul>
                            <li style={listStyle}>
                                <a href="#" className="nav-link py-0" data-toggle="dropdown" aria-expanded="false">
                                    Hi, admin
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}