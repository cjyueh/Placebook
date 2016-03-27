var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: String, required: true},
    hometown: {type: String, required: true},
    location: {type: [Number], required: true}, // [Long, Lat] for mongo, [Lat, Long] for google
    htmlverified: String,
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()}
});

//indexes this schema in 2dsphere format (critical for running proximity searches)
UserSchema.index({location: '2dsphere'});

var User = mongoose.model('User', UserSchema);
module.exports = User;