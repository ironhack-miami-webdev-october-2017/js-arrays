var myArray = [ 'pizza', 'french fries', 'broccoli', 'burgers', 'sushi', 'tacos' ];
   //              0            1            2           3         4        5

var otherArray = [];

console.log(  myArray[0]  );
console.log(  myArray[999]  );
console.log(  myArray[6]  );

console.log(  myArray.length  );

console.log(  otherArray[2]  );
console.log(  otherArray.length  );

// "push()" adds to the end of the array
myArray.push( 'lasagna' );

console.log(  myArray.length  );
console.log( myArray );
console.log(  myArray[6]  );

// "unshift()" adds to the beginning of the array
// (all positions are moved over by 1)
myArray.unshift( 'calzone' );

console.log(  myArray.length  );
console.log( myArray );
console.log(  myArray[0]  );

// "splice()" removes items from anywhere in an array
// argument #1:  position on which to start deleting
// argument #2:  how many items to delete
myArray.splice(3, 2);

console.log( myArray );

// for (var i = 0; i < myArray.length; i += 1) {
//     console.log('Current INDEX: ' + i);
//     console.log('Item of the ARRAY: ' + myArray[i]);
//     console.log('Characters: ', myArray[i].length);
//     console.log('Characters Array: ', myArray[i].split(""));
// }


// "forEach()" receives 1 argument, an anonymous function.
myArray.forEach(function (oneItem) {
  console.log('Item of the ARRAY: ' + oneItem);
  console.log('Characters: ' + oneItem.length);
  console.log('Characters Array: ', oneItem.split(""));
});


console.log('Loop finished!');


var sentence = 'fuck the police and fuck the government.';

// "split()" is string to array conversion
var noFucksArray = sentence.split('fuck');

console.log( noFucksArray );

// "join()" is array to string conversion
console.log( noFucksArray.join('****') );


console.log( sentence.split('fuck').join('****') );
