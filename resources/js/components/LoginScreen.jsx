import React from 'react';

export default function LoginScreen() {
    let formStyles = {
        width: "32rem",
        marginTop: "17rem",
    }

    let formPadding = {
        padding: "1rem",
    }

    return (
        <>
            <div className="d-grid container shadow p-3 mb-5 bg-body rounded mx-auto rounded-4 bg-success" style={formStyles}>
                <div className="row" style={formPadding}>
                    <form className="col">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" name='email' id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' id="password" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" name='remember_me' id="remember_me" />
                            <label className="form-check-label" htmlFor="remember_me">Remember me</label>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-outline-success">login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}