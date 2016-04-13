// jQuery
$(document).ready(function(){
  //$('form#new-doughnut').on('submit', sendOurDataViaAJAX)
  getProducts();
});

//function sendOurDataViaAJAX(e){
//  //stay on page
//  e.preventDefault();
//
//   //our API uses JSON, so we need to make a javascript object! There are a lot of ways to do this, this just a basic example.
//  var doughnut = {
//    style: $('form#new-doughnut select#doughnut-style').val(),
//    flavor: $('form#new-doughnut input#doughnut-flavor').val()
//  };
//
//  // create a new AJAX request
//  $.post('https://api.doughnuts.ga/doughnuts', doughnut)
//    .done(function(data){
//      //do this after successful post
//      addDoughnut(data);
//    });
//
//  // clear our input box!
//  $('form#new-doughnut input#doughnut-flavor').val(null)
//}
//token in header
function getProducts(){
  var products = $.get('http://localhost:4000/api/products')
    .done(function(data){
      $.each(data, function(index, product){
        addProduct(product);
      });
    });
}

function addProduct(product) {
    var sku = $("<td>").html(product.sku);
    var name = $("<td>").html(product.name);
    var productType = $("<td>").html(product.productType);
    var brand = $("<td>").html(product.brand);
    var quantity = $("<td>").html(product.quantity);
    var sellingPrice = $("<td>").html(product.sellingPrice);
    var active = $("<td>").html(product.active);
    var orderQty = $("<td><input type='number' name='quantity' min='1' max='10'></td>");
    var orderBtn = $("<td><button type='submit' class='btn btn-danger col-md-12'>Buy</button></td>")
    var form = $()
    var row = $("<tr></tr>").append(sku).append(name).append(productType)
        .append(brand).append(quantity).append(sellingPrice).append(active).append(orderQty).append(orderBtn);
  $("table#products").append(row)


}