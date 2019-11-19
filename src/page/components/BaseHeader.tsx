import React from 'react';
import './BaseHeader.less';

const BaseHeader: React.FC = () => {

    const jump = (path: string) => {
        window.history.pushState(null, '', path);
    }

    return (
        <div className = "platform-header">
            <h1 className = "platform-name">通用平台</h1>
            <div 
                className = "sub-name">广告屏管理</div>
            <div 
                onClick = { () => jump('/dota') }
                className = "sub-name">dota</div>
            <div 
                onClick = { () => jump('/lol') }
                className = "sub-name">lol</div>
        </div>
    )
}

export default BaseHeader;