import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/App';
import singleSpaReact from 'single-spa-react';

const domElementGetter = () => {
    let el = document.getElementById('platform-app');
    if (!el) {
        el = document.createElement('div');
        el.id = 'platform-app';
        document.body.appendChild(el);
    }
    return el;
}

const lifeCycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App as any,
    domElementGetter
});

export const bootstrap = lifeCycles.bootstrap;
export const mount = lifeCycles.mount;
export const unmount = lifeCycles.unmount;


