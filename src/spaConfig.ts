
import * as singleSpa from 'single-spa';
import 'systemjs/dist/system';
import 'systemjs/dist/extras/use-default';
import axios from 'axios';
import devConfig from './config/project.dev.json';

const SystemJS = (window as any).System;

const pathVerify = (path: string) => {
    return (location: Location) => {
        return location.pathname.indexOf(`${path}`) === 0;
    }
}

// 注册项目并启动
const registerApp = () => {
    singleSpa.registerApplication('platform', () => import('./index'), () => true);
    singleSpa.registerApplication('dota', () => { return SystemJS.import('@app/dota').then((res: any) => {console.log(res); return res} )}, pathVerify('/lol'));
    singleSpa.registerApplication('lol', () => { return SystemJS.import('@app/lol').then((res: any) => {console.log(res); return res} )}, pathVerify('/lol'));

    singleSpa.start();
}

// 插入项目依赖
const insertProjectConfig = (projectConfig: any) => {
    const $config = document.createElement('script');
    $config.type = "systemjs-importmap";
    // todo text为啥是这个
    $config.text = JSON.stringify(projectConfig);

    const $firstChild = document.body.firstChild;

    if ($firstChild) {
        document.body.insertBefore($config, $firstChild);
    } else {
        document.body.appendChild($config);
    }

    registerApp();
}

// 开发环境
if (process.env.NODE_ENV === 'development') {
    insertProjectConfig(devConfig);
} else {
    axios({
        method: 'get',
        url: 'http://118.31.111.115:8000/projectConfig'
    }).then((res) => {
        const prodConfig = res.data.config;
        insertProjectConfig(prodConfig);
    });
}
