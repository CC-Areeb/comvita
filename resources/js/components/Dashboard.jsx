import React from 'react';
import Example from './Example';
import Navbar from './Navbar';

export default function Dashboard() {
    return (
        <>
            <Navbar link="test">
                <Example />
            </Navbar>
            <div className="text-center mt-4">
                <h1 className="text-primary">Dashboard</h1>
                <h3 className="text-success">View Stats</h3>
            </div>
        </>
    )
}