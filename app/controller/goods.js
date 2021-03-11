'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        ctx.body = 'hi, goods';
    }
    // 添加商品到数据库
    async addGoods() {
        const {
            ctx,
            service
        } = this
        service.goods.addGoods()
        ctx.body = 'success'
    }
    // 获取商品信息
    async getGoodsInfo() {
        const {
            ctx,
            service
        } = this
        const {
            name
        } = ctx.request.body
        const res = await service.goods.getGoodsInfo(name)
        if (res) {
            ctx.body = {
                code: 1,
                msg: res
            }
        } else {
            ctx.body = {
                code: 0,
                msg: '无查询商品信息'
            }
        }
    }
    // 获取分类列表
    async getCategoryGoods(){
        const {
            ctx,
            service
        } = this
        const {
            sort
        } = ctx.request.body
        const res = await service.goods.getCategoryGoods(sort)
        if (res) {
            ctx.body = {
                code: 1,
                msg: res
            }
        } else {
            ctx.body = {
                code: 0,
                msg: '无查询分类列表'
            }
        }
    }
    // 获取搜寻商品信息
    async getSearchList(){
        const {
            ctx,
            service
        } = this
        const {
            search
        } = ctx.request.body
        const res = await service.goods.getSearchList(search)
        if (res) {
            ctx.body = {
                code: 1,
                msg: res
            }
        } else {
            ctx.body = {
                code: 0,
                msg: '无查询分类列表'
            }
        }
    }
}

module.exports = GoodsController;