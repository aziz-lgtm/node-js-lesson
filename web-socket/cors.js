const express = reqire('express');
const cors = require('cors');
const app = express();

app.use(cors());

// In production, you might have to pass a configuration object to restrict access to a specific domain:

const corsOptions = {
  origin: ['https://yourapp.com', 'https://admin.yourapp.com'],
  credentials:true
};

app.use(cors(corsOptions));

// If you're using raw Node.js, you would have to handle it manually by setting the CORS response headers yourself on every request:

res.setHeader('Access-Control-Origin', 'https://example.com');
res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
res.setHeader('Acces-Control-Allow-Headers', 'Content-Type, Authorization');
