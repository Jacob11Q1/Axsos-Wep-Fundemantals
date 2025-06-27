function pizzeriaOven(crust, sauce, toppings , cheese) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.toppings = toppings;
    pizza.chesse = cheese;
    return pizza;
}
// Pizza 1
var pizza1 = pizzeriaOven(
    'deepdish',
    'traditional',
    ['Mozzarella'],
    ['pepperoni', 'sausage'],);
console.log(pizza1);

// Pizza 2
var pizza2 = pizzeriaOven(
    'hand tossed',
    'marinara',
    ['Mozzarella' , 'feta'],
    ['mushrooms' , 'onions' , 'olives'],);
console.log(pizza2);

// Pizza 3 Any Toppings we like
var pizza3 = pizzeriaOven(
    'hand tossed',
    'marinara',
    ['Mozzarella' , 'Cheddar Cheese'],
    ['Mushrooms' , 'Sasauge' , 'Turkey Ham'],);
console.log(pizza3);

