import React from 'react';

export default class ErrorModal extends React.Component {

    constructor (props) {
        super(props);

        this._container = null;
    }

    componentDidMount () {
        this.modal = new Foundation.Reveal($('#weather-error-modal'));
        this.modal.open();
    }

    refContainer = (container) => {
        this._container = container;
    }

    render () {
        return (
            <div ref={this.refContainer}>
                <div id="weather-error-modal" className="reveal tiny text-center" data-reveal="">
                    <h4>Couldn't fetch weather</h4>
                    <p>{this.props.errorMessage}</p>
                    <button className="button hollow" data-close="">Ok</button>
                </div>
            </div>
        );
    }

}
