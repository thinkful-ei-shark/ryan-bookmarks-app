const generateHeader = () => `<section class='menu-box'>
    <button type="button" id="add-bookmark-form">new bookmark</button>
    <select name="filter" id="filter-items">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</section>`;


const generateBookItem = (item) => {

    return `<li class="bookmark-content">
        <h2>${item.title}</h2>
        <span>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
        </span><br>
        <span>Description</span><br>
        <span>Description</span><br>
        <div class="buttons-menu">
            <button>Collapse</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </li>`;
};

const generateList = () => {
// this will generate the html for the bookmark list and will have all bookmark buttons inside of the container
    let listItems = ``;
    [].map(item => {
        listItems += generateBookItem(item)
    })
    return `<div class='bookmark-container'>
            <ul class="bookmark-box">${listItems}</ul>
        </div>`;
}

const toggleBookmarkForm = () => {
    if (true) {
      //store.showBookMarkForm
      return `<div class="bookmark-form">
            <form action="">
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
                    <button type="button">Cancel</button>
                </div>
            </form>
        </div>`;
    }
    return null;
}

export const render = () => {
    const htmlToRender = `${generateHeader()}${toggleBookmarkForm()}${generateList()}`;
    $(".container-box").html(htmlToRender);
}