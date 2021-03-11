/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1615088978521_7622';

  // add your middleware config here
  config.middleware = [];
  // 配置mongoose
  config.mongoose = {
    client: {
      url: "mongodb://localhost:27017/dotashop",
      options: {},
    },
  };
  // 配置鉴权
  config.jwt = {
    secret: '123456',
  };
  // 关闭csrf
  config.security = {
    csrf: {
      enable: false,
    }
  }
  // 跨域
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  // 绑定端口
  config.cluster = {
    listen: {
      port: 8022,
    }
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
