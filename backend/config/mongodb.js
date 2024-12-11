import mongoose from "mongoose";

// Connect to the database
const connectDB = async () => {
  mongoose.connection.on('connected', () => console.log("Database connected successfully"));
  await mongoose.connect(`${process.env.MONGODB_URI}/zetathon`);
};

// Define the User schema
const userSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Export the functions and models
export { connectDB, User };
