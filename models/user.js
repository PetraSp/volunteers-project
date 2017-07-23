const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  	username: String,
  	password: String,
    fullname: {
      type: String,
      required: true
    },
    age: Number,
    country: String,
    phone: Number,
    occupation: String,
    miniBiography: String,
    av: String,
    avTimes: String,
    activity: String,
    location: { type: { type: String }, coordinates: [Number] },
    // imageUrl: String,
  	role: {
    	type: String,
    	enum : ['user', 'nHome'],
    	default : 'user'
  	}
	}, {
  	timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
	})

  userSchema.index({ location: '2dsphere' });

const User = mongoose.model("User", userSchema);



module.exports = User;

