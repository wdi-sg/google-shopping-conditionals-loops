//First 30 line are for basic requirement. Further requirement start from line 32
//Changed products.js to better reflect ebay please include products.js

var countOfKind = 0
var countOfBackorder = 0

for (var i = 0 ; i < products.items.length; i++){
  console.log(i)
  if (products.items[i].kind === "shopping#product"){
  countOfKind += 1;
  }
  if (products.items[i].product.inventories[0].availability === "backorder"){
    countOfBackorder +=1
    console.log("Inventory in backorder " + products.items[i].product.title);
    console.log("***********************************************************");
  }
  if (products.items[i].product.images.length > 1){
    console.log("More than 1 image file " + products.items[i].product.title);
  }
  if (products.items[i].product.brand.toLowerCase() === "canon"){
    console.log("All Canon items " + products.items[i].product.title);
    console.log("***********************************************************");
  }
  if (products.items[i].product.author.name.toLowerCase() == "ebay" && products.items[i].product.brand.toLowerCase() === "canon"){ // changes to product.js please include updated file
    console.log("eBay listed Canon products " + products.items[i].product.title);
    console.log("***********************************************************");
  }
  console.log(products.items[i].product.title);
  console.log(products.items[i].product.inventories[0].currency + " " + products.items[i].product.inventories[0].price);
  console.log(products.items[i].product.images[0]);
  console.log("***********************************************************")
}
//Star of further requirement
var questionPlease = function () { //start of phone brand selection
  var brand = "nikon, sony, canon, lytro, panasonic, samsung, fuji, olympus, pantax"
  var brandCamera = prompt("Please select brand (Nikon, Sony, Canon, Lytro, Panasonic, Samsung, Fuji, Olympus, Pantax").toLowerCase();
  if (brandCamera === "all" || brandCamera === ""){
    brandCamera === "all"
  }
  else if (brandCamera === "q" || brandCamera === "quit"){
    alert("Goodbye");
  }
  else if (brandCamera != "nikon" && brandCamera != "sony" && brandCamera != "canon" && brandCamera != "lytro" && brandCamera != "panasonic" && brandCamera != "samsung" && brandCamera != "fuji" && brandCamera != "olympus"){
    alert("Brand not within list please try again");
    questionPlease();
  }
  else if (brandCamera === "pantax"){
    alert("Pantax is not on offer selection. Please try again") //no offer for pantax
    questionPlease();
  }
  var condition = prompt("Please select condition (New / Used)").toLowerCase(); //start of condition selection
  if (condition == "" || condition == "all"){
      condition = "all"
    informationReturn(brandCamera, condition);
  }
  else if (condition === "new" || condition === "used"){
    informationReturn(brandCamera, condition);
  }
  else if (condition === "q" || condition === "quit"){
    alert("Goodbye");
  }
}
var informationReturn = function (brandCamera, condition){
  for (var i = 0 ; i < products.items.length; i++){
    if (brandCamera === "all" && condition === "all"){
      console.log(products.items[i].product.title);
      console.log(products.items[i].product.inventories[0].currency + " " + products.items[i].product.inventories[0].price);
      console.log(products.items[i].product.images[0]);
      console.log("Brand: All / Condition: All")
      console.log("***********************************************************")
    }
    else if (brandCamera === "all" && condition != "all"){ // ALL OTHER CONDITION
      if (products.items[i].product.condition.toLowerCase() === "new"){
        console.log(products.items[i].product.title);
        console.log(products.items[i].product.inventories[0].currency + " " + products.items[i].product.inventories[0].price);
        console.log(products.items[i].product.images[0]);
        console.log("Brand: All / Condition: " + condition)
        if (condition === "used"){console.log("No used camera on offer, returning new cameras instead")}
        console.log("***********************************************************")
      }
    }
    else if (brandCamera != "all" && condition === "all"){ // ALL OTHER BRAND
      if (products.items[i].product.brand.toLowerCase() === brandCamera){
        console.log(products.items[i].product.title);
        console.log(products.items[i].product.inventories[0].currency + " " + products.items[i].product.inventories[0].price);
        console.log(products.items[i].product.images[0]);
        console.log("Brand: " +brandCamera.toUpperCase()+" Condition: All");
        console.log("***********************************************************")
      }
    }
    else if (brandCamera != "all" && condition != "all"){
      if ((products.items[i].product.brand.toLowerCase() === brandCamera) && (products.items[i].product.condition.toLowerCase() === condition)){
        console.log(products.items[i].product.title);
        console.log(products.items[i].product.inventories[0].currency + " " + products.items[i].product.inventories[0].price);
        console.log(products.items[i].product.images[0]);
        console.log("Brand: "+brandCamera.toUpperCase()+" Condition: "+condition.toUpperCase());
        console.log("***********************************************************")
      }
    }
  }
}
  questionPlease();
