let userInput: unknown;
let userName: string;

userInput = 5; // valid
userInput = 'Max'; // valid

// userName = userInput; // invalid, unknown' is not assignable to 'string'
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code,
  };
}

generateError('An error occurred!', 500);
