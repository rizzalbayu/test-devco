const express = require('express');
const UserRoute = require('./users/routes/user.routes.js');
require('dotenv').config();

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'halo ges' });
});
app.use(UserRoute);

app.listen(process.env.SERVER_PORT, () => console.log('server running'));
