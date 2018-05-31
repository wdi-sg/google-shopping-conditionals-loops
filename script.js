var count = 0;
for (var i = 0; i <= products.items.length; i++)
{
  var shopItems = products.items;
  console.log(shopItems[i].kind);
  count++;
console.log(count);

}


/*products.items.forEach(function(inventories){
  console.log(inventories);
});*/
