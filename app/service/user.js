const Service = require('egg').Service;
const crypto = require('crypto');
class UserService extends Service {
    // 给密码加密
    getMd5Data(data) {
        return crypto.createHash('md5').update(data).digest('hex');
    }
    // 注册/登录
    async lorUser(name, pwd) {
        const findResult = await this.ctx.model.User.findOne({ username: name })
        if (findResult) {
            if (findResult.password == this.getMd5Data(pwd)) {
                const token = this.app.jwt.sign({
                    id: findResult._id,
                    name
                }, this.app.config.jwt.secret)
                return {
                    token: 'Bearer ' + token,
                    desc: '登录成功'
                }
            }
            return
        }
        const user = new this.ctx.model.User({
            username: name,
            password: this.getMd5Data(pwd)
        })
        const token = this.app.jwt.sign({
            name,
            pwd
        }, this.app.config.jwt.secret)
        const userRes = await user.save()
        return { token, desc: '注册成功' }
    }
    // 保存地址
    async saveAddress(user) {
        const findResult = await this.ctx.model.User.findOne({ _id: user._id })
        if (findResult) {
            let tmpArr = findResult.address

            if (user.deleteid + 1) {
                tmpArr.splice(user.deleteid, 1)
            } else {
                if (user.id <= tmpArr.length) {
                    // 更新地址
                    tmpArr.splice(user.id - 1, 1, user)
                } else {
                    // 添加地址
                    tmpArr.push(user)
                }
            }
            const updateResult = await this.ctx.model.User.updateOne({
                _id: user._id
            }, {
                $set: {
                    'address': tmpArr
                }
            })

            if (updateResult) {
                return updateResult
            }
        }
        return
    }
    // 获取地址
    async getAddressList(id) {
        const findResult = await this.ctx.model.User.findOne({ _id: id }, {password: false})
        if (findResult) {
            return findResult
        }
        return
    }
}

module.exports = UserService;