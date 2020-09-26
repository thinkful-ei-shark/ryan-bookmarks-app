// This contains the store and the variables that bookmark app use to store, generate and create all elements of the bookmark app. 

const store = [];
const showBookmarkForm = false;
let error = null;
let filter = 0;


// this function adds each bookmark to the local store, it is called in the API getbookmarks function
const addItem = function (title, url, desc, rating, id) {
  this.store.push({title, url, desc, rating, id});
};

export default {
  store,
  showBookmarkForm,
  error,
  filter,
  addItem
};