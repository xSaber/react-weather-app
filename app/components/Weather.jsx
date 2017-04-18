import React from 'react';
import 'url-search-params-polyfill';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import ErrorModal from './ErrorModal';
import { weatherApiKey } from 'parameters';

export default class Weather extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            isLoading: false,
            errorMessage: ''
        };
    }

    componentDidMount () {
        let location = new URLSearchParams(this.props.location.search).get('location');
        if (location) {
            this.handleSearch(location);
        }
    }

    handleSearch = (location) => {
        let weatherUrl = `http://api.openweathermap.org/data/2.5/find?q=${location}&units=metric&appid=${weatherApiKey}`;

        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        })

        fetch(weatherUrl)
            .then(response => response.ok ? response.json() : Promise.reject({ message: response.statusText }))
            .then((weatherData) => {
                if (weatherData.list.length === 0)
                    return Promise.reject({ message: 'Location not found' });

                this.setState({
                    location: weatherData.list[0].name,
                    temp: weatherData.list[0].main.temp,
                    isLoading: false
                });
            }).catch((error) => {
                this.setState({
                    isLoading: false,
                    errorMessage: error.message
                });
            });
    }

    render () {
        const { temp, location, isLoading, errorMessage } = this.state;

        let renderMessage = () => {
            if (isLoading) {
                return (<h3>Loading...</h3>);
            } else if (typeof temp === 'number' && location) {
                return (<WeatherMessage temp={temp} location={location} />);
            }
        }

        let renderErrorModal = () => {
            if (errorMessage) {
                return (<ErrorModal reason={errorMessage} />);
            }
        }

        return (
            <div className="text-center">
                <h1 className='page-title'>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderErrorModal()}
            </div>
        );
    }
}
