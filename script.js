/*let js = 'amazing';
console.log('jonas'); //console.log connects the script to the browser console
console.log(23);

let firstName = 'Matilda';// variable declaration
console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = 'programmer'
let myCurrentJob = 'teacher'
console.log(myFirstJob)*/

/*let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'jonas');
javascriptIsFun = 'yesss'
console.log(typeof javascriptIsFun)

let year;
console.log(year)
console.log(typeof year)

year = 2021
console.log(typeof year)

let age = 30; // we  use let to assign values to variables that can change over time
age = 31; //wen re-assigning a value to a variable ,we just do it without use the let keyword
console.log(age);

const birthYear = 2000;
console.log(birthYear);

//using mathematical operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);// you can log multiple values into the console by simply using a coma


console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 simply means 2 to the power of 3  = 2*2*2

const firstName = 'Kevin';
const secondName = 'Jumwa';
console.log(firstName + '  ' + secondName);
console.log(typeof firstName);//the typeof operator simply tells usthe data type of the given value

// assignment operators
let x = 10 + 5;//15
x += 10;//x = x + 10    =25
x *= 4 //x = x *4   =100
x++;
x--;
x--;
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 >= now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 >= now - 2018)

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge)

const markWeight1 = 78;
const markHeight1 = 1.69;
const markbmi1 = markWeight1 / markHeight1 ** 2;
console.log(markbmi1);

const marcoWEight = 95;
const marcoHeight = 1.88;
const marcoBmi = marcoWEight / marcoHeight ** 2;
console.log(marcoBmi);

const johnMass = 92;
const johnHeight = 1.95;
const johnBmiOne = johnMass / johnHeight ** 2;
console.log(johnBmiOne);

const johnUzito = 85;
const johnurefu = 1.76;
const johnSecondBmi = johnUzito / johnurefu ** 2;
console.log(johnSecondBmi);

const markAverageBmi = (markbmi1 + marcoBmi) / 2;
console.log(markAverageBmi);

const johnAverageBmi = (johnBmiOne + johnSecondBmi) / 2;
console.log(johnAverageBmi);

const markHigherBmi = markAverageBmi > johnAverageBmi;
console.log(markHigherBmi);



const firstName = `jonas`;
const job = `teacher`;
const birthYear = 1991;
const year = 2037;
const jonas = `i'm ${firstName} a ${year - birthYear} years old ${job}`;
// console.log(jonas);
//template literals make it much easier to combine different data types in a string with less hassle
// all you need to do is use ${}
const newJonas = `i'm ${firstName} a ${year - birthYear} years old ${job}`;
console.log(newJonas);

console.log('string with \n\
multiple\n\
lines')
//template literals make it much easier to write multi line strings
console.log(`string with    
multiple
lines`)

const age = 18;

if (age >= 18) {
    console.log(`Sarah is old enough to get a driving licence`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young.wait another ${yearsLeft} years`)
}


const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20
} else {
    century = 21
}

console.log(century);


const markWeight1 = 78;
const markHeight1 = 1.69;
const markbmi1 = markWeight1 / markHeight1 ** 2;
console.log(markbmi1);

const johnMass = 92;
const johnHeight = 1.95;
const johnBmiOne = johnMass / johnHeight ** 2;
console.log(johnBmiOne);

if (markbmi1 > johnBmiOne) {
    console.log(`Mark's BMI (${markbmi1}) is higher than John's BMI (${johnBmiOne})`);
} else {
    console.log(`John's BMI (${johnBmiOne}) is higher than Mark's BMI (${markbmi1})`)
}*/

// type conversion = this happens when the programmer manually converts data types
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Kevin'));
console.log(typeof NaN);
console.log(String(23), 23);

// type coersion = this happens when javascript automatically converts data types for us behind te scenes
console.log('i am ' + 23 + 'years old');
console.log('23' - '10' - 3);
console.log('23' / '2');













































