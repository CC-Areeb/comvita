import React from 'react'

export default function Navbar(props) {

    let listStyle = {
        "listStyleType": "none",
    }

    let marginLeft = {
        "marginLeft": "290px",
    }

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} shadow`}>
                <div className="container-fluid" style={marginLeft}>
                    <button className={`navbar-brand btn btn-white text-${props.textMode}`} href="#">
                        <header className='d-flex align-items-center justify-content-between'>
                            <div>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </header>
                    </button>
                    <div className="w-100 d-flex justify-content-end me-4 mt-2">
                        <ul>
                            <li style={listStyle}>
                                <a href="#" className={`nav-link py-0 fs-4 text-${props.textMode}`} data-toggle="dropdown" aria-expanded="false">
                                    Hi, admin
                                </a>
                            </li>
                        </ul>

                        <label htmlFor="" className={`text-${props.textMode} fs-3 mx-2`}>🌞</label>
                        <div className="form-check form-switch mx-4">
                            <input className="form-check-input fs-3" onClick={props.switchTheme} type="checkbox" role="switch" id="themeSwitch" />
                            <label className={`form-check-label fs-3 text-${props.textMode}`} htmlFor="">🌑</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}