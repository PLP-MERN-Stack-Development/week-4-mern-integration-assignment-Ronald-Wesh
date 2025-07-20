const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Set mongoose options (these are now default in Mongoose 6+, but keeping for compatibility)
    const options = {
      // useNewUrlParser and useUnifiedTopology are deprecated in Mongoose 6+
      // but keeping them won't hurt
    };

    const conn = await mongoose.connect(process.env.MONGODB_URI, options);

    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    console.log(`📁 Database name: ${conn.connection.name}`);

    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('⚠️  MongoDB disconnected');
    });

    // Graceful shutdown
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('🔒 MongoDB connection closed through app termination');
      process.exit(0);
    });

  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;