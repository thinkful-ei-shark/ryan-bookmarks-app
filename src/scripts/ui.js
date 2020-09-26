import $ from "jquery";
import store from "./store";


// this function generates a template that is the header of the app
const generateHeader = () => `<section class='menu-box'>
    <button type="button" id="add-bookmark-btn">new bookmark</button>
    <select name="filter" id="filter-items">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select><button type="button" id="filter-btn">Click to Filter By Stars</button>
</section>`;


// this function manages how we fill out the star rating, it creates an array with 5 keys then does a for each that loops through how many solid stars and hollow stars should be generated, then returns html.
const generateRatingStars = (rating) => {
    const stars = [...Array(5).keys()];
    let html = '';
    stars.forEach(star => {
        if (star + 1 <= rating) {
            html +=`<i class="fas fa-star"></i>`;
        } else {
            html += `<i class="far fa-star"></i>`;
        }
    })
    return `<span>${html}</span>`;
}

// this function generates each bookmark with a class called hidden so at first the view only shows a condensed view of the bookmark info, then by clicking expand it will remove the class of hidden and show the full bookmark. 
const generateBookItem = (item) => {

    return `<li class="bookmark-content" id="${item.id}">
        <h2>${item.title}</h2>
        ${generateRatingStars(item.rating)}<br>
        <div id="toggle" class='hidden'><p>Description: ${
          item.desc
        }</p><br><a href="${item.url}" target="_blank">Visit Site</a></div>
        <div class="buttons-menu">
            <button id='expand'>Expand</button>
            <button id='delete-btn'>Delete</button>
        </div>
    </li>`;
};

// this function is how I filter the stars. It looks at each bookmark in the store and returns all bookmarks with a rating equal to and above the rating. 
const getBookmarks = () => {
    if (store.filter > 0) {
        return store.store.filter((item) => item.rating >= store.filter);
    }
    return store.store;
}

// this function generates the list of bookmarks that are shown, it calls upon the get bookmark function and the generatebookmark function to return html that the render function uses. 
const generateList = () => {
    // this will generate the html for the bookmark list and will have all bookmark buttons inside of the container
    let listItems = ``;
    const bookmarksToDisplay = getBookmarks();
    bookmarksToDisplay.map((item) => {
      listItems += generateBookItem(item);
    });
    
    return `<div class='bookmark-container'>
        <ul class="bookmark-box">${listItems}</ul>
    </div>`;
}


// this function first checks if the boolean value in the store called showBookmarkForm is true or false, if false it returns an empty string, if true it returns html that allows a user to crate a new bookmark. 
const toggleBookmarkForm = () => {
    if (store.showBookmarkForm) {
      return `<div class="bookmark-form">
            <form id='add-item-form' action="">
                <div class="form-control">
                    <label for="title">Title</label>
                    <input required name="title" id="title" type="text" placeholder="Title" >
                </div>
                <div class="form-control">
                    <label for="url">URL</label>
                    <input required name="url" id="url" placeholder="Bookmark URL" type="url" />
                </div>
                <div class="form-control">
                    <label for="rating">Rating</label>
                    <select required name="rating" id="rating">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div class="form-control">
                    <label for="description">Rating</label>
                    <textarea required id="description" name="description" cols="30" rows="10"></textarea>
                </div>
                <div class="form-controls">
                    <button type="submit">Submit</button>
                    <button type="button" id='cancel-btn'>Cancel</button>
                </div>
            </form>
        </div>`;
    }
    return ``;
}


// this is my render function. It calls each of the ui generation functions above and creates a body of HTML to replace into the container box class. 
export const render = () => {
    const htmlToRender = `${generateHeader()}${toggleBookmarkForm()}${generateList()}`;
    $(".container-box").html(htmlToRender);
}
