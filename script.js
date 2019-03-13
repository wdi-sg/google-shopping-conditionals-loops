var count = 0;
for (var i = 0; i < products["items"].length; i++) {
  console.log(products["items"][i].kind);
  if (products["items"][i].kind === "shopping#product") {
    count++;
  }
}
console.log(count + " items with shopping#product tag in 'kind'");
