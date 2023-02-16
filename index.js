let nombre = prompt('ingrese su nombre para usar la calculadora');
let edad = prompt('ingrese su edad para continuar');

while(edad === ''){
    alert('este campo es obligatorio para poder continuar');
    edad = prompt('por favor ingresar su edad');
}
console.log(nombre, edad);

let numA = parseInt(prompt('ingrese su primer numero'));
let operacion = prompt('seleccione la operacion que dese');
let numB = parseInt(prompt('ingrese el segundo numero'));

switch(operacion){
    case '+':
        alert('el resultado es de: ' + (numA + numB));
    break;
    case '-':
        alert('el resultado es de: ' + (numA - numB));
    break;
    case '*':
        alert('el resultado es: ' + (numA * numB));
    break;
    case '/':
        alert('el resultado es de: ' + (numA * numB));
    break;
}

for(i = 1; i <= 5; i++){
    console.log('su numero de interacciones es de: ' + i);
}