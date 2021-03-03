
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
  }
];

console.log( "The firstName of the second student is", students[ 0 ][ "firstName" ] );

//var hello = () => "Hello, Martha";

//console.log(hello());
