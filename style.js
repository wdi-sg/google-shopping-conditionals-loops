var iShoppingProduct = [];
var iBackorder = [];
var iImages = [];
var iCanon = [];
var iEbay = [];
var iCanonEbay = [];


for(var i = 0; product.items.length < i; i++) {
  var directory = product.items[i].product;
  var canonCheck = directory.title.split(" ");
  var ebayCheck = directory.author.name.split(" ");

  if(product.items[i].kind = "shopping#product") {
    iShoppingProduct.push(i);
    alert(i);
  }
  if(directory.inventories[0].availability = "backorder"){
    iBackorder.push(i);
  }
  if(directory.images[1] !== undefined) {
    iImages.push(i);
  }
  if(canonCheck[0] ==="Canon") {
    iCanon.push(i);
  }
  if(ebayCheck[0] === "ebay") {
    iEbay.push(i);
  }
}

for (var i = 0; i < canonCheck.length; i++) {
    for (var j = 0; j < iEbay.length; j++) {
        if (canonCheck[i] == iEbay[j]) {
          iCanonEbay.push(canonCheck[i]);
        }
    }
}
for(var i = 0; product.items.length < i; i++) {
  var directory = product.items[i].product;

}
var products = {
 "kind": "shopping#products",
 "etag": "\"kSuBj73OPkN9HtEsYnzpddO-iYI/Xtf9O47gfjxyM3i-AgbqXTkcxTM\"",
 "id": "tag:google.com,2010:shopping/products",
 "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?country=US&q=digital+camera&alt=json",
 "nextLink": "https://www.googleapis.com/shopping/search/v1/public/products?country=US&q=digital+camera&startIndex=26&alt=json",
 "totalItems": 5788536,
 "startIndex": 1,
 "itemsPerPage": 25,
 "currentItemCount": 25,
 "requestId": "0CPCXpoKU8bcCFeohRAodikIAAA",
 "items": [
  {
   "kind": "shopping#product",
   "id": "tag:google.com,2010:shopping/products/7774881/11180453840663864493",
   "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/7774881/gid/11180453840663864493",
   "product": {
    "googleId": "11180453840663864493",
    "author": {
     "name": "pictureline.com",
     "accountId": "7774881"
    },
    "creationTime": "2013-03-08T13:00:00.000Z",
    "modificationTime": "2013-06-19T12:00:00.000Z",
    "country": "US",
    "language": "en",
    "title": "Nikon D800 SLR Digital Camera Body",
    "description": "The Nikon D800 Digital SLR body is built for today's multimedia photographer including a groundbreaking 36.3MP FX-format CMOS sensor, Full HD 1080p video at 30/25/24p with stereo sound, class leading ISO range of 100-6400, expandable to 25600, 4 fps burst rate and Advanced Scene Recognition System with 91000-pixel RGB sensor.",
    "link": "http://www.pictureline.com/nikon-d800-digital-slr-body.html?utm_source=google&utm_medium=pla&utm_campaign=pla_feed",
    "brand": "Nikon",
    "condition": "new",
    "gtin": "00018208254804",
    "gtins": [
     "00018208254804"
    ],
    "mpns": [
     "25480"
    ],
    "inventories": [
     {
      "channel": "online",
      "availability": "inStock",
      "price": 2796.95,
      "originalPrice": 2996.95,
      "saleEndDate": "2013-06-29T00:00:00.000Z",
      "shipping": 0.0,
      "currency": "USD"
     }
    ],
    "images": [
     {
      "link": "http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikon_1_d800_main.jpg",
      "status": "available"
     },
     {
      "link": "http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikon_1_d800_top.jpg"
     },
     {
      "link": "http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikon_1_d800_bottom.jpg"
     },
     {
      "link": "http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikon_1_d800_back.jpg"
     },
     {
      "link": "http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikonlaptopbagopen_2.jpeg"
     },
     {
      "link": "http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikonlaptopbag_2.jpg"
     }//link array
    ]//images array
   }//product object
  },//array
