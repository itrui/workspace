let sql = require('../sql/sql');
let connSql = require('../sql/connSql');

module.exports = {
  // 获取省城列表
  getBusiness (req, res) {
    connSql.connPool(sql.queryAll,'businessrisks',  rows => {
      res.end(JSON.stringify({'status':200,'msg':'','data':{BusinessRisksList:rows}}, null,2));
    });
  }
}
