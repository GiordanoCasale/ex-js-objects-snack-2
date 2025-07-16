//Snack 1

//const hamburger = { name: "Cheese Burger", weight: 250 };
//const secondBurger = hamburger;
//secondBurger.name = 'Double Cheese Burger';
//secondBurger.weight = 500;

//console.log(hamburger.name); // Double Cheese Burger
//console.log(secondBurger.name); // Double Cheese Burger

//è stato creato un solo oggetto in memoria

//Snack 2
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // "Salad"
console.log(secondBurger.ingredients[0]); // "Salad"

//sono stati creati 3 oggetti in memoria

//Snack 3

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

//gli oggetti che vengono creati sono 9

//Snack 4

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`); //il miglior modo per copiare chef è usando una shallow copy perché è in grado di copiare le funzioni
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11), // il miglior modo di copiare restaurant è usando lo structuredclone che copia completamente l'oggetto ed anche tutti gli oggetti annidati
    isOpen: false,
};