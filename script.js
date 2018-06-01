function deliverablesOne(json) {
  var counter = 0;
  var myArray = json["items"];

  for (i = 0; i < myArray.length; i++) {
    if (myArray[i]["kind"] && myArray[i]["kind"] == "shopping#product") {
      counter += 1;
    };
  };

  console.log("Deliverables 1 - Counter value: " + counter);
};

function deliverablesTwo(json) {
  var myArray = json["items"];

  for (i = 0; i < myArray.length; i++) {
    if (myArray[i]["product"]["inventories"] && myArray[i]["product"]["inventories"][0]["availability"] == "backorder") {
      console.log("Deliverables 2 - Item Title: " + myArray[i]["product"]["title"]);
    };
  };
};

function deliverablesThree(json) {
  var myArray = json["items"];

  for (i = 0; i < myArray.length; i++) {
    if (myArray[i]["product"]["images"].length > 1) {
      console.log("Deliverables 3 - Item Title: " + myArray[i]["product"]["title"]);
    };
  };
};

function deliverablesFour(json) {
  var myArray = json["items"];

  for (i = 0; i < myArray.length; i++) {
    if (myArray[i]["product"]["brand"] == "Canon") {
      console.log("Deliverables 4 - Item Title: " + myArray[i]["product"]["title"]);
    };
  };
};

function deliverablesFive(json) {
  var myArray = json["items"];

  for (i = 0; i < myArray.length; i++) {
    if (myArray[i]["product"]["author"]["name"] == "eBay" && myArray[i]["product"]["brand"] == "Canon") {
      console.log("Deliverables 5 - Item Title: " + myArray[i]["product"]["title"]);
    };
  };
};

function deliverablesSix(json) {
  var myArray = json["items"];

  for (i = 0; i < myArray.length; i++) {
    var brand = myArray[i]["product"]["brand"];
    var price = myArray[i]["product"]["inventories"][0]["price"];
    var imageLink = myArray[i]["product"]["images"][0]["link"];

    console.log("Deliverables 6 - Brand: " + brand + ", Price: " + price + ", Image Link: " + imageLink);
  };
};

function fullDeliverablesFunction(json, deliverableCase) {
  switch (deliverableCase) {
    case 1:
      deliverablesOne(json);
      break;
    case 2:
      deliverablesTwo(json);
      break;
    case 3:
      deliverablesThree(json);
      break;
    case 4:
      deliverablesFour(json);
      break;
    case 5:
      deliverablesFive(json);
      break;
    case 6:
      deliverablesSix(json);
      break;
  };
};

// deliverablesOne(products);
// deliverablesTwo(products);
// deliverablesThree(products);
// deliverablesFour(products);
// deliverablesFive(products);
// deliverablesSix(products);
for (j=1; j < 7; j++) {
  fullDeliverablesFunction(products, j);
};
