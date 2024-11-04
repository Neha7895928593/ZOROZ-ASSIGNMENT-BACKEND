const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

const productRoutes = require('./routes/productRoutes');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
