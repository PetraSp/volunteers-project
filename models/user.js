const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

//all the fields have to be filled out here, prints from the database
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
    bio: String,
    location: { type: { type: String }, coordinates: [0,0] },
    // imageUrl: String,
    mon: Boolean,
    tue: Boolean,
    wed: Boolean,
    thu: Boolean,
    fri: Boolean,
    sat: Boolean,
    sun: Boolean,
    mornings: Boolean,
    afternoons: Boolean,
    evenings: Boolean,
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

