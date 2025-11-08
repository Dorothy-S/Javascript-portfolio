const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.set('layout', 'layout');

app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
