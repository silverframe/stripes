// Creating a new row in the table
$( "#addNewAdjustmentItem" ).click(function() {
  $('#newAdjustmentTable').append('<tr><td><input type="text" name="productId""/></td><td><input type="text" name="qtyChange"/></td></tr>')
});
