// Splitting a series of strings into a Array
const x = 'Steve, Harry, John, Louis';
console.log(x.split(' ,'));

// Taking a substring and substracting the last letter
const y = 'Harry';
console.log(y.substring(0,4));

// To Upper case and Lower Case
const m = 'steve';
console.log(m.toUpperCase());

const z = 'PHIL';
console.log(z.toLowerCase());

// ARRAYS
const r = [2, 4, 6, 8];
console.log(r);

// Access of different point of Arrays, access to array [4]
const b = [2, 4, 6, 8];
console.log(b[1]);

// Despite const you can add onto a array a extra element of 9
b[4] = '9'
console.log(b);

// Push method easier for adding values to the end
b.push('10');
console.log(b);

// To add onto the beginning of a array with unshift
b.unshift("0");
console.log(b);

// Pop (take the last one off)
b.pop();
console.log(b);

// To check and see if it a array with .isArray()
console.log(Array.isArray(b));

// To get the index of something using indexOf()
console.log(b.indexOf('9'));

// KEY LITREALS
const person = {
    firstName: 'John',
    lastName: 'Doe', 
    age: 30 ,
    hobbies: ['music' , 'movies', 'sports'],
    address : {
        street: '50 main street' ,
        city : 'Boston' ,
        state: 'MA'
    }
}

// to log the whole thing (alerts just show objects error)
console.log(person);

// Access a single value (Seperate different logs with commas)
console.log(person.firstName);

// How to pick out a particular object like 'movies'
console.log(person.hobbies[1]);

// How to display as actual variables (destructiuring - advanced new feature in ES6)
const { firstName, lastName} = person;
console.log(firstName);

// Add properties
person.email = 'john@gmail.com';
console.log(person);


// •	Arrays of obejcts are also known as ‘todos’ which looks like this
// Looks very simliar to JSON code this....

const todos = [
    {
        id: 1,
        text: 'Take Out Trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
    // Dont forget to end  with a semi colon on ];
];


// Print out all
console.log(todos);

// Print out specfic section of array so [0,1,2] = [1] then .text for "Meeting with Boss"
console.log(todos[1].text);

// To send data to a server and convert to Json (very handy indeed!)
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


// For Loops
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// While Loops (Difference with while loops is you set the variable outside of the loop)
let i = 0;
while(i < 10) {
    // Back ticks and dollar sign with {} - Template Strings Example
    console.log(`While Loop Number: ${i}`);
    i++;
}

// A for of Loop is the best way to iterate through a array (better than using a standard for loop)
for (let todo of todos) {
    console.log(todo);
}




















