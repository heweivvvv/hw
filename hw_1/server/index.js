import SourceMapSupport from 'source-map-support';

SourceMapSupport.install();
import http from 'http';

import {MongoClient} from 'mongodb';

let appModule = require('./server.js');
let db, server;

const serverUrl ='81.68.118.193:27010';
const database='hw1'
const user='root'
const password= encodeURIComponent('hewei@1994');

const dbUrl = `mongodb://${user}:${password}@${serverUrl}/${database}`;

MongoClient.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(client => {
    db = client.db('hw1');
    server = http.createServer();
    appModule.setDb(db);

    server.on('request', appModule.app);
    server.listen(3000, () => {
        console.log('App started on port 3000');
    });
}).catch(error => {
    console.log('ERROR:', error);
});

if (module.hot) {
    module.hot.accept('./server.js', () => {
        server.removeListener('request', appModule.app);
        appModule = require('./server.js');     // eslint-disable-line
        appModule.setDb(db);
        server.on('request', appModule.app);
    });
}
