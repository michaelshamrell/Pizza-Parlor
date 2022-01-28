
//Business Logic For Pizza
function Pizza(topping1, topping2, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.size = size;
}

Pizza.prototype.allToppings = function() {
  return this.topping1 + " " + this.topping2;
};

//Business Logic for Pizza Pricing



//Topping1 pricing
if (topping1 = 'mozzarella') {
  total + 2
} else if (topping1 = 'chedder') {
  total + 1
} else  {
  total + 3
}

//Topping2 pricing
if (topping2 = 'sausage') {
  total + 4
} else if (topping2 = 'pepperoni') {
  total + 2
} else  {
  total + 0
}

//Size Pricing
if (size = 'medium') {
  total + 10
} else if (size = 'large') {
  total + 15
} else {
  total + 7
}

//Adding topping price together


//User Logic

$(document).ready(function() {
  $("form#pizzaParlor").click(function(event) {
    const topping1Input = ("input#topping1").val();
    const topping2Input = ("input#topping2").val();
    const sizeInput = ("input#size").val();
    event.preventDefault();
    console.log(Pizza.total);
  });
});