
function value_of_each_stock(array)
{
  for(i=0; i<array.length; i++)
  {
    document.write("Share Name:"+array[i][0]+"<br>");
    document.write("No of Shares:"+array[i][1]+"<br>");
    document.write("Share Price:"+array[i][2]+"<br>");
    var stock_value=array[i][1]*array[i][2];
    document.write("----------------------------------<br>")
    document.write("Stock value   :"+stock_value+"<br>");
    document.write("----------------------------------")
    document.write("<br>");
  }
}
function total_stock_value(array)
{
  var total=0;
  for(i=0; i<array.length; i++)
  {
    var total=total+array[i][1]*array[i][2];
  }
  document.write("Total Stock Value of "+array.length+" persons are :"+total);
}

function create_stock()
{
var number_of_stocks=document.getElementById("stock_no").value;
var stock=[];
for(i=0; i<number_of_stocks; i++)
{
  stock[i]=new Array(3);
}
for(i=0; i<number_of_stocks; i++)
{
var share_name=prompt("enter the share name","");
var share_count=prompt("enter the no of shares","");
var share_price=prompt("enter the price of share","");
stock[i]=[share_name,share_count,share_price];
}
document.write( "<div align=center>STOCK ANALYSIS</div>");

value_of_each_stock(stock);
total_stock_value(stock);
}
