import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Making jQuery and foundation a global variables
import 'script-loader!jquery';
import 'script-loader!foundation-sites';

// Loading foundation css
import 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css';
import '../styles/app.scss';

import Header from 'Header';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

export default class App extends React.Component {

    componentWillMount() {
        $(document).foundation();
    }

    render () {
        return (
            <Router>
                <div>
                    <Header />
                    <div className="row">
                        <div className="columns medium-6 large-4 small-centered">
                            <Route exact path="/" component={Weather} />
                            <Route path="/about" component={About} />
                            <Route path="/examples" component={Examples} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
