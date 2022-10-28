import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
   name: {type: String, required: true},
   slug: {type: String, required: true, unique: true},
   category: {type: Array, required: true},
   image: {type: String, required: true},
   sale: {type: String, required: false},
   discount: {type: Number, requied: false, default: 0},
   stores: {type: Array, requied: true},
   cost: {type: String, requied: false},
   description: {type: String, requied: true}
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
