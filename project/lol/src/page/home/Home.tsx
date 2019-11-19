import React from 'react';
import { Route, Link } from 'react-router-dom';
import { asyncComponent } from 'react-async-component';
import './Home.less';

const asyncAgility = asyncComponent({
    resolve: () => import(/* webpackChunkName: "adc" */ '../adc/ADC')
});

const asyncPower = asyncComponent({
    resolve: () => import(/* webpackChunkName: "master" */ '../master/Master')
});

const App: React.FC = () => {
    return (
        <div className = "dota-app">
            <h2>lol-app</h2>
            <div className = "link-wrap">
                <Link 
                    className = "jump" 
                    to = "/lol/adc">ADC</Link>
                <Link 
                    className = "jump"
                    to = "/lol/master">法师</Link>
            </div>
            <div className = "module-wrap">
                <Route path = '/lol/adc' component = { asyncAgility }></Route>
                <Route path = '/lol/master' component = { asyncPower }></Route>
            </div>
        </div>
    )
}

export default App;