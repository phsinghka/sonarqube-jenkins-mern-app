const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware
const userRoutes = require('./routes/userRoutes');
const app = express();

// Enable CORS for all origins
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('MongoDB connected'))
   .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

