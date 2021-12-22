// in JavaScript:
/* const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2; */

// in TypeScript:
enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log('is admin');
} else if (person.role === Role.READ_ONLY) {
  console.log('is read only');
} else if (person.role === Role.AUTHOR) {
  console.log('is author');
} else {
  console.log('error');
}

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) // ERROR
}
