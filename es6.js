 // destructuring - seperating an object or array into variables

// // es5

// var person1 = ['Prashanth', 22];
// var name5 = person1[0];
// var age5 = person1[1];
// console.log(`name is ${name5} and age is ${age5}`);


// var [name, year] = ['Prashanth', 22];
// console.log(`name is ${name} and age is ${year}`);

// var [name, year] = ['Sandeep', 22];
// console.log(`name is ${name} and age is ${year}`);



// // es6

// let [name, year] = ['Prashanth', 22];
// console.log(`name is ${name} and age is ${year}`);

// let [name, year] = ['Prashanth', 22];
// console.log(`name is ${name} and age is ${year}`);


// const obj = {
//     firstName: 'Darpan',
//     lastName: 'Singh'
// };



// // console.log('last name is ', obj.lastName);

// const { firstName, lastName } = obj;
// console.log(lastName);

// const { firstName: first, lastName: last } = obj;
// console.log(first + last);


// const obj = {
//     firstName: 'Darpan',
//     lastName: 'Singh'
// };
// const {firstName,lastName}=obj;
// console.log(firstName)


// function agecalulat(dob){
//     const age =2025-dob;
//     return [age,65-age];
// }
// const [age ,retirementtime]=agecalulat(2000);
// console.log(retirementtime)



// ES5
// const boxes = document.querySelectorAll('.box');
// // boxes is not an array its nodelist
// var boxArray = Array.prototype.slice.call(boxes) // converting nodelist to array
// console.log(boxes);
// console.log('box array is',boxArray);

// foreach
// var myarray = [1,2,3,4,5]
// myarray.forEach(function(element){
//     console.log(element*2);
// })

// for loop

// for (var i = 0; i < boxArray.length; i++) {
//            boxArray[i].style.backgroundColor = 'yellow';
//      }



// boxArray.forEach(function (cur) {
//     cur.style.backgroundColor = 'yellow';
// });



// // complete es6

// const boxArray = Array.from(boxes) 

// boxArray.forEach((cur) => {
//     cur.style.backgroundColor = 'yellow';
// });

// ES5
// for (var i = 0; i < boxArray.length; i++) {
//     if (boxArray[i].className === 'box blue') {
//         continue;
//     }
//     boxArray[i].style.backgroundColor = 'yellow';
// }


// for (var i = 0; i < boxArray.length; i++) {
//     if (boxArray[i].className === 'box blue') {
//         break;
//     }
//     boxArray[i].style.backgroundColor = 'yellow';
// }

// // for of inES6

// // es6

// for (const curbox of boxArray) {
//     if (curbox.className === 'box blue') {
//         continue;
//     }
//     curbox.style.backgroundColor = 'yellow';
// }


// for (const curbox of boxArray) {
//     if (curbox.className === 'box blue') {
//         break;
//     }
//     curbox.style.backgroundColor = 'yellow';
// }



// var ages = [17, 15, 28, 14, 22, 11];
// // var full = ages.findIndex( (curage) =>{
// //     return curage > 18;
// // });


// // console.log(ages);
// // console.log(full);
//  const sumOfAges = [...ages];
// console.log('sum of ages in es6', sumOfAges);


// rest operator 
// // es6

// function isFullAge6(...years) {
//     console.log(years);
//     years.forEach(year => console.log((2020 - year) >= 18));
// }

// isFullAge6(1990, 2020, 2000, 2011);

// function isFullAge6(limit, ...years) {


// function fullAge(...years){
//     years.forEach(year=>{console.log((2025-year)>=18)
//              console.log(years.indexOf(year))});
// }
// fullAge(1997,2010,1993,2000)


// default operator

// function address(firstname,lastname,dob,nationality){
//     if(lastname===undefined){
//         lastname="singh";
//     }
//     if(nationality===undefined){
//         nationality="Indian";
//     }
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = dob;
//     this.nationality = nationality;

// }
// const add = new address("abhishek","jaswal",3698);
// console.log(add.nationality)


// const question = new Map();
// question.set('question', 'what is the color of sky?');
// question.set(1, 'skyblue');
// question.set(2, 'red');
// question.set(3, 'pink');
// question.set(4, 'green');
// question.set('correct', 1);

// console.log(question);
// answer = parseInt(prompt('choose the correct answer'));



// if (answer === question.get('correct')) {
//     console.log('correct');
// }
// else {
//     console.log('wrong answer');

// }

// function greet(name,age){
//    console.log (`name is ${name} and age is ${age}`);
// }
// greet("Prashanth",23)


// const person = { firstName : "john", lastName : "Doe"};
// const {firstName , lastName} = person ;
// console.log(  firstName +" " +lastName );

// const person = ['prashanth', 12, 'english.'];
// // console.log(`name of student ${namee} age is ${age} and subject ${subject}`);
// const [nae , age] = person;
// console.log(age)


// const calculateRetirement = (dob)=>{
//     const age = 2025 - dob;
//     return [age, 65 - age]
// }
// const [age , retirementtime] = calculateRetirement(2000);
// console.log(retirementtime)


// function checNumber(array,target){
//     let left=0;
//     let right=array.length-1;
//     while(left<=right){
//         let mid = Math.floor((left + right)/2);
//     if(array[mid]===target){
//         return (`value is in mid ${mid}`);
//     }
//     else if(array[mid]<target){
//          left = mid + 1;
//     }
//     else {
//          right = mid -1;
//     }
    
// }return -1;
// }

// const array = [10, 20, 30, 40, 50, 60];
// let target = 10;

// let result = checNumber(array, target);
// if (result !== -1) {
//     console.log(`Target found at index: ${result}`);
// } else {
//     console.log("Target not found");
// }


// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid; // Target found
//         } else if (arr[mid] < target) {
//             left = mid + 1; // Search in the right half
//         } else {
//             right = mid - 1; // Search in the left half
//         }
//     }

//     return -1; // Target not found
// }

// // Example usage
// let sortedArray = [10, 20, 30, 40, 50, 60];
// let target = 50;

// let result = binarySearch(sortedArray, target);
// if (result !== -1) {
//     console.log(`Target found at index: ${result}`);
// } else {
//     console.log("Target not found");
// }

function bubblesort(arr){
    let n = arr.length;
    let swapped;
    for(let i=0;i<n-1;i++){
        swapped = false;
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;   
            }
        }
        if(!swapped) break;
    }
    return arr;
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log("sorted array", bubblesort(array));