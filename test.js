//este codigo se genero al pedirle a copilot la siguiente instruccion:
//Compose a full JavaScript program for constructing a calculator with tho parameters entrance in console (el two se digito mal por tho, pero lo dedujo !!!)
//Compose a full JavaScript program for constructing a calculator with two parameters entrance in console


//se puede escoger una aprte del codigo, seleccionarlo, y click derecho copilot, "start in editor " y luego en la 
//linea de comnados del chat de copilot escribir cualquiera de los comandos como : 
//  /tests para generar pruebas unitarias
//  / explain para explicar el codigo
//  / fix para corregir el codigo
//  etc.


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