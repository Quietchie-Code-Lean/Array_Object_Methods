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


console.log(`Finding an element index through findIndex()`)
/* Looking for index, and finding elements for index with findIndex() method: */

const apellidos = ["Aniston", "Cox", "Buffay", "Perry El ornitorrinco", "LeBlanc", "Schwimmer"];

const findPerry = apellidos.findIndex(apellido => apellido === "Perry El ornitorrinco"); /* with arrow function */
    console.log(findPerry);


/* 

With anonymous function:

const findPerry = apellidos.findIndex(function(apellidos){
        return apellido === "Perry El ornitorrinco"
        
        });

console.log(findPerry)
*/

/* Delete Leonardo Dicaprio by Index ¬¬ */

let actors = [
{ id: 431, nombre: "Jhonny Depp" },
{ id: 124, nombre: "Brad Pitt" },
{ id: 541, nombre: "Leonardo DiCaprio" },
{ id: 664, nombre: "Morgan Freeman" }
];

const indexDeleteActor = actors.findIndex(actor => actor.id === 541)

actors.splice(indexDeleteActor, 1);

console.log(actors)