Desrcribe: Pizza(topping1, topping2, topping3, size)
Test: "It should return a pizza object with 3 properties for toppings and 1 for size."
Code: const pizza = new pizza( ["cheese"],["meat"], ["veggies] "medium");
Expected Output {topping1 : ["cheese"],topping2 : ["meat"], topping3 : ["veggies"],  size: "medium" }


Describe: Pizza.prototype.pizzaToppingsPricer = function() 
Test: "It should add the corresponding topping total to the pizza price"
code: const pizza = new pizza ("mozzarella", "pepperoni" "mushrooms", "medium")
  total;
Expected Output {toppings : ["cheese", "pepperoni"] total = 8}

Describe : Pizza.prototype.pizzaSizePricer = function()
Test: "It should add the size price to the total price"
code: const pizza = new pizza ("mozzarella", "pepperoni" "mushrooms", "medium")
Expected Output: Pizza.size = 10
