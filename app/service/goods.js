const Service = require('egg').Service;
const fs = require('fs')
class GoodsService extends Service {
    // 添加用户到集合 -- 注册
    async addGoods() {
        fs.readFile('./goods.json', 'utf8', (err, res) => {
            if (err) {
                console.log(err)
                return 'error'
            }
            const data = JSON.parse(res)
            data.goods.map(async (val) => {
                const goods = new this.ctx.model.Goods(val)
                goods.save()
            })
        })
    }
    // 获取商品信息
    async getGoodsInfo(name) {
        const findResult = await this.ctx.model.Goods.findOne({ name })
        if (findResult) {
            return findResult
        }
        return
    }
    // 获取分类列表
    async getCategoryGoods(sort) {
        const findResult = await this.ctx.model.Goods.find({ sort })
        if (findResult) {
            return findResult
        }
        return
    }
    // 获取搜寻商品信息
    async getSearchList(search) {
        // 查询搜索内容
        const reg = new RegExp(search)
        const findResult = await this.ctx.model.Goods.find({
            name: {
                $regex: reg
            }
        })
        if (findResult) {
            return findResult
        }
        return
    }
}

module.exports = GoodsService;