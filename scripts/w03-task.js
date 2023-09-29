/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2)
{
    return number1 + number2;
}
let addNumber1 = Number(document.querySelector('#add1').value);
let addNumber2 = Number(document.querySelector('#add2').value);
document.querySelector('#sum').value = add(addNumber1, addNumber2);
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (subtract1, subtract2)
{
    return subtract1 - subtract2;
}
let subtractNumber1 = Number(document.querySelector('#subtract1').value);
let subtractNumber2 = Number(document.querySelector('#subtract2').value);
document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply (factor1, factor2)
{
    return factor1 + factor2;
}
let multiplyNumber1 = Number(document.querySelector('#multiply1').value);
let multiplyNumber2 = Number(document.querySelector('#multiply2').value);
document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (dividend, divisor)
{
    return dividend + divisor;
}
let divideNumber1 = Number(document.querySelector('#divide1').value);
let divideNumber2 = Number(document.querySelector('#divide2').value);
document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const date = new Date();
const year = getFullYear();
document.querySelector('#year').value = year;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').value = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
let adi = numbersArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfArray').innerHTML = adi

/* Output Multiplied by 2 Array */
let multi = numbersArray.map(number=> number * 2);
document.querySelector('#multiplied').innerHTML = multi

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = adi(multi)