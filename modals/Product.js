const mongoose = require("mongoose");

const FeatureSchema = new mongoose.Schema({
  title: String,
  value: String,
});

const SpecificationSchema = new mongoose.Schema({
  key: String,
  value: String,
});

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, lowercase: true },
    price: { type: Number, required: true },
    brand: { type: String },
    category: { type: String, index: true },
    description: { type: String },
    images: [{ url: String, alt: String }],
    stock: { type: Number, default: 0 },
    features: [FeatureSchema], // e.g. [{ title:'Battery', value:'500 mAh' }]
    specifications: [SpecificationSchema], // e.g. [{ key:'Weight', value:'180 g' }]
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
