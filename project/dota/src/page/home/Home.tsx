import React from 'react';
import { Route, Link } from 'react-router-dom';
import { asyncComponent } from 'react-async-component';
import './Home.less';

const asyncAgility = asyncComponent({
    resolve: () => import(/* webpackChunkName: "Agility" */ '../agility/Agility')
});

const asyncPower = asyncComponent({
    resolve: () => import(/* webpackChunkName: "Power" */ '../power/Power')
});

const App: React.FC = () => {
    return (
        <div className = "dota-app">
            <h2>dota21312312-app</h2>
            <div className = "link-wrap">
                <Link 
                    className = "jump" 
                    to = "/dota/agility">敏捷英雄</Link>
                <Link 
                    className = "jump"
                    to = "/dota/power">力量英雄</Link>
            </div>
            <div className = "module-wrap">
                <Route path = '/dota/agility' component = { asyncAgility }></Route>
                <Route path = '/dota/power' component = { asyncPower }></Route>
            </div>
        </div>
    )
}

export default App;