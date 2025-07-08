const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://bookish-us45.onrender.com'],
    credentials: true
}));

// Routes
const uploadRoutes = require('./src/routes/upload.route.js'); 
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use('/api', uploadRoutes); 
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);


// DB Connection and Server Start
async function main() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB connected successfully!");

    app.use("/", (req, res) => {
      res.send("Book Store Server is running!");
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
}


main();
