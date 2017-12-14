var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
    }

console.log(users);

// console.log(users.Students);
// console.log(users.Instructors);

// for (x=0;x<users.Students.length;x++) {
//     console.log(users.Students[x].first_name+" "+users.Students[x].last_name+" - "+(users.Students[x].first_name.length+users.Students[x].last_name.length));
// }

function arrOutput(z,arr) {
    // console.log(arr);
    z++;
    console.log(z+" - "+arr.first_name+" "+arr.last_name+" - "+(arr.first_name.length+arr.last_name.length));
}

console.log("Students");
for (x=0;x<users.Students.length;x++) {
    arrOutput(x,users.Students[x]);
}
console.log("Instructors");
for (x=0;x<users.Instructors.length;x++) {
    arrOutput(x,users.Instructors[x]);
}

