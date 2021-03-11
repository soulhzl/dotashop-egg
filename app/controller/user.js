'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        ctx.body = 'hi, user';
    }
    // 登录/注册
    async lorUser() {
        const { ctx, service } = this
        const { username: name, password: pwd } = ctx.request.body
        const res = await service.user.lorUser(name, pwd)
        if (res) {
            ctx.body = {
                code: 1,
                msg: res
            }
        } else {
            ctx.body = {
                code: 0,
                msg: '注册失败或登录密码错误'
            }
        }
    }
    // 保存地址
    async saveAddress(){
        const { ctx, service } = this
        const { user } = ctx.request.body
        const res = await service.user.saveAddress(user)
        if (res) {
            ctx.body = {
                code: 1,
                msg: res
            }
        } else {
            ctx.body = {
                code: 0,
                msg: '保存失败'
            }
        }
    }
    // 获取地址
    async getAddressList(){
        const { ctx, service } = this
        const { id } = ctx.request.body
        const res = await service.user.getAddressList(id)
        if (res) {
            ctx.body = {
                code: 1,
                msg: res
            }
        } else {
            ctx.body = {
                code: 0,
                msg: '获取失败'
            }
        }
    }
}

module.exports = UserController;