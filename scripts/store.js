// global variables, functions 
// array of bookmarks [{ id, rating, name, }, ...]
// jobs to be done: Create 3 example sites in the data structure that match the 
//requiments of title, rating, description, url and any other needed variables like 
//checked: false and hidden: false
// update, edit, change, add, all the fuctions related to this go here

const store = {
  bookmarks: [
    {
      id: 'x56w',
      title: 'Title 1',
      rating: 3,
      url: 'http://www.title1.com',
      description: 'lorem ipsum dolor sit',
      expanded: false
    },
    {
      id: '6ffw',
      title: 'Title 2',
      rating: 5,
      url: 'http://www.title2.com',
      description: 'dolorum tempore deserunt',
      expanded: false
    } 
  ],
  adding: false,
  error: null,
  filter: 0
};