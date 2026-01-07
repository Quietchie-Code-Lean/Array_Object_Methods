/* Find the `Gladiators` movie index and delete from the object array. */


const movies = [
  { id: 1, name: "Thor" },
  { id: 2, name: "Ant-Man" },
  { id: 3, name: "Terminator" },
  { id: 4, name: "Ip Man" },
  { id: 5, name: "Rocky" },
  { id: 6, name: "Inception" },
  { id: 7, name: "The Matrix" },
  { id: 8, name: "Gladiator" },
  { id: 9, name: "Interstellar" },
  { id: 10, name: "Joker" },
  { id: 11, name: "The Dark Knight" },
  { id: 12, name: "Avatar" },
  { id: 13, name: "Titanic" },
  { id: 14, name: "Mad Max: Fury Road" },
  { id: 15, name: "John Wick" }
];

const deleteGladiator = movies.findIndex(movie => movie.name === `Gladiator`);

if (deleteGladiator !== -1) {
  movies.splice(deleteGladiator, 1);
} else {
  console.log("Movie not found");
};

console.log(movies);

