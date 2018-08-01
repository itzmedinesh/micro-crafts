import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import ContentPage from './components/ContentPage';

ReactDOM.hydrate((
    <HomeLayout>
        <Router>
            <Route exact path="/" component={ContentPage} />
        </Router>
    </HomeLayout>
), document.getElementById('main'));
