const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// 获取配置文件路径
const configPath = path.resolve(__dirname, 'project.prod.json');

const app = express();

app.use(bodyParser.json());

// 跨域设置
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.post('/projectHashChange', (req, res) => {
    const { project, indexFilePath } = req.body;
    try {
        // 获取项目配置
        const projectConfig = JSON.parse(fs.readFileSync(configPath).toString('utf-8'));
        const imports = projectConfig.imports;

        imports[project] = indexFilePath;    
        
        fs.writeFile(configPath, 
            Buffer.from(JSON.stringify(projectConfig), 'utf-8'), 
            (err) => {
                if (!err) {
                    res.send({
                        status: true,
                        message: '配置文件修改成功'
                    });
                } else {
                    res.send({
                        status: false,
                        message: '配置文件修改失败，请即使联系开发人员'
                    });
                }
            }
        )

    } catch(err) {
        res.send({
            status: false,
            message: '配置文件修改失败，请即使联系开发人员'
        });
    }
});

app.get('/projectConfig', (req, res) => {
    try {
        const projectConfig = JSON.parse(fs.readFileSync(configPath).toString('utf-8'));
        res.send({
            status: true,
            config: projectConfig
        });
    } catch(err) {
        res.send({
            status: false,
            message: '获取配置文件失败'
        });
    }
});

app.listen(8000);
