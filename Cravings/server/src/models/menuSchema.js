import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
  resturantID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  dishName: {
    type: String,
    required: true,
  },

  cuisine: {
    type: String,
    required: true,
  },

  servingSize: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    enum: ["veg", "non-veg", "egg", "jain", "gluten-free"],
  },

  price: {
    type: String,
    required: true,
  },

  availabilty: {
    type: String,
    required: true,
    enum: ["available", "unavailable", "removed"],
    default: "available",
  },

  image: {
    type: [
      {
        url: {
          type: String,
          required: true,
        },
        publicID: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },

 timeStamps : true,

});

const Menu = mongoose.model("Menu", menuSchema);
export default Menu;