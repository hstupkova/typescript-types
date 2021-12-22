/* const person: {
  name: string;
  age: number;
} = {
  name: 'Maximilian',
  age: 30,
};
 */

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'], // we want this to be an array of exactly 2 elements, first being a number and second a string => change it to tuple
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) // ERROR
}
