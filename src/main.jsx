import React from 'react';
import ReactDOM from 'react-dom';
import app from './App';

import { createElementWithContext } from 'fluxible-addons-react';

import { navigateAction } from 'fluxible-router';

const dehydratedState = {};

app.rehydrate(dehydratedState, (err, context) => {
    if (err) {
        throw err;
    }

    context.executeAction(navigateAction, {url: location.pathname})
        .then(() => {
            window.context = context;
            const mountNode = document.getElementById('content');

            ReactDOM.render(
                createElementWithContext(context),
                mountNode
            );
        });
});