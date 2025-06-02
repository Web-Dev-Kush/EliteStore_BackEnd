const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Import route
const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

const productRoutes = require("./routes/product");
app.use("/api/products", productRoutes);

const addUserRoutes = require("./routes/user");
app.use("/api/user", addUserRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
