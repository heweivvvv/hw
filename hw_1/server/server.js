import express from 'express';
import session from 'express-session';
import badyParser from 'body-parser';
import serverStatic from 'serve-static';
import cors from 'cors';
import {validateRecord, cleanupRecord} from "./recordHelper";

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
                result: false,
                msg: 'You are not authorized to perform the operation',
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

/**
 * @desc 登录请求接口
 */
app.post('/signin', (req, res) => {
    // console.log('handelSignin', res.headers);
    if (!req.body.loginName || !req.body.password) {
        res.json({msg: '姓名或者密码错误!', result: false});
    } else {
        let filter = {};
        filter.loginName = req.body.loginName;
        filter.password = req.body.password;
        db.collection('userInfo').findOne(filter).then(user => {
            req.session.user = {
                signedIn: true, name: user.loginName,
            };
            res.json({user, result: true});
        }).catch(err => {
            //console.log(err);
            res.json({msg: '姓名或者密码错误!', result: false});
        })
    }
});

/**
 * @desc 退出登录接口
 */
app.post('/signout', (req, res) => {
    if (req.session) req.session.destroy();
    res.json({result: true});
});

/**
 * @desc 获取支付类型
 */
app.get('/api/getPayTypeList', async (req, res) => {
    try {
        console.log('getPayTypeList')
        const types = await getPayTypeList();
        console.log(types);
        if (types) {
            res.json(types);
        } else {
            console.log('not find')
            res.json([])
        }
    } catch (e) {
        console.log('err:'+ e);
        res.json([]);
    }
});

/**
 * 获取消费类型
 */
app.get('/api/getConsumeTypeList', async (req, res) => {
    try {
        console.log('getPayTypeList')
        const types = await getConsumeTypeList();
        console.log(types);
        if (types) {
            res.json(types);
        } else {
            res.json([])
        }
    } catch (e) {
        res.json([]);
    }
});

/**
 * @desc 获取消费记录
 */
app.post('/api/getConsumeRecords', async (req, res) => {
    try {
        let consumeTypeMap = {};
        let payTypeMap = {};
        const records = await db.collection('consumeRecords').find().toArray();
        const consumeTypeList = await getConsumeTypeList();
        consumeTypeList.forEach(t => {
            consumeTypeMap[t.typeId] = t.name;
        });
        const payTypeList = await getPayTypeList();
        payTypeList.forEach(t => {
            payTypeMap[t.typeId] = t.name;
        });
        records.forEach(r => {
            r.consumeTypeText = consumeTypeMap[r.consumeTypeId];
            r.payTypeText = payTypeMap[r.payTypeId];
        });
        res.json({records, result: true});
    } catch (e) {
        res.json({msg: e, result: false});
    }
});

async function getConsumeTypeList() {
    return db.collection('consumeType').find().sort({order: 1}).toArray();
}

async function getPayTypeList() {
    return db.collection('payType').find().sort({order: 1}).toArray();
}

/**
 * @desc 新增记录
 */
app.post('/api/addRecord', async (req, res) => {
    try {
        const record = cleanupRecord(req.body);
        const error = validateRecord(record);
        if (!error) {
            const result = await db.collection.insertOne(record);
            if (result && result.id) {
                res.json({result: true});
            } else {
                res.json({result: false, msg: '新增失败'});
            }
        } else {
            res.json({result: false, msg: error})
        }
    } catch (e) {
        res.json({result: false, msg: e})
    }
});


function setDb(newDb) {
    db = newDb;
}

export {app, setDb};






