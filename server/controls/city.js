let sql = require('../sql/sql');
let connSql = require('../sql/connSql');
let moment = require('moment');
let url = require("url");

function formatData(rows) {
  /*return rows.map(row => {
    let date = moment(row.create_time).format('YYYY-MM-DD');
    return Object.assign({}, row, {create_time: date});
  });*/
  return rows;

}


module.exports = {

  // 获取省城列表
  getProv (req, res) {
    connSql.connPool(sql.queryAll,'province',  rows => {
      res.end(JSON.stringify({'status':200,'msg':'','data':{provList:rows}}, null,2));
    });
  },

// 获取地区列表
  getCityByProvId (req, res) {
    let url_info = url.parse(req.url, true);
    let prov_id=url_info.query.prov_id;
    connSql.connPool(sql.queryWhere+'prov_id=?', ['city',prov_id], rows => {
      res.end(JSON.stringify({'status':200,'msg':'','data':{cityList:rows}}, null,2));
    });
  },


// 获取车牌字头
  getCarCityFirstByProvId (req, res) {
    connSql.connPool(sql.queryWhere+'provinceid=? ORDER BY cityid desc', ['auto_belonging',0], rows => {
      res.end(JSON.stringify({'status':200,'msg':'','data':{carCityFirstList:rows}}, null,2));
    });
  },


};
