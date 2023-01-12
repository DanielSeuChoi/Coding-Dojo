//_____________________1_______________________
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar) //will print out the first index
// console.log(otherRandomCar) // will print out the second index


//_____________________2_______________________
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name); // will not log anything undefined
// console.log(otherName); // will log employee's first_name


//_____________________3_______________________
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password); //will print out the string from password
// console.log(hashedPassword); // will be undefined

//_____________________4_______________________

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second); // will print will be false, the index of [1] 
//                              //does not equal to [4]
// console.log(first == third); // will print true, index of [1]
//                              // does equal to [8]


//_____________________5 _______________________
// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //Predict the output
// console.log(key); // will print out the string 'Value'
// console.log(secondKey); // Will print out the list from the list secondKey[1,5....]
// console.log(secondKey[0]); // will print out the first index from the secondKey list
// console.log(willThisWork); // will print out the second index from the secondKey [5]


