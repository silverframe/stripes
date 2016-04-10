var path  = require('path');


// GET /
function home(req, res) {  
  res.render('index.ejs');
}

//===========To serve static pages relating to Products======================



//===========To serve static pages relating to Sales =======================



//===========To serve static pages relating to Stocks ==========================
function test(req, res) {
  res.sendFile(path.join(__dirname + '/../views/sales/index.html'));
}




module.exports = {
  home: home,
  test: test
}