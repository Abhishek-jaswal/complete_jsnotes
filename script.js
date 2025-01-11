// var quiz = {
//     'question1': {
//         'question': 'color of sky',
//         '1': 'blue',
//         '2': 'green',
//         '3': 'red'
//     },
//     'president of usa': {
//         '1': 'donald',
//         '2': 'barack',
//         '3': 'george'
//     }
// }


// var answers = {
//     '1': 'blue',
//     '2': 'donald',
// }

// console.log(quiz["president of usa"]);


// let is_raining_outside = true;
// if(is_raining_outside){
//     console.log("tae a ubrella");

// }
// else{console.log("leave it dont take ubrella")}


// // ARRAY - list of elements

// var name_of_student1 = 'Ramesh';
// var name_of_student2 = 'Sandeep';
// var name_of_student3 = 'Shrikanth';
// var name_of_student4 = 'Rahul';

// console.log('students list: ' + name_of_student1 + ' ' + name_of_student2);


// var whatsapp_group = ['Ramesh', 'Sandeep', 'Shrikanth', 'Rahul', 'Ramesh', 'Sandeep', 'Shrikanth', 'Rahul', 'Ramesh', 'Sandeep', 'Shrikanth', 'Rahul', 'Ramesh', 'Sandeep', 'Shrikanth', 'Rahul', 'Ramesh', 'Sandeep', 'Shrikanth', 'Rahul', 'Ramesh', 'Sandeep', 'Shrikanth', 'Rahul', 'Ramesh', 'Sandeep', 'Shrikanth', 'Rahul', 'Ramesh', 'Sandeep', 'Shrikanth', 'Rahul'];


// console.log('Students list : ' + whatsapp_group);
// console.log("no. of group in the whtsapp group:",whatsapp_group.length)


// students_list = ['bill', 'steve', 'woz'];
// students_list.push("hello");
// console.log(students_list)

// var student1_details = ['Ramesh', 101, 2];
// var student2_details = ['Sandeep', 101, 3];
// console.log(student1_details[1]);



// var fbdatabase = {
//     'ram': {
//         'username': 'ramesh',
//         'email': 'ramesh@gmail.com'
//     },
//     'rah': {
//         'username': 'rahul',
//         'email': 'rahul@gmail.com'
//     },
//     '103': {
//         'username': 'shrikanth',
//         'email': 'shri@gmail.com'
//     },

//     '104': {
//         'username': 'sandeep',
//         'email': 'sandeep@gmail.com'
//     },
// }
// let p = prompt("enter the name");
// if(fbdatabase[p]){
//     let user =fbdatabase[p]
//     console.log(user.username,user.email)
// }
var shrikanth = {
    name: 'Shrikanth Vattikutti',
    age: 22,
    job: 'Software Engineer',

    presentation: function (studenttype, timeOftheDay) {
        if (studenttype === 'kids') {
            console.log('Hi kids, Good' + timeOftheDay + ', My name is ' + this.name);
        }
        else {
            console.log('Hi Students, Good' + timeOftheDay + ', I am ' + this.name + ' and I am a' + this.job);

        }
    }
}
shrikanth.presentation('kids', 'Morning');
