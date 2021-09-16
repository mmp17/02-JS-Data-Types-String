// console.log("Muzaffar")

// var academyName = "Web Brain Academy";
// document.getElementById("demo2").innerHTML = academyName;

// var carName = "Kia Sportage R";
// document.getElementById("demo").innerHTML = carName;

// let answers = [];

// let questions = [
//     'What is your name?',
//     'What is your phone number?',
//     'How old are you?'
// ]

// for (let i=0; i < questions.length; i++) {
//     answers [i] = prompt ([questions[i]])
// }

// console.log (answers)

// var OK = 'Samarkand'
// console.log(OK);

// var myName = 'Muzaffar'
// console.log(myName);

// console.log(typeof Mirzaev)

// document.getElementById("demo2").innerHTML = myName
//console.log("O'zbekiston vatanim manim")
// let string2 = myName.slice(8,12);
// console.log(string2.toUpperCase()); //BEK

// STRING METHODS
// let myName = "Muzaffarbek Mirzaev"
// console.log(myName.length) //19


// console.log(myName.slice(8,15)); //bek Mir
// console.log(myName.slice(8)); //bek Mirzaev ,8 dan oxirigacha kesadi
// console.log(myName.substring(8,17)); //bek Mirza //same as slice but can not take negative numbers
// console.log(myName.substr(8)); //bek Mirzaev ,8 dan oxirigacha kesadi
// console.log(myName.substr(8,3)); //bek ,8 dan ikkinchi qiymat kursatilgan uzunlikni kesadi 
// console.log(myName.toUpperCase()); //MUZAFFARBEK MIRZAEV
// console.log(myName.toLowerCase()); //muzaffarbek mirzaev

// let myCountry = "Uzbekiston jonajon vatanim manim"
// console.log(myCountry.split()); //[ 'Uzbekiston jonajon vatanim manim' ] //bitta array/massiv yasadi
// console.log(myCountry.split('')); //[ 'U', 'z', 'b', 'e', 'k', 'i', 's', 't', 'o', 'n', ' ', 'j', 'o', 'n', 'a', 'j', 'o', 'n', ' ', 'v', 'a', 't', 'a', 'n', 'i', 'm', ' ', 'm', 'a', 'n', 'i', 'm'] // har bitta harfni bolib arrat yasadi
// console.log(myCountry.split(" ")); //[ 'Uzbekiston', 'jonajon', 'vatanim', 'manim' ] // probel quyilsa, har bitta suzdan iborat array yasaydi

//fruits = 'Orange, Apple, Grapes, Banana, Watermelon, Melon, Tomato'
// console.log(fruits.split(",")); //[ 'Orange',' Apple',' Grapes', ' Banana', ' Watermelon, 'Melon', ' Tomato']
//console.log(fruits.split("A")); //[ 'Orange, ', 'pple, Grapes, Banana, Watermelon, Melon, Tomato' ]

//console.log(eval('2 + 2')); // expected output: 4
// console.log(eval(new String('2 + 2'))); // expected output: 2 + 2

// console.log(eval('2 + 2') === eval('4')); // expected output: true
// console.log(eval('2 + 2') === eval(new String('2 + 2'))); // expected output: false !!!OBJECTS CAN NOT BE COMPARED

// var string = "I evol uoy os !hcum"

// const reverse = function(string) {
//     return string.split(' ').map(function (item) {
//         return item.split('').reverse().join('');
//     }).join(' ');
// }