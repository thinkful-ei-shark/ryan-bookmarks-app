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

// this will cancel the bookmark that is decided to not be used
// find cancels parent and change the boolean value in the store and re render list
// call render
const handelCancel = () => {

    $('body').on("click", "#cancel-btn", function (e) {
        e.preventDefault()

    });
}

const handelEditBookmark = () => {

    $("body").on("click", "#add-bookmark-btn", function (e) {

        // we need an identifier to see currentTarget
        // take bookmark-form and remove display: none from styles
        // capture new items then update using patch
    });
}

// const handelDeleteBookmark = () => {
//     $('body').on("click", "#add-bookmark-btn", function (e) {
//       console.log("the HandelAddNewItem ran");
//
//     });
// }






const main = function () {
    console.log('main function in the index has started');
    handelAddNewItem();
    handelFilterList();
    handelEditBookmark()
    handelCancel();
    handelConfirmAddBookmark();
    render();
};

$(main);
