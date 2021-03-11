// 配置mongoose集合
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        username: {
            'type': String,
            'require': true
        },
        password: {
            'type': String,
            'require': true
        },
        email: {
            'type': String,
            'require': true
        },
        avatar: {
            'type': String
        },
        identity: {
            'type': String,
            'require': true
        },
        date: {
            'type': Date,
            'default': Date.now
        },
        address: {
            'type': Array,
        }
    });
    return mongoose.model('User', UserSchema, 'user');
};