console.log('***** Music Collection *****')

//created variable collection with a value of an empty array
let collection = [];
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

console.log('My record collection includes:', collection);
