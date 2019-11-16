const mongoose = require("mongoose");

const Details = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Why no name?"]
    },
    dob: {
      type: String,
      required: true
    },
    phone: {
      type: String, 
      // unique : true,
      dropDups: true,
      validate: {
        validator: function(v) {
          return /\d{10}/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
      },
      required: [true, "User phone number required"]
    },
    amount:{
      type: Number,
      required:[true]
    }
  },
  {
    timestamps: true
  }
);
// Export Contact model
module.exports = mongoose.model("details", Details);
