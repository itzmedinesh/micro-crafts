import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter,Route } from 'react-router-dom';
import HomeLayout from '../components/HomeLayout';
import ContentPage from '../components/ContentPage';

export function index(request, response) {

    const context = {};
    const markup = ReactDOMServer.renderToString(
        <HomeLayout>
            <StaticRouter location={request.url} context={context}>
                <Route exact path="/" component={ContentPage} />
            </StaticRouter>
        </HomeLayout>
    )
	response.render('index', {markup:markup});
}