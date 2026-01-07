const seasons = [ `summer`, `auntum`, `winter`, `spring`];

/*  
seasons.forEach( `arrow function or anonimous function` )
*/


console.log(`----------With forEach( Arrow function ) ---------`);

seasons.forEach(season => console.log(season)); /* arrow Function */


console.log(`----------With forEach( Anonimous function ) ---------`);
seasons.forEach(function(season){
    console.log(season);                        /* Anonimous function */
});



/* Transform Arrays with .map() */
console.log(`Transform Arrays with map methods `);
const values = [200, 100, 500, 300, 250]


const new_values = values.map(i => 2* i)
console.log(new_values);

/* 
the .map() method doesn't modify the original array, it create a new ones based on the original
Basically it applyes an specific function to each element and create a new array with the outcome of the iterated element.
*/



/* filter elements from an array with filter method */

console.log(`filter elements from an array with methods`);

const values2 = [200, 100, 500, 300, 250, 750, 1900, 15, 155, 322, 15420, 175, 299]

const filtered_values = values2.filter(i => i >= 320)

console.log(filtered_values);


/* filter approved students  */

const students = [
{ name: "Juan", nota: 3.4 },
{ name: "Laura", nota: 6 },
{ name: "Katherine", nota: 4.3 },
{ name: "Jonathan", nota: 5.4 }
];


const approved_students = students.filter(student => student.nota >= 4.5)

console.table(approved_students);  /* first time I use console.table() nice! */


console.log(`--------------- Activity four--------------`);

/* You work for a hotel management system and you have a list of employees with different roles and working shifts. */

const employees = [
  { name: "Anna", role: "Waiter", shift: "morning" },
  { name: "Mark", role: "Chef", shift: "morning" },
  { name: "Sophie", role: "Waiter", shift: "night" },
  { name: "John", role: "Receptionist", shift: "morning" },
  { name: "Lucas", role: "Waiter", shift: "morning" },
  { name: "Emma", role: "Cleaner", shift: "night" },
  { name: "Oliver", role: "Waiter", shift: "night" },
  { name: "Mia", role: "Manager", shift: "morning" },
  { name: "Noah", role: "Waiter", shift: "morning" }
];

/* 1- Filter employees

Using the filter() method, create a new array called waiters that contains only employees whose role is "Waiter". */
console.log(`Filter waiters and store within waiters array`)
const waiters = employees.filter(employee => employee.role === `Waiter`)

console.log(waiters);

/* 2- Filter by multiple conditions

From the waiters array, create another array called morningWaiters that includes only waiters working the "morning" shift. */

console.log(`filtered waiters working the "morning" shift`);
const morningWaiters = waiters.filter(waiter => waiter.role === `Waiter` && waiter.shift === `morning`);
console.log(morningWaiters)


/* 3- Count results

Use the .length property to log to the console: */

console.log(`Number of morning waiters: ${morningWaiters.length}`);

/* 4- Transform data

Using the map() method, create a new array called waiterNames that contains only the names of the morning waiters. */

console.log(`Morning Waiters Names:`) 
const waiterNames = morningWaiters.map(waiter => console.log(waiter.name));

/* 5- Bonus (optional – extra challenge)
Create a single chained expression (without intermediate variables) that:
Filters waiters
Filters morning shift
Maps only names
Logs the result */

console.log(employees
    .filter(employee => employee.role == `Waiter`)
    .filter(employee => employee.shift == `morning`)
    .map(employee => employee.name)
);



/* Here is the same code without chaining */

const step1 = employees.filter(employee => employee.role === "Waiter");
const step2 = step1.filter(employee => employee.shift === "morning");
const step3 = step2.map(employee => employee.name);

console.log(step3);

/* Chaining is just this written inline. without store the outcome within a intermediate variable*/



/* Concatenate Array's in a new Array. */
console.log(`Concatenate Arrays within a new array`);
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = arr1.concat(arr2)

console.log(arr3);

/* We can also join and concatenate array of literal objects */

const autosCompactos = [
{marca: 'Toyota', modelo: 'Corolla', combustible: 'Gasolina'},
{marca: 'Mazda', modelo: '3', combustible: 'Gasolina'},
{marca: 'Honda', modelo: 'Civic', combustible: 'Gasolina'},
{marca: 'Bmw', modelo: '116d', combustible: 'Diesel'},
];
const autosDeportivos = [
{marca: 'Opel', modelo: 'Astra OPC', combustible: 'Gasolina'},
{marca: 'Renault', modelo: 'Megane RS', combustible: 'Gasolina'},
{marca: 'Mitsubishi', modelo: 'Lancer Evo', combustible: 'Gasolina'},
];
const autos = autosCompactos.concat(autosDeportivos);
console.log(autos);

/* Sort elements within arrays, and arrays objects: it's normal to sort elements inside arrays with the .sort() method as we'll */
console.log(`Array sorted through .sort() method`);

const arr_1 = [4,1,2,3];
const ordenado = arr_1.sort();
console.log(ordenado);

console.log(`Sorting array with conditions and testing parameters`);

const arr_01 = [4,1,2,3];
const ordenado2 = arr_01.sort((x,y) => y - x);
console.log(ordenado2);