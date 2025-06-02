const Product = require("../modals/Product");

// ➜ POST /api/products
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ➜ GET /api/products
exports.getAllProducts = async (_req, res) => {
  const products = await Product.find();
  res.json(products);
};

// ➜ GET /api/products/:id
exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  product ? res.json(product) : res.status(404).json({ error: "Not found" });
};

// ➜ PUT /api/products/:id
exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    updated ? res.json(updated) : res.status(404).json({ error: "Not found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ➜ DELETE /api/products/:id
exports.deleteProduct = async (req, res) => {
  const deleted = await Product.findByIdAndDelete(req.params.id);
  deleted
    ? res.json({ message: "Product deleted" })
    : res.status(404).json({ error: "Not found" });
};
