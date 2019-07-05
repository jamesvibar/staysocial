const mongoose = require("mongoose");

/**
 * Connect to Mongo Database
 *
 * @param {String} mongoUri MongoDB connection string
 * @param {Object} options MongoDB options
 * @returns {Promise} bool
 */
const connectDb = (mongoUri, options = {}) =>
  new Promise((resolve, reject) => {
    mongoose.connect(mongoUri, options);
    const db = mongoose.connection;

    db.on("connected", () => {
      console.log(`Connected to MongoDB Database`);
      resolve(true);
    });
    db.on("error", err => {
      console.error("Failed to connect to MongoDB Database", err);
      reject(false);
    });
  });

module.exports = connectDb;
