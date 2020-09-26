import { render } from "./ui.js";
import { getBookmark, addBookmarkApi, deleteBookmark } from "./api.js";
import store from "./store.js";


// user will click this to add a new bookmark
const handelAddNewItem = () => {
    $('body').on("click", "#add-bookmark-btn", function (e) {
        console.log("the HandelAddNewItem ran");
        store.showBookmarkForm = true;
        render();
    });
};

// this function will store the value of the filter by stars and will only render a list of bookmarks that are equal to or greater than the number selected.
const handelFilterList = () => {
    $('body').on("click", "#filter-btn", function (e) {
        const filterBy = $("#filter-items").val();
        store.filter = parseInt(filterBy);
        render();
    });
};

// this function takes in all of the new values we want to store and passes into a function that does a FETCH PUT to the data store
const handelConfirmAddBookmark = () => {
    $("body").on("submit", "#add-item-form", (e) => {
        e.preventDefault();
        console.log("the handelConfirmAddBookmark ran");
        // here i capture the user input
        const newItemName = $("#title").val();
        const newItemRating = $("#rating").val();
        const newItemURL = $("#url").val();
        const newItemDescription = $('#description').val(); 
        addBookmarkApi(newItemName, newItemURL, newItemDescription, newItemRating)
          .then(data => {
            console.log(data)
            store.addItem(
              newItemName,
              newItemURL,
              newItemDescription,
              newItemRating,
              data.id
            );
            store.showBookmarkForm = false;
            render(); 
          })
    })
};

// this function will hide the add new item window and run the render function at the end. 
const handelCancelAddNewItem = () => {
    $("body").on("click", "#cancel-btn", function (e) {
      store.showBookmarkForm = false;
      render();
    });
}

// this function is a helper function that will get the id from the closest attribute with a value of ID
const getItemIdFromElement = function (item) {
  return $(item).closest("li").attr("id");
};


// this function will allow the users to delete a bookmark that they added. 
const handelDeleteBookmark = () => {
    $('body').on("click", "#delete-btn", function (e) {
      console.log("the HandelDeleteBookmark ran");
      let id = getItemIdFromElement(e.currentTarget);
      console.log(id);
      deleteBookmark(id)
        .then(res => {
          getBookmark()
          render()
        })
    });
}

// this is the main function I use when the page loads
const main = function () {
    handelAddNewItem();
    handelFilterList();
    handelConfirmAddBookmark();
    handelCancelAddNewItem();
    handelDeleteBookmark();
    render();
    getBookmark(); 
};

$(main);
