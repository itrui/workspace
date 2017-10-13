/*
// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
var http = require("http");
var url = require("url");
const mysql = require('mysql');
var client = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : 'install',
  port      : '3306',
  database  : 'mydata',
});
/!*var db    = {};

db.query = function(sql, callback){

  if (!sql) {
    callback();
    return;
  }
  client.query(sql, function(err, rows, fields) {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    callback(null, rows, fields);
  });
};
module.exports = db;*!/

/!*var conn;
function handleError () {
  conn = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs',
    database: 'nodejs',
    port: 3306
  });

  //连接错误，2秒重试
  conn.connect(function (err) {
    if (err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleError , 2000);
    }
  });

  conn.on('error', function (err) {
    console.log('db error', err);
    // 如果是连接断开，自动重新连接
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleError();
    } else {
      throw err;
    }
  });
}
handleError();*!/


var CITY = 'city';
var PRIOV = 'province';
var sql='SELECT city.city_name,province.prov_name,city.city_id,province.prov_id FROM '+CITY+','+PRIOV+' WHERE city.prov_id = province.prov_id AND province.prov_id=?';

client.connect();

/!*
var id=13;
client.query(
  'SELECT * FROM '+CITY+','+PRIOV+' WHERE city.prov_id = province.prov_id AND province.prov_id=?',id,
  function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    if(results)
    {
      for(var i = 0; i < results.length; i++)
      {
        console.log(results[i].id, results[i].city_id, results[i].city_name);
      }
    }
    client.end();
  }
);*!/


function getCityById(city_d) {
  var buf_list = [];
  client.query(
    sql,city_d,
    function selectCb(err, results, fields) {
      if (err) {
        throw err;
      }
      if(results)
      {
        for(var i = 0; i < results.length; i++)
        {
          buf_list.push(results);
          console.log(results[i].id, results[i].city_id, results[i].city_name);
        }

      }
      // console.log(JSON.stringify(results));

      client.end();
    }
  );
}

// getCityById(10)



/!*
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mysql.connect('mongodb://localhost/test');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));
/!************** 定义模式loginSchema **************!/
const loginSchema = mongoose.Schema({
  account : String,
  password : String
});

/!************** 定义模型Model **************!/!*!/
/!*const Models = {
  Login : mongoose.model('Login',loginSchema)
}

module.exports = Models;*!/

var server = http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  //如果你发一个GET到http://127.0.0.1:9000/test
  var url_info = url.parse(req.url, true);
  //检查是不是给/test的request
  if(url_info.pathname === '/test'){
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    var city_id=url_info.query.city_id;

    client.query(sql,city_id,function(err,rows,fields){
      //处理你的结果
      // res.end(rows.constructor);
      // 输出结果

      // res.end(JSON.stringify(rows));
      res.end(JSON.stringify({'status':200,'msg':'','data':{cityList:rows}}, null,2));
      // res.end(JSON.parse(rows));

/!*
      console.log(rows);
      console.log(typeof(rows));
      // res.end(rows.join);
      console.log(err);
      console.log(fields);*!/
    });
  }
  //这个是用来回复上面那个post的，显示post的数据以表示成功了。你要是有别的目标，自然不需要这一段。
  else{
    req.pipe(res);
  }
});
server.listen(9000, '127.0.0.1');
//在server关闭的时候也关闭mysql连接
server.on('close',function(){
  client.end();
});
console.log('listening on port  9000');



*/
