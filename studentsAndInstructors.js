var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

console.log(students);
console.log('Lenght-'+students.length);

for (x=0;x<students.length;x++) {
    console.log(students[x].first_name+" "+students[x].last_name);
}