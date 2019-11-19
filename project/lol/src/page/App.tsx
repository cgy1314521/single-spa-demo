import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { asyncComponent } from 'react-async-component';
import './App.less';

const asyncHome = asyncComponent({
    resolve: () => import( /* webpackChunkName: "Home" */ './home/Home')
});

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path = "/lol" component = { asyncHome }></Route>
                <Route path = '*' component = { asyncHome }></Route>
            </Switch>
        </Router>
    )
}

export default App;