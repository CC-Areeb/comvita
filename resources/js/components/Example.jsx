import React from 'react';
import ReactDOM from 'react-dom';

export default function Example() {
    return (
        <div className='text-center fs-1 mt-4 text-success'>This is an example component</div>
    )
}
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}