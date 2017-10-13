let sql = require('../sql/sql');
let moment = require('moment');
let connSql = require('../sql/connSql');
let bcrypt = require('bcryptjs');

function formatData(rows) {
  return rows.map(row => {
    let date = moment(row.create_time).format('YYYY-MM-DD');
    let obj = {};

    switch (row.role) {
      case 1:
        obj.role = '普通用户';
        break;
      case 10:
        obj.role = '管理员';
        break;
      case 100:
        obj.role = '超级管理员';
    }

    delete row.password;

    return Object.assign({}, row, {create_time: date}, obj);
  });
}


module.exports = {

  // 登录
  login (req, res) {
    let user_name = req.body.username;
    let pass = req.body.password;
    connSql.connPool(sql.queryWhere+'name = ?', ['user',user_name], rows => {
      if (!rows.length) {
        res.json({code: -1, msg: '用户名不存在'});
        return;
      }
      let password = rows[0].password;
      bcrypt.compare(pass, password, (err, sure) => {
        // if(err){
        if (pass===password) {
          let user = {
            user_id: rows[0].id,
            user_name: rows[0].name,
            password: rows[0].password
          };

          req.session.login = user;
          res.json({code: 200, msg: '登录成功', user: user});
        } else {
          res.json({code: -1, msg: '密码错误'});
        }
      });

    });

  },

  //注册
  register(req,res){
    let user = req.body.username;
    let pass = req.body.password;

    // 密码加盐
    bcrypt.hash(pass, 10, (err, hash) => {
      if (err) console.log(err);
     pass = hash;

      connSql.connPool('INSERT INTO `user` (`name`, `password`) VALUES (?, ?)',[user,pass],rows=>{
        res.json({code: 200, msg: 'done'});
      })

    });
  }








};
