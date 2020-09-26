import { render } from "./scripts/ui";
import {
  getBookmark,
  addBookmarkApi,
  deleteBookmark,
  updateBookmark,
} from "./scripts/api";
import store from "./scripts/store";
import $ from "jquery";
import "./stylesheets/style.css";


// user will click this to add a new bookmark
// this function will render a new item in a reverse colum flex box so that it's at the top
// of the screen which will have all of the info to input the new book mark.
const handelAddNewItem = () => {
  $("body").on("click", "#add-bookmark-btn", function (e) {
    store.showBookmarkForm = true;
    render();
  });
};

// this function will store the value of the filter by stars and call a function that will only render a list of bookmarks that are equal to or greater than the number selected. I need to add a search button to the filter list.
const handelFilterList = () => {
  $("body").on("click", "#filter-btn", function () {
    const filterBy = $("#filter-items").val();
    store.filter = parseInt(filterBy);
    render();
    // this function needs to get the value of the filter list and pass that through a function which will display the correct results
  });
};

// this function takes in all of the new values we want to store and passes into a function that does a FETCH PUT to the data store
const handelConfirmAddBookmark = () => {
  $("body").on("submit", "#add-item-form", (e) => {
    e.preventDefault();
    // here i capture the user input
    const newItemName = $("#title").val();
    const newItemRating = $("#rating").val();
    const newItemURL = $("#url").val();
    const newItemDescription = $("#description").val();
    addBookmarkApi(
      newItemName,
      newItemURL,
      newItemDescription,
      newItemRating
    ).then((data) => {
      store.addItem(
        newItemName,
        newItemURL,
        newItemDescription,
        newItemRating,
        data.id
      );
      store.showBookmarkForm = false;
      render();
    });
    // this needs to capture all of the info in the form and pass it along either in an object or call on a helper function to make the data into the correct format then send it to the PUT function.
    // then call on the function that will put the data to the database
    // then the function calls render in the compact view
  });
};

// this function will hide the add new item window and run the render function at the end.
const handelCancelAddNewItem = () => {
  $("body").on("click", "#cancel-btn", function (e) {
    store.showBookmarkForm = false;
    render();
    // this function will add the state of the display: none.
  });
};

// this function will render the original input form but with every text box with the correct value that is editing then the render function will run.
const handelEditBookmark = () => {
  $("body").on("click", "edit-btn", function (e) {
    // the function will go here that will show the template with the values equal to the data store and do a render
  });
};

const getItemIdFromElement = function (item) {
  return $(item).closest("li").attr("id");
};


// this function will allow the users to delete a bookmark that they added.
const handelDeleteBookmark = () => {
  $("body").on("click", "#delete-btn", function (e) {
    let id = getItemIdFromElement(e.currentTarget);
    deleteBookmark(id).then((res) => {
      getBookmark();
      render();
    });
  });
};

const handelExpandView = () => {
  $("body").on("click", "#expand", function (e) {
    $(this).parents().siblings("#toggle").toggleClass('hidden');
  });
}



const main = function () {
  handelAddNewItem();
  handelFilterList();
  handelConfirmAddBookmark();
  handelCancelAddNewItem();
  handelEditBookmark();
  handelDeleteBookmark();
  render();
  getBookmark();
  handelExpandView();
};

$(main);
