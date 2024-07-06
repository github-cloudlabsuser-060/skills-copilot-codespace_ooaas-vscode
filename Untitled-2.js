// JavaScript Calculator with Two Parameters from Console Input

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => readline.question(query, resolve));
}

async function main() {
  const operation = await askQuestion('Choose an operation (add, subtract, multiply, divide): ');
  const a = parseFloat(await askQuestion('Enter the first number: '));
  const b = parseFloat(await askQuestion('Enter the second number: '));

  switch (operation.toLowerCase()) {
    case 'add':
      console.log(`${a} + ${b} = ${a + b}`);
      break;
    case 'subtract':
      console.log(`${a} - ${b} = ${a - b}`);
      break;
    case 'multiply':
      console.log(`${a} * ${b} = ${a * b}`);
      break;
    case 'divide':
      if (b === 0) {
        console.log('Cannot divide by zero.');
      } else {
        console.log(`${a} / ${b} = ${a / b}`);
      }
      break;
    default:
      console.log('Invalid operation.');
  }

  readline.close();
}

main();