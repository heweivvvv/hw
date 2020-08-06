db = new Mongo().getDB("hw1");
db.auth('root','hewei@1994')
db.userInfo.remove({});

db.userInfo.insert([
    {
        loginName: 'hw',
        userName: '何威',
        password: '1',
        userId: 1
    }
]);

db.userInfo.createIndex({loginName: 1});
db.userInfo.createIndex({userName: 1});
db.userInfo.createIndex({userId: 1});

db.consumeType.remove({});

db.consumeType.insert([
    {
        name: '餐饮美食',
        typeId: 1,
        sort: 1
    },
    {
        name: '服饰美容',
        typeId: 2,
        sort: 2
    },
    {
        name: '充值缴费',
        typeId: 3,
        sort: 3
    },
    {
        name: '交通出行',
        typeId: 4,
        sort: 4
    },
    {
        name: '休闲生活',
        typeId: 5,
        sort: 5
    },
    {
        name: '医疗保健',
        typeId: 6,
        sort: 6
    },
    {
        name: '住房物业',
        typeId: 7,
        sort: 7
    },
    {
        name: '图书教育',
        typeId: 8,
        sort: 8
    },
    {
        name: '生活服务',
        typeId: 9,
        sort: 9
    },
    {
        name: '其他',
        typeId: 10,
        sort: 10
    }
]);

db.consumeType.createIndex({name: 1});
db.consumeType.createIndex({typeId: 1});

db.payType.remove({});

db.payType.insert([
    {
        name: '现金',
        typeId: 1,
        sort: 1
    },
    {
        name: '银行卡',
        typeId: 2,
        sort: 2
    },
    {
        name: '支付宝',
        typeId: 3,
        sort: 3
    },
    {
        name: '微信支付',
        typeId: 4,
        sort: 4
    },
    {
        name: '其他方式',
        typeId: 5,
        sort: 5
    }
]);

db.payType.createIndex({name: 1});
db.payType.createIndex({typeId: 1});
