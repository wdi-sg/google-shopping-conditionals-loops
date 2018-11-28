//Qn1
/*
var sum = 0;

for(var i = 0; i < products.items.length;i++)
{
  if(products.items[0].kind === "shopping#product")
    sum++;
  ;
}
console.log(sum);
*/
//part 2

var  a = products.items;
var count = 0;
/*
for(var j = 0; j < a.length; j++)
{
  var avail = products.items[j].product.inventories[0].availability;

  if(avail === "backorder")
  {
    count ++;
  }
}
console.log(count);
*/
// part 3
/*
for(var i = 0; i < a.length; i++)
{
  var name = products.items[i].product.title;
  var img = products.items[i].product.images;

  if(img.length > 1)
  {
    console.log(name);
  }
}
*/
//Print all "Canon" products in the items (careful with case sensitivity).

//part 4
/*
for(var i = 0; i < a.length; i++)
{
  var name = products.items[i].product.title;
  var brand = products.items[i].product.brand;

  if(brand === "Canon")
  {
    console.log(name);
  }
}
*/
//Part 5
//Print all items that have an author name of "eBay" and are brand "Canon".

/*
for(var i = 0; i < a.length; i++)
{
  var name = products.items[i].product.author.name;
  var item = products.items[i].product.title;

  var brand = products.items[i].product.brand;


  if(brand === "Canon" && name === "eBay")
  {
    console.log(item);
  }
}

*/
// Print all the products with their brand, price, and an image link
//Part 6
/*
for(var i = 0; i < a.length; i++)
{

  var price = products.items[i].product.inventories[0].price;
  var brand = products.items[i].product.brand;
  var img = products.items[i].product.images[0].link;

  console.log(price+ "/n " + "/n" + brand + "/n" + img);

}
*/
// Further part 1

/*
var userInputBrand = prompt("What is your brand?");
var userCondition = prompt("New or Used?").toLowerCase();
for(var i = 0; i < a.length; i++)
{
  var condition = products.items[i].product.condition;
  var brand = products.items[i].product.brand;
  var item = products.items[i].product.title;
  if(brand === userInputBrand && userCondition === condition )
  {
    console.log(item);
  }
}
*/

var searchType = prompt("Search by condition or by brand").toLowerCase();

if(searchType === "condition")
{
  var userCondition = prompt("New or Used?").toLowerCase();
  for(var i = 0; i < a.length; i++)
  {
    var item = products.items[i].product.title;
     var condition = products.items[i].product.condition;
     if(userCondition === condition)
     {
        console.log(item);
     }
   }

}else if(searchType === "brand")
{
  var userBrandName = prompt("Enter brand name: ");
  for(var i = 0; i < a.length; i++)
  {
    var item = products.items[i].product.title;
    var brand = products.items[i].product.brand;
    if(userBrandName === brand)
    {
      console.log(item);
    }
    else if(userBrandName !== brand) // Not working
    {
      console.log("Sorry, nothing found!")
    }
  }

}else
{
  console.log("Invalid entry");
}
