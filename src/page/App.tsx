import React from 'react';
import BaseHeader from './components/Baseheader';
import './App.less';

const App: React.FC = () => {
    return (
        <div className = "platform">
            <BaseHeader></BaseHeader>
            <div className = "app-wrap">
                <div id = "mangagement-app"></div>
                <div id = "dota-app"></div>
                <div id = "lol-app"></div>
            </div>
        </div>
    )
}

export default App;