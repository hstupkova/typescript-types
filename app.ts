/* const person: {
  name: string;
  age: number;
} = {
  name: 'Maximilian',
  age: 30,
};
 */

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) // ERROR
}
