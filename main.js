
// In-line comments

/*
 * Multi-line comments
 */

// Printing in console
console.log( "Hello world!" );


/*
 * Variables
 */

// undefined

var und;
console.log( "The type of und variable is", typeof und );

// number
// We can use many of mathematical operators available in other languages
// +, -, *, /, %, ++, --, +=, *=, etc.

var a = 20, b = 30;
console.log( "The types of a and b variables are", typeof a, "and", typeof b );

console.log( "The sum of a and b is", a + b );

a++;
console.log( "Variable a incremented by 1 is", a );

b *= 5;
console.log( "Variable b multiplied by 5 is", b );

// string

var firstName = "Pepito",
  lastName = "Perez";
console.log( "The types of firstName and lastName variables are", typeof firstName, "and", typeof lastName );

console.log( "Concatenation of firstName and lastName variables", firstName + lastName );

console.log( "The length of firstName variable is", firstName.length );

console.log( "The first and last characters of lastName variable are", lastName[ 0 ], "and", lastName[ lastName.length - 1 ] );

var stringScaped = "I am using a \"scape character\" in JavaScript!";
console.log( "We can use the scape characters for including quotes in a string: ", stringScaped );

// object
// arrays are also objects in JavaScript
// An object is a complex data structure composed by pairs of key-values elements
// Key-values can be interpreted as attributes or properties
// A key is a unique identifier of the property in the objetct
// A value can be a number, string, boolean, object (array), or even function

var students = [
  {
    "firstName": "Pepito",
    "lastName": "Perez",
    "age": 20,
    "courses": [ "Web development", "Calculous", "Electromagnetism" ],
    "program": {
      "name": "Systems Engineer",
      "foundedAt": 1990
    },
    "active": true
  },
  {
    "firstName": "Juanita",
    "lastName": "Gomez",
    "age": 21,
    "courses": [ "Web development", "Differential Ecuations", "Data Structures" ],
    "program": {
      "name": "Systems Engineer",
      "foundedAt": 1990
    },
    "active": false
  },
  {
    "firstName": "Alberto",
    "lastName": "Lozano",
    "age": 20,
    "courses": [ "Basic Programming", "Circuits" ],
    "program": {
      "name": "Electrical Engineer",
      "foundedAt": 1975
    },
    "active": true
  },
  {
    "firstName": "Gustavo",
    "lastName": "Arias",
    "age": 23,
    "courses": [ "Pathology", "Histology", "Internal Medicine" ],
    "program": {
      "name": "Medicine",
      "foundedAt": 1965
    },
    "active": true
  }
];

// For this complex object structure (array -> object), you need first access to a specific element in the array  
console.log( "The firstName of the second student is", students[ 0 ][ "firstName" ] );

// You can also use dot notation for property access
console.log( "The firstName of the second student is", students[ 0 ].firstName, " (using dot notation)" );

// You can verify if a property exists in an object
console.log( "Does the property gender exist for the third element?", students[ 2 ].hasOwnProperty( "gender" ) );
console.log( "Because does not exist, you can assign a value by default:", students[ 2 ].gender || "No definido" );

console.log( "And the property active?", students[ 2 ].hasOwnProperty( "active" ) );

// For modifing the value of a property
students[ 0 ][ "active" ] = false;
console.log( "The first student is not active anymore: ", students[ 0 ][ "active" ] );

//For adding a new property
students[ 0 ][ "gender" ] = "M";
console.log( "The gender of the first student is", students[ 0 ][ "gender" ] );

// For deleting a property
delete students[ 0 ][ "gender" ];
console.log( "The gender of the first student is", students[ 0 ].hasOwnProperty( "gender" ) );

// It is possible to use some buil-in methods for modifyng arrays

// For adding a new element at the end of the array
students.push( { "firstName": "Carlos", "lastName": "Mendoza" } );
console.log( "Students array with a new element at the end", students );

// For deleting the last element
students.pop();
console.log( "Students array without the last element", students );

// For deleting the first element
students.shift();
console.log( "Students array without the first element", students );

// For adding a new element at the begining of the array
students.unshift( {
    "firstName": "Pepito",
    "lastName": "Perez",
    "age": 20,
    "courses": [ "Web development", "Calculous", "Electromagnetism" ],
    "program": {
      "name": "Systems Engineer",
      "foundedAt": 1990
    },
    "active": true
  } );
console.log( "Students array with a new element at the begining", students );


/*
 * Functions
 */

// Simple function with return
function helloWorld() {
  return "Hello world!";
}

console.log( helloWorld() );

// Adding parameter
function helloWorldWithParam( name ) {
  return `Hello, ${name}!`;
}

console.log( helloWorldWithParam( "Maria" ) );

// Assigning default value to parameter
function helloWorldWithDefaultParam( name = "student" ) {
  return `Hello, ${name}!`;
}

console.log( helloWorldWithDefaultParam() );

// Another way to define functions using arrow notation
var helloWorldArrow = ( name = "student" ) => { 
  return `Hello, ${name}! Using arrow function`
};

console.log( helloWorldArrow() );

// If the function has only one statement, you can avoid the return and the brackets
var helloWorldArrowOneLine = ( name = "student" ) => `Hello, ${name}! Using arrow function one line`;

console.log( helloWorldArrowOneLine() );


/*
 * Manipulation of arrays using functions
 */

// map: Add property with the number of courses by student

// filter: Get the students of the systems engineer program

// find: Get the first student with last name "Lozano"

// reduce: Get the average of the student ages


/* 
 * Control sentences
 */

// Differences between == and === (!= and !==)

// Conditional (ternary) operator


/*
 * The DOM API
 */

// Getting an element by Id

// Getting all elements by tag name

// Getting all elements by class name

// Querying elements

// Modifyng the inner HTML

// Adding or modifyng an attribute

// Adding or modifyng a CSS style

// Adding events: click, change, mouseover, mouseout
// on
// event listener
