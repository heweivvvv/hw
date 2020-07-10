db = new Mongo().getDB("hw1");

db.userInfo.remove({});

db.userInfo.insert([
    {
        loginName: 'hw',
        userName: '何威',
        password: '1',
        userId: '0001'
    }
]);

db.userInfo.createIndex({ loginName: 1 });
db.userInfo.createIndex({ userName: 1 });
db.userInfo.createIndex({ userId: 1 });
