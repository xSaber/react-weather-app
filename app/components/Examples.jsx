import React from 'react';
import { Link } from 'react-router-dom';

export default class Examples extends React.Component {

    render () {
        const exampleLocations = ['Kharkiv', 'Kiev', 'Los Angeles', 'Washington DC', 'Santa Monica'];
        const exampleLinks = exampleLocations.map((location, index) => {
            return (
                <li key={index}>
                    <Link to={{ pathname: '/', search: `?location=${location}` }}>{location}</Link>
                </li>
            )
        });

        return (
            <div className="text-center">
                <h1 className='page-title'>Examples</h1>
                <p>Example locations to fetch weather for</p>
                <ol className="text-left">
                    {exampleLinks}
                </ol>
            </div>
        );
    }
}
