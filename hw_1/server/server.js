import express from 'express';
import session from 'express-session';
import badyParser from 'body-parser';
import serverStatic from 'serve-static';
import cors from 'cors';

const app = new express();
app.use(serverStatic('static'));
app.use(badyParser.json());
app.use(session({secret: 'h7e3f5s6', resave: false, saveUninitialized: true}));
app.use(cors({
    origin: ['http://localhost:8080'],
    methods: ['GET', 'POST'],
    alloweHeaders: ['Conten-Type', 'Authorization'],
    credentials: true, // 发送cookie
}));

//设置跨域访问
/*app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Credentials: true'); 　　//是否支持cookie跨域
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    console.log('handelCORS', res);
    next();
});*/

let db;


app.all('/api/*', (req, res, next) => {
    if (req.method === 'DELETE' || req.method === 'POST' || req.method === 'PUT') {
        if (!req.session || !req.session.user) {
            res.status(403).send({
                message: 'You are not authorized to perform the operation',
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

app.post('/signin', (req, res) => {
    console.log('handelSignin', res.headers);
    if (!req.body.loginName || !req.body.password) {
        res.json({msg: '姓名或者密码错误!', result: false});
    } else {
        let filter = {};
        filter.loginName = req.body.loginName;
        filter.password = req.body.password;
        db.collection('userInfo').findOne(filter).then(user => {
            console.log(user);
            res.json({user, result: true});
        }).catch(err => {
            console.log(err);
            res.json({msg: '姓名或者密码错误!', result: false});
        })
    }
});


function setDb(newDb) {
    db = newDb;
}

export {app, setDb};






