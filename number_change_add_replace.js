var fruits = ['Apple', 'Banna', 'Orange']
//all element show
console.log(fruits);

//number of possition Banna
var positionIndex = fruits.indexOf('Banna');
console.log(positionIndex);

// Banna instead of replace Mango
fruits[1] = 'Mango';
console.log(fruits);
//remove orange
fruits.pop();
console.log(fruits);

// add watermelon
fruits.push('watermelon');
console.log(fruits);
