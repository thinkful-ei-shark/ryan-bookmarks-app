import store from "./store";
import { render } from "./ui";

// these are constants that I use to call the API
const BASE_URL = 'https://thinkful-list-api.herokuapp.com';
const USER = 'ryan'


// this is the base api function that i use to make fetch request
const apiCall = (options = { method: 'GET' }) => {
  return fetch(`${BASE_URL}/${USER}/bookmarks`, options)
    .then((response) => {
      if (response.status >= 400 && response.status < 600) {
        throw new Error("Bad response from server");
      }
      return response;
    })
    .then((returnedResponse) => {
      // this is the returned message
      return returnedResponse.json();
    })
    .catch((error) => {
      throw new TypeError('this is an error', error)
      // Your error is here!
    });
};


// this function calls the API and returns an object that is all of the data regarding the request
export function getBookmark(){
  apiCall().then(data => {
    store.store = data;
    render();
  });
}

// this function adds bookmarks to the api data store
export function addBookmarkApi(title, url, desc, rating){
  return apiCall({
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, url, desc, rating })
  });
}

//this function calls the API and does a DELETE method to remove the object in the data store
export function deleteBookmark(id) {
  return fetch(`${BASE_URL}/${USER}/bookmarks/${id}`, {
    method: "DELETE",
  });
};

