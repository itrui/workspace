let express = require('express');
let city = require('../controls/city');
let user = require('../controls/user');
let goods = require('../controls/goods');
let api = require('../api');


let router = express.Router();

// city
router.get(api.provList, city.getProv);
router.get(api.cityList, city.getCityByProvId);
router.get(api.carCityFirst, city.getCarCityFirstByProvId);


//user
// router.get(api.login, user.login);
router.post(api.login, user.login); // 登录
router.post(api.register, user.register);

//goods
router.get(api.getBusiness, goods.getBusiness);


module.exports = router;
