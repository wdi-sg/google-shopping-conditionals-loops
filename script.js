console.log ("hi")

// for (var i = 0; i < len(product_list); i++) {
//     curr_product = product[i]
//     if ("eBay" in curr_product && "Canon" in curr_product) {
//         console.log(curr_product)
//     }
// }


// var kindShoppingProd = 0;
// for (var keys in products) {
//  //console.log(keys);
//   if (keys === "items") {
//     //console.log(products[keys]);
//     for (i = 0; i < products[keys].length; i++) {
//       var objInItems = products[keys][i];

//       for (var k in objInItems) {
//         if (k === "kind") {
//           console.log(objInItems[k]);

//           kindShoppingProd += 1
//         }
//       }
//     }
//   }
// }

// console.log(kindShoppingProd)

// var numberItems = 0;


// var prod = 0

// prod = products.items

// for (i = 0; i < prod.length; i++) {
//  if (prod.[i].kind === 'shopping#product') {
//   prod = total++;
//  }
// }
// console.log (prod.length)

console.log("hello");

var greeting = function(name, food) {
  var saying = "HELLO there, "+name+ " i hear you like "+food;
  console.log( saying );

  return saying;
}

greeting("min shan", "tacos");
greeting("htat win", "chicken rice");
greeting("chee kean", "mixed rice");



// greeting( 1 + 2, food );

var names = [
  "LJ",
  "Clara",
  "Akira"
];


var name = "susan chan";
var food = "ayam penyet";

var createdGreeting = greeting( name, food );

console.log( "output variable" );
console.log( createdGreeting );

var newString = createdGreeting + " why not have some ice cream!";

console.log( newString );




