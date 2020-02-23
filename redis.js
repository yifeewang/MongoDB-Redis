const redis = require('redis');

let client1 = redis.createClient(6379,'localhost')
let client2 = redis.createClient(6379,'localhost')

// client.set('age', '10', redis.print)
// client.hset('person', 'sex', 'boy', redis.print)
// client.hgetall('person',  (err, keys)=>{
//     console.log(keys);
    
// })
//发布订阅模式
client1.subscribe('banana')
client1.on('message', (err, msg) => {
    console.log(msg);
    
})

client2.publish('banana','i,m not a banana')