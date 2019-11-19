import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/App';
import singleSpaReact from 'single-spa-react';

// 如果是独立开发，或线上独立访问，则直接render, 后续export无影响
if (process.env.DEV_ENV === 'app' || (window.location.host.indexOf('118.31.111.115:7001') !== -1) || (window.location.host.indexOf('localhost:7001') !== -1)) {
    ReactDOM.render(<App />, document.getElementById('dota-app'));
}

const domElementGetter = () => {
    let el = document.getElementById('dota-app');
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


