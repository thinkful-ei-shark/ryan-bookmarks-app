import { render } from "./ui.js";
// file handles events
//submission of bookmark
// editing of bookmark
// delete event
// listing bookmark
// all of the even handlers and listenrs go here

// user will click this to add a new bookmark
// this function will render a new item in a reverse colum flex box so that it's at the top
// of the screen which will have all of the info to input the new book mark.
const handelAddNewItem = () => {
    $('body').on("click", "#add-bookmark-btn", function (e) {
      console.log("the HandelAddNewItem ran");
      // add a call to the function that will create the render for the add new item
    });
};

// this function will store the value of the filter by stars and call a function that will only render a list of bookmarks that are equal to or greater than the number selected. I need to add a search button to the filter list. 
const handelFilterList = () => {
    $('body').on("click", "#filter-btn", function (e) {
      console.log("the handelFilterlist button ran");
      // this function needs to get the value of the filter list and pass that through a function which will display the correct results
    });
};

// this function takes in all of the new values we want to store and passes into a function that does a FETCH PUT to the data store
const handelConfirmAddBookmark = () => {
    $("body").on("submit", "#add-item-form", function (e) {
      e.preventDefault();
      console.log("the handelConfirmAddBookmark ran");
      // this needs to capture all of the info in the form and pass it along either in an object or call on a helper function to make the data into the correct format then send it to the PUT function.
      // then call on the function that will put the data to the database
      // then the function calls render in the compact view
    });
};


const handelClearTextDescription = () => {
    $("body").on("click", "#clear-text-btn", function (e) {
      console.log("the handelClearTextDescription ran");
      // this function needs to clear the text in the text edit field
    });
}

// this function will hide the add new item window and run the render function at the end. 
const handelCancelAddNewItem = () => {
    $("body").on("click", "#cancel-btn", function (e) {
      console.log("the handelCancelAddNewItem ran");
      // this function will add the state of the display: none.
    });
}

// this function will render the original input form but with every text box with the correct value that is editing then the render function will run. 
const handelEditBookmark = () => {
  $("body").on("click", "#id=edit-btn", function (e) {
    console.log("the handelEditBookmark ran");
    // the function will go here that will show the template with the values equal to the data store and do a render
  });
}

// this function will allow the users to delete a bookmark that they added. 
const handelDeleteBookmark = () => {
    $('body').on("click", "#delete-btn", function (e) {
      console.log("the HandelAddNewItem ran");
      // the function here will call the api that use the DELETE method to remote the entire object from the data store then render the page again. 
    });
}




const main = function () {
    console.log('main function in the index has started');
    handelAddNewItem();
    handelFilterList();
    handelClearTextDescription();
    handelConfirmAddBookmark();
    handelCancelAddNewItem();
    handelEditBookmark();
    handelDeleteBookmark();
    render();
};

$(main);