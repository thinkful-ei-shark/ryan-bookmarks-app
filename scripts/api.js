import ui from "./ui";
import store from "./store"

// find out what apis they want us to use for this.


fetch("/charge/pay").then((response) => {
  if (response.status >= 400 && response.status < 600) {
    throw new Error("Bad response from server");
  }
  return response;
}).then((returnedResponse) => {
  // Your response to manipulate
}).catch((error) => {
  // Your error is here!
  console.log(error)
});
︀

export const submitBookmark = (values) => {

}
