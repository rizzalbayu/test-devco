const express = require('express');
const UserRoute = require('./users/routes/user.routes.js');
require('dotenv').config();

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'tes success' });
});
app.get('/halo', (req, res) => {
  res.json({ message: 'halo ges' });
});
app.use(UserRoute);

app.listen(3030, () => console.log(`server running`));
