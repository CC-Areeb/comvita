import React from 'react';
import ApexChart from './ApexChart';

export default function Dashboard(props) {
    return (
        <>
            <div className="text-center mt-4">
                <h1 className="text-primary">Dashboard</h1>
                <h3 className="text-success">View Stats</h3>
                <ApexChart />
            </div>
        </>
    )
}