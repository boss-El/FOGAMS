import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to database successfully');
  })
  .catch((error) => {   
    console.log('Error:', error);
  });
  const app = express();
  app.use(express.json());
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);


//this is the error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ success: false, statusCode, message });
}
);