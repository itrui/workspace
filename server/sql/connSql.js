let mysql = require('mysql');
let db = require('../configs/db');
let pool = mysql.createPool(db);


module.exports = {
  connPool (sql, val, callback) {
    pool.getConnection((err, conn) => {
      let q = conn.query(sql, val, (err, rows) => {
        if (err) {
          console.log(err);
        }else{
          //事件驱动回调
          callback(rows);
        }
        //释放连接
        conn.release();
      });
    });
  }
}

  /*connPool (sql,val,cb){
    pool.getConnection(function(err,connection){
      if(err){
        console.log('与mysql数据库建立连接失败');
      }else{
        console.log('与mysql数据库建立连接成功');
        connection.query('SELECT * FROM province',function(err,rows){
          if(err){
            console.log('查询数据失败');
          }else{
            console.log('查询数据成功');
            console.log(rows);
            cb(rows);
            pool.end();
          }
        })
      }
    })
  }*/



