import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Pages/Main/index';

class Pokedex extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/" exact component={Main} />
                    <Route path="/home" exact component={Main} />
                </Router>
            </div>
        );
    }
}

render(<Pokedex />, document.getElementById('root'));