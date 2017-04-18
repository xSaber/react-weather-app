import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {

    onSearch = (e) => {
        e.preventDefault();
        let location = this.refs.location.value;
        let encodedLocation = encodeURIComponent(location);

        if (location) {
            this.refs.location.value = '';
            window.location.search = '?location=' + encodedLocation;
        }
    }

    render () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Weather App</li>
                        <li>
                            <NavLink exact to="/" activeClassName="active">Get Weather</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="active">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/examples" activeClassName="active">Examples</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search by location" ref="location" />
                            </li>
                            <li>
                                <input type="submit" className="button" placeholder="Get Weather" value="Get weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}


// <h3>Header component</h3>
// <NavLink exact to="/" activeClassName="active">Get Weather</NavLink>
// <NavLink to="/about" activeClassName="active">About</NavLink>
// <NavLink to="/examples" activeClassName="active">Examples</NavLink>
