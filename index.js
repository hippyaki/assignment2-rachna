const express = require("express");
const app = express();

class Fruit {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}
const fruits = [
  new Fruit("Banana", "Yellow"),
  new Fruit("Apple", "Red"),
  new Fruit("Orange", "Orange"),
  new Fruit("Grapes", "Green"),
  new Fruit("Plum", "Black"),
  new Fruit("Papaya", "Orange"),
  new Fruit("Pear", "Green"),
  new Fruit("Lemon", "Yellow"),
];

app.get("/fruits", (req, res) => {
  const sortedfruits = fruits.sort((f1, f2) => {
    if (f1.color < f2.color) {
      return -1;
    } else if (f1.color > f2.color) {
      return 1;
    } else {
      return 0;
    }
  });
  res.json({
    sortedfruits: sortedfruits,
  });
});


const server = app.listen(3001, () => {
  console.log("listening on port is %s...", server.address().port);
});
