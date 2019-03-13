console.log(products);

function part_1 () {
  var itemCount = 0;

  for (var i = 0; i < products["items"].length; i++) {
      var item = products["items"][i];

      if (item["kind"] === "shopping#product") {
        itemCount++;
      }
  }
  console.log("Count based on loop: " + itemCount);
  console.log("Count retrieved from search result: " + products["currentItemCount"]);
}

function part_2 () {
  for (var i = 0; i < products["items"].length; i++) {
      var item = products["items"][i];

      var itemTitle = item["product"]["title"];
      var itemAvailability = item["product"]["inventories"][0]["availability"];

      if (itemAvailability === "backorder") {
        console.log("Title with back order: " + itemTitle);
      }
  }
}

function part_3 () {
  for (var i = 0; i < products["items"].length; i++) {
      var item = products["items"][i];

      var itemTitle = item["product"]["title"];
      var itemImageLink = item["product"]["images"];

      if (itemImageLink.length > 1) {
        console.log("Title with more than 1 image link: " + itemTitle);
      }
  }
}

function part_4 () {
  for (var i = 0; i < products["items"].length; i++) {
      var item = products["items"][i];

      var itemTitle = item["product"]["title"];
      var itemBrand = item["product"]["brand"];

      if (itemBrand.toLowerCase() === "canon".toLowerCase()) {
        console.log("Title with Canon brand: " + itemTitle);
      }
  }
}

function part_5 () {
  for (var i = 0; i < products["items"].length; i++) {
      var item = products["items"][i];

      var itemTitle = item["product"]["title"];
      var itemBrand = item["product"]["brand"];
      var itemAuthorName = item["product"]["author"]["name"];

      if ( (itemBrand.toLowerCase() === "canon") && (itemAuthorName.toLowerCase().includes("ebay")) ) {
        console.log("Title Author Name: " + itemAuthorName);
        console.log("Title with Canon brand from eBay: " + itemTitle);
      }
  }
}

function part_6 () {
  for (var i = 0; i < products["items"].length; i++) {
      var item = products["items"][i];

      var itemBrand = item["product"]["brand"];
      var itemPrice = item["product"]["inventories"][0]["price"];
      var itemImageLink = item["product"]["images"][0]["link"];

      console.log("Item brand: " + itemBrand);
      console.log("Item price: " + itemPrice);
      console.log("Item image link: " + itemImageLink);

  }
}

function part_7 () {
  var userBrandInput = prompt("Input the  brand you wish to search", "Nikon, Sony, Canon, Panasonic, Pentax, Samsung, Fuji, Lytro, Olympus");
  var userConditionInput = prompt("Input type of condition you like", "New or Used");

  for (var i = 0; i < products["items"].length; i++) {
      var item = products["items"][i];

      var itemCondition = item["product"]["condition"];
      var itemTitle = item["product"]["title"];
      var itemBrand = item["product"]["brand"];

      if ( (itemBrand.toLowerCase() === userBrandInput.toLowerCase()) && (userConditionInput.toLowerCase() === itemCondition.toLowerCase()) ) {
        console.log("Title with " + userBrandInput + " brand with " + userConditionInput + "condition: " + itemTitle);
      }
  }
}

function part_8_9 () {
  var found = false;
  var userSearchTypeInput = prompt("What kind of search do you need?", "Brand or Condition");

  if (userSearchTypeInput.toLowerCase() === "brand") {
      var userBrandInput = prompt("Input the  brand you wish to search", "Nikon, Sony, Canon, Panasonic, Pentax, Samsung, Fuji, Lytro, Olympus");

      for (var i = 0; i < products["items"].length; i++) {
          var item = products["items"][i];

          var itemTitle = item["product"]["title"];
          var itemBrand = item["product"]["brand"];

          if (itemBrand.toLowerCase() === userBrandInput.toLowerCase()) {
            console.log("Title with " + userBrandInput + " brand: " + itemTitle);
            found = true;
          }
      }

      if (found === false){
        alert("No items found :(");
      }

  } else if (userSearchTypeInput.toLowerCase() === "condition") {
      var userConditionInput = prompt("Input type of condition you like", "New or Used");

      for (var i = 0; i < products["items"].length; i++) {
          var item = products["items"][i];

          var itemCondition = item["product"]["condition"];
          var itemTitle = item["product"]["title"];

          if (userConditionInput.toLowerCase() === itemCondition.toLowerCase()) {
            console.log("Title with with " + userConditionInput + "condition: " + itemTitle);
            found = true;
          }
      }

      if (found === false){
        alert("No items found :(");
      }
  } else {
    alert("Invalid input :(");
  }
}

part_8_9();
