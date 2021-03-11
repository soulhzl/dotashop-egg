// 配置mongoose集合
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const GoodsSchema = new Schema({
        name: {
            type: String,
            require: true
        },
        desc: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        imgList: {
            type: Array,
            require: true
        },
        detailImgList: {
            type: Array,
            require: true
        },
        commet: {
            type: Number,
            require: true
        },
        sort: {
            type: String,
            require: true
        },
        bgimg: {
            type: String,
            require: true
        },
    });
    return mongoose.model('Goods', GoodsSchema, 'goods');
};