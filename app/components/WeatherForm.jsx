import React from 'react';

export default class WeatherForm extends React.Component {

    onFormSubmit = (e) => {
        e.preventDefault();

        let location = this.refs.location.value;
        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="search" placeholder="Search by location" ref="location" />
                <input type="submit" className="hollow button expanded" value="Get weather" />
            </form>
        );
    }
}
