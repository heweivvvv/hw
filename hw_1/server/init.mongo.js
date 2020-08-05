const name = 'root';
const pw ='hewei@1994'
db = new Mongo('81.68.118.193:27017').getDB("hw1");
// console.log(db)
db.auth(name, pw);

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

