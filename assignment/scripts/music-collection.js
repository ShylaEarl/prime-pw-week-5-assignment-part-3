console.log('***** Music Collection *****')

//created variable collection with a value of an empty array
let collection = [];
//globally scoped album variable that can be accessed outside of the function
let album = {};

//created addToCollection function which takes in 3 parameters
function addToCollection(title, artist, yearPublished){ // tracks or {name: name, duration: duration} as tracks parameter?
  //creates a new object
    album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    // tracks: [{name: name, duration: duration}] //do I need to hard code tracks here or can I add it below?
  };
  //adds new object to collection array
  collection.push(album);
  //and returns the object when called.
  return album;
}//end addToCollection function

//attempting to add the property value tracks which is an array of objects to the object album above without hard coding
// album.tracks = [{
//   name: name,
//   duration: duration
// }];

//testing addToCollection function by calling it and then logging the newly added object
console.log(addToCollection('Girls Just Want to have Fun', 'Cyndi Lauper', 1984, {name: 'Time after Time', duration: 3.27}));
console.log('I have added ', album, ' to my record collection!');
// console.log('I have just added ', Object.values(album), ' to my record collection!');
// console.log(`I've add ${addToCollection('Girls Just Want to have Fun', 'Cyndi Lauper', 1984)} to my record collection!`);
// console.log(`I've added ${album} to my record collection!`);
console.log(addToCollection('Purple Rain', 'Prince', 1984));
console.log('I have added ', album, ' to my record collection!');
console.log(addToCollection('1999', 'Prince', 1982));
console.log('I have added ', album, ' to my record collection!');
console.log(addToCollection('Lilian', 'The Rope', 2019, {name: 'Gravity', duration: 2.36}, {name: 'Water to Wine', duration: 5.49}));
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
    //this log includes the tracks property
    // console.log('They are:', `${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}: 1. ${array[i].tracks.name}: ${array[i].tracks.duration}
    // 2. ${array[i].tracks.name}: ${array[i].tracks.duration} 3. ${array[i].tracks.name}: ${array[i].tracks.duration}`);
  }//end for loop
  // return `${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}.`;
}//end showCollection function

//testing showCollection function which returns undefined b/c we aren't returning anything from the function
console.log('Testing showCollection function', showCollection(collection));

//created a findByArtist function that accepts a string parameter
function findByArtist(artist){
  //created an empty array
  let artistArray = [];
  //looing through collection array
  for(let i = 0; i < collection.length; i++){
    //if argument matches an artist name in the collection
    if(artist === collection[i].artist){
      //add the matched album to an empty artist array
      artistArray.push(collection[i]);
    }//end conditioanl
  }//end for loop
  //returns an array of albums by the same artist
  return artistArray;
}//end findByArtist function

console.log('I have these Cyndi Lauper albums:', findByArtist('Cyndi Lauper'));
console.log('I have these Prince albums:', findByArtist('Prince'));
console.log('I created these albums:', findByArtist('Shyla'));
console.log('This is testing if no argument is added', findByArtist());
console.log('I have these Soft Kill albums:', findByArtist('Soft Kill'));

//***STRETCH GOALS***

// //created search function to search for matching object criteria
function search({artist: criteria1, yearPublished: criteria2}){ // (object)? or ({object})? tracks: {name: criteria3?} or tracks.name: criteria3? or trackName: {name: criteria3}
  //empty array to hold search results
  let searchResults = [];
  //looping through collection array
  for(let i = 0; i < collection.length; i++){
    //searching for matches to search criteria
    if(criteria1 === collection[i].artist && criteria2 === collection[i].yearPublished){ //&& criteria3 ===collection[i].tracks.name
      //adding matching albums to searchResults array
      searchResults.push(collection[i]);
    } else if (criteria1 === undefined && criteria2 === undefined){ //if an empty object is passed as an argument (undefined)
      //return collection array
      return collection;
    }//end conditional
  }//end for loop
  //if there are search arguments return matching results or an empty array if no matches
  return searchResults;
}//end search function

console.log('****Testing Search Function.****');
console.log('Testing search. Artist (Cyndi) & Year (1984). Should return 1 album.', search({artist: 'Cyndi Lauper', yearPublished: 1984})); //should log Girls Just Want to have Fun album
console.log('Testing search. Artist (Prince) & Year (1984). Should return 1 album', search({artist: 'Prince', yearPublished: 1984})); //should log Purple Rain album
console.log('Testing search. Should return 1 album.', search({artist: 'Soft Kill', yearPublished: 2011}));
console.log('Testing search. Should return 1 album.', search({artist: 'Soft Kill', yearPublished: 2018}));
console.log('Testing search. Should return 1 album.', search({artist: 'The Rope', yearPublished: 2011}));
console.log('MBV test. Should return 2 albums.', search({artist: 'My Bloody Valentine', yearPublished: 1991}));
console.log('Test. Should return empty array.', search({artist: 'Shyla', yearPublished: 2016}));
console.log('Test. Should return empty array.', search({artist: 'ACTORS', yearPublished: 2018}));
console.log('Test. Should return empty array.', search({artist: 'Prince', yearPublished: 1991}));
console.log('Testing search. Should log all albums', search({})); //should log all albums in collection
// // console.log('Testing search. Should log all albums.', search()); //should log all albums in collection

// album.tracks = [{
//   name: name,
//   duration: duration
// }];

//Below are two ways to write the search function slightly different.
console.log('**************************************************');

function search2({artist: criteria1, yearPublished: criteria2}){ // (object)? or ({object})?
  //empty array to hold search results
  let searchResults = [];
  //looping through collection array
  for(let i = 0; i < collection.length; i++){
    //searching for matches to search criteria
    if(criteria1 === collection[i].artist || criteria2 === collection[i].yearPublished){
      //adding matching albums to searchResults array
      searchResults.push(collection[i]);
    } else if (criteria1 === undefined && criteria2 === undefined){ //if an empty object is passed as an argument (undefined)
      //return collection array
      return collection;
    }//end conditional
  }//end for loop
  //if there is are search arguments return matching results or an empty array if no matches
  return searchResults;
}//end search function

console.log('Testing search2. Artist Prince. Should return 2 albums.', search2({artist: 'Prince'})); //should log all albums by Prince
console.log('Testing search2. Pub year 1984. Should return 2 albums.', search2({yearPublished: 1984})); //should log all albums from 1984
console.log('Testing search2. Should log all albums', search2({})); //should log 10 albums

console.log('****************************************');

function search3(criteria1, criteria2){
  let searchResults = [];
  for(let i = 0; i < collection.length; i++){
    if(criteria1 === collection[i].artist && criteria2 === collection[i].yearPublished){
      searchResults.push(collection[i]);
    } else if (criteria1 === undefined && criteria2 === undefined){
      return collection;
    }//end conditional
  }//end loop
  return searchResults;
}//end function

console.log(search3(1984));
console.log(search3('My Bloody Valentine', 1991));
console.log(search3('My Bloody Valentine', 1995));
console.log(search3());
