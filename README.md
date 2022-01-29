Desrcribe: Pizza
Test: "It should return a pizza object with two properties for toppings and size."
Code: const pizza = new pizza( ["cheese"], "medium");
Expected Output {toppings : ["cheese"], size: "medium" }

<!-- test: "It should return a pizza with two properties, and multiple toppings as a string"
code:  const pizza = new pizza (["cheese", "pepperoni"], "medium")
Expected Output {toppings : ["cheese", "pepperoni"], size: "medium" } -->

Describe: Pricing for toppings and size
Test: "It should add the corresponding topping total to the pizza"
code: const pizza = new pizza ("mozzarella", "pepperoni", "medium")
  total;
Expected Output {toppings : ["cheese", "pepperoni"], size: "medium" total = 14}

Describe : Adding sum of price
Test: "It should add together all the prices to a sum"
code: Pizza.prototype.pizzaPrice = function() {
  return topping1.total  + topping2.total + size.total;
};
Expected Output {total: ---}

Test: "Create values for each topping inside of topping1 using set"
