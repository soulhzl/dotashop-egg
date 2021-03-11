'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', jwt, controller.home.index);
  router.get('/goods', jwt, controller.goods.index);
  router.get('/goods/addgoods', jwt, controller.goods.addGoods);
  router.post('/goods/getgoodsinfo', jwt, controller.goods.getGoodsInfo);
  router.post('/goods/getcategorygoods', jwt, controller.goods.getCategoryGoods);
  router.post('/goods/getsearchList', jwt, controller.goods.getSearchList);
  router.get('/user', jwt, controller.user.index);
  router.post('/user/loruser', controller.user.lorUser);
  router.post('/user/saveaddress', jwt, controller.user.saveAddress);
  router.post('/user/getaddresslist', jwt, controller.user.getAddressList);
};
