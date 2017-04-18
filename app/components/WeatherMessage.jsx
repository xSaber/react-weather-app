import React from 'react';

export default class WeatherMessage extends React.Component {

    componentWillUnmount () {
        // alert('weather message unmounted');
    }

    render () {
        let { temp, location } = this.props;

        return (
            <h4 className="text-center">It is {temp} degrees in {location}</h4>
        );
    }

}
