var path  = require('path');


// GET /
function home(req, res) {  
  res.render('index.ejs');
}

module.exports = {
  home: home,
  test: test
}