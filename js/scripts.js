
//Business Logic For Pizza
function Pizza(topping1, topping2, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.size = size;
}

Pizza.prototype.allToppings = function() {
  return this.topping1 + " " + this.topping2;
};

//User Logic

$(document).ready(function() {
  $("form#pizzaParlor").submit(function(event) {
    const topping1Input = ("input#topping1").val();
    const topping2Input = ("input#topping2").val();
    const sizeInput = ("input#size").val();
  });
});

//Business Logic for Pizza Pricing



if (topping1 = 'Mozzarella') {
  total + 2
};

