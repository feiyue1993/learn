const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddlerware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');

const app = express();
const compiler = webpack(webpackConfig);
const router = express.Router();

router.get('/simple/get', function(req, res){
    res.json({
        msg: `hello world`
    })
});

router.post('/base/post', function(req, res){
    res.json(req.body);
})

router.post('/base/buffer', function(req, res){
    let msg = [];
    req.on('data', (chunk)=>{
        if(chunk){
            msg.push(chunk);
        }
    });

    req.on('end', ()=>{
        let buf = Buffer.concat(msg);
        res.json(buf.toJSON());
    })
})

/*
 *  错误路由
 */
router.get('/error/get', function(req, res){
    if(Math.random() > .5){
        res.json({
            msg: `hello world`
        })
    }else{
        res.status(500);
        res.end();
    }
})

router.get('/error/get', function(req, res){
    setTimeout(() => {
        res.json({
            msg: `hello world`
        })
    }, 3000)
})

app.use(router);

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/__build__',
    stats: {
        colors: true,
        chunks: false
    }
}));

app.use(webpackHotMiddlerware(compiler));

app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 8080;
module.exports = app.listen(port, ()=>{
    console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`);
})