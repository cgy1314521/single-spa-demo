const fs = require('fs');
const path = require('path');
const axios = require('axios');
const config = require('./webpack/webpack.build.prod');

// dist文件夹路径
const distPath = path.resolve(__dirname, 'dist');

// 获取文件列表
const files = fs.readdirSync(distPath);

// 项目入口文件名
let indexFileName = '';

// 获取打包后的入口文件名
for (const filename of files) {
    if (filename.indexOf('dota-app') !== -1) {
        indexFileName = filename;
        break;
    }
}

axios({
    method: 'post',
    url: 'http://118.31.111.115:8000/projectHashChange',
    data: {
        indexFilePath: config.output.publicPath + indexFileName,
        project: '@app/dota'
    },
    headers: {
        'Content-type': 'application/json'
    }
}).then((res) => {
    console.log(res);
}).catch((err) => {

});



