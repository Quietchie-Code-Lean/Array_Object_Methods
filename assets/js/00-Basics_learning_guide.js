/* Adding elements with methods */

/* 
.push()
.unshift()
.splice() 
*/

console.log(`Adding elements with methods`);
let OnePiece = [`Zoro`, `Nami`, `Usopp`, `Chopper`, `Robin`, `Franky`];

/* Add at last, add at first, add at the meddle */
OnePiece.push(`Brook`);
OnePiece.push(`Jimbei`);
OnePiece.unshift(`Luffy`);
OnePiece.splice(4, 0, `Sanji`);

console.log(OnePiece);


/* Add, remove and replace elements with methods */

/* 
.pop()
.shift()
.splice()
*/

console.log(`Add and remove elements`);

const usuarios = ["Erick", "Cristian", "Max", "Claudia"];

/* add multiple elements at last, add multiple at first delete element at the middle, delete `Cristian` at the middle */
usuarios.push("Thomas", "Eckhart", "Gabriel");
usuarios.unshift("João");
usuarios.unshift("Bruno");

console.log(usuarios);
/* delete cristian */
usuarios.splice(3, 1);

/* delete at the end, delete at first */
usuarios.pop();
usuarios.shift();

console.log(usuarios);


console.log(`check elements and apply to conditions with .include() method`);
/* conditions and .includes() */

console.log(usuarios.includes(`Cristian`));


if(usuarios.includes(`Cristian`) === false){
    usuarios.unshift(`Cristian`);
} console.log(usuarios);

if(usuarios.includes(`Cristian`) === true){
    console.log(`Hello Cristian`);
};