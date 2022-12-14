import React from 'react';
import ReactDOM from 'react-dom';

export default function Dashboard() {
    return (
        <>
            <h3>Dashboard</h3>
        </>
    )
}
if (document.getElementById('dashboard')) {
    ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}