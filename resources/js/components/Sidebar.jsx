import React from 'react'
import Dashboard from './Dashboard'
import Navbar from './Navbar'

export default function Sidebar() {

    let hoverStyle = {
        //
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start mt-4 fs-4" id="menu">
                                <li className='py-2'>
                                    <a href="" className='text-decoration-none text-light' style={hoverStyle}>
                                        <i className="bi bi-speedometer pe-2"></i>
                                        Dashboard
                                    </a>
                                </li>

                                <li className=''>
                                    <a href="" className='text-decoration-none text-light' style={hoverStyle}>
                                        <i className="bi bi-card-list pe-2"></i>
                                        Manage Products
                                    </a>
                                </li>

                                <li className='py-2'>
                                    <a href="" className='text-decoration-none text-light' style={hoverStyle}>
                                        <i className="bi bi-rocket-takeoff-fill pe-2"></i>
                                        Manage Codes
                                    </a>
                                </li>

                                <li className='py-2'>
                                    <a href="" className='text-decoration-none text-light' style={hoverStyle}>
                                        <i className="bi bi-search pe-2"></i>
                                        Manage Code Search
                                    </a>
                                </li>

                                <li className='py-2'>
                                    <a href="" className='text-decoration-none text-light' style={hoverStyle}>
                                        <i className="bi bi-archive-fill pe-2"></i>
                                        Disable Codes
                                    </a>
                                </li>

                                <li className='py-2'>
                                    <a href="" className='text-decoration-none text-light' style={hoverStyle}>
                                        <i className="bi bi-tag-fill pe-2"></i>
                                        Manage Labels
                                    </a>
                                </li>

                                <li className='py-2'>
                                    <a href="" className='text-decoration-none text-light' style={hoverStyle}>
                                        <i className="bi bi-basket-fill pe-2"></i>
                                        Manage Batches
                                    </a>
                                </li>

                                <li className='py-2'>
                                    <a href="" className='text-decoration-none text-light' style={hoverStyle}>
                                        <i className="bi bi-people-fill pe-2"></i>
                                        Manage Users
                                    </a>
                                </li>

                                <li className='py-2'>
                                    <a href="" className='text-decoration-none text-light' style={hoverStyle}>
                                        <i className="bi bi-list-columns-reverse pe-2"></i>
                                        Manage Roles
                                    </a>
                                </li>

                                <li className='py-2'>
                                    <a href="" className='text-decoration-none text-light' style={hoverStyle}>
                                        <i className="bi bi-diagram-3-fill pe-2"></i>
                                        Manage Categories
                                    </a>
                                </li>

                                <li className='py-2'>
                                    <a href="" className='text-decoration-none text-light' style={hoverStyle}>
                                        <i className="bi bi-person-workspace pe-2"></i>
                                        Manage Beekeepers
                                    </a>
                                </li>

                                <li className='py-2'>
                                    <a href="" className='text-decoration-none text-light' style={hoverStyle}>
                                        <i className="bi bi-geo-alt-fill pe-2"></i>
                                        Manage Regions
                                    </a>
                                </li>

                                <li className='py-2'>
                                    <a href="" className='text-decoration-none text-light' style={hoverStyle}>
                                        <i className="bi bi-envelope-at-fill pe-2"></i>
                                        Manage Emails
                                    </a>
                                </li>

                                <li className='py-2'>
                                    <a href="" className='text-decoration-none text-light' style={hoverStyle}>
                                        <i className="bi bi-envelope-slash-fill pe-2"></i>
                                        Invalid Codes
                                    </a>
                                </li>

                                <li className='py-2'>
                                    <a href="" className='text-decoration-none text-light' style={hoverStyle}>
                                        <i className="bi bi-file-earmark-bar-graph pe-2"></i>
                                        Reports
                                    </a>
                                </li>

                                <li className='py-2'>
                                    <a href="" className='text-decoration-none text-light' style={hoverStyle}>
                                        <i className="bi bi-gear-fill pe-2"></i>
                                        Manage Site Settings
                                    </a>
                                </li>

                                <li className='py-2'>
                                    <a href="" className='text-decoration-none text-light' style={hoverStyle}>
                                        <i className="bi bi-box-arrow-right pe-2"></i>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                            <hr />
                        </div>
                    </div>
                    <div className="col text-center">
                        <Navbar />
                        <Dashboard></Dashboard>
                    </div>
                </div>
            </div>
        </div>
    )
}