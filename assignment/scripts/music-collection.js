console.log('***** Music Collection *****')

//created variable collection with a value of an empty array
let collection = [];
//globally scoped album variable that can be accessed outside of the function
let album = {};

//created addToCollection function which takes in 3 parameters
function addToCollection(title, artist, yearPublished){
  //creates a new object
    album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  //adds new object to collection array
  collection.push(album);
  //and returns the object when called.
  return album;
}//end addToCollection function

//testing addToCollection function by calling it and then logging the newly added object
console.log(addToCollection('Girls Just Want to have Fun', 'Cyndi Lauper', 1984));
console.log('I have added ', album, ' to my record collection!');
// console.log('I have just added ', Object.values(album), ' to my record collection!');
// console.log(`I've add ${addToCollection('Girls Just Want to have Fun', 'Cyndi Lauper', 1984)} to my record collection!`);
// console.log(`I've added ${album} to my record collection!`);
console.log(addToCollection('Purple Rain', 'Prince', 1984));
console.log('I have added ', album, ' to my record collection!');
console.log(addToCollection('1999', 'Prince', 1982));
console.log('I have added ', album, ' to my record collection!');
console.log(addToCollection('Lilian', 'The Rope', 2019));
console.log('I have added ', album, ' to my record collection!');
console.log(addToCollection('The Rope', 'The Rope', 2011));
console.log('I have added ', album, ' to my record collection!');
console.log(addToCollection('Lemonade', 'Beyonce', 2016));
console.log('I have added ', album, ' to my record collection!');
console.log(addToCollection('Loveless', 'My Bloody Valentine', 1991));
console.log('I have added ', album, ' to my record collection!');
console.log(addToCollection('Tremolo', 'My Bloody Valentine', 1991));
console.log('I have added ', album, ' to my record collection!');
console.log(addToCollection('An Open Door', 'Soft Kill', 2011));
console.log('I have added ', album, ' to my record collection!');
console.log(addToCollection('Savior', 'Soft Kill', 2018));
console.log('I have added ', album, ' to my record collection!');

//testing collection array to make sure all album objects have been added to the collection array
console.log('My record collection includes:', collection);

//created showCollection function that accepts an array parameter
function showCollection(array){
  //logging number of items in the array
  console.log('I have ', array.length, ' albums in my collection.');
  //looping through the array to capture each album's info
  for(let i = 0; i < array.length; i++){
    //logging each album's info in specified format
    console.log('They are:', `${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}.`);
  }//end for loop
  // return `${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}.`;
}//end showCollection function

console.log('Testing showCollection function', showCollection(collection));
