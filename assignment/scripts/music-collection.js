console.log('***** Music Collection *****')

//created variable collection with a value of an empty array
let collection = [];

//created addToCollection function which takes in 3 parameters
function addToCollection(title, artist, yearPublished){
  //creates a new object
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  //adds new object to collection array
  collection.push(album);
  //and returns the object when called.
  return album;
}//end addToCollection function

console.log(addToCollection('Girls Just Want to have Fun', 'Cyndi Lauper', 1983));
console.log(addToCollection('Purple Rain', 'Prince', 1984));
console.log(addToCollection('Lilian', 'The Rope', 2019));
console.log(addToCollection('Lemonade', 'Beyonce', 2016));
console.log(addToCollection('Loveless', 'My Bloody Valentine', 1991));
console.log(addToCollection('An Open Door', 'Soft Kill', 2011));

console.log('My record collection includes:', collection);
