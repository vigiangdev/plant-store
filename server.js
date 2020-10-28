const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = require("./app");

const database = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
).replace("<dbname>", process.env.DATABASE_NAME);

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to database.");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log("Unhandled Rejection at:", err.stack || err);
  server.close(() => {
    console.log("Server closing");
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.info("SIGTERM signal received.");
  console.log("Closing http server.");
  server.close(() => {
    console.log("Http server closed.");
    mongoose.connection.close(false, () => {
      console.log("MongoDB connection closed.");
    });
  });
});
