/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here
var facebookProfile = {
  name: "Kristy",
  friends: 20,
  messages: ["Message 1", "Message 2", "Message 3"],
  postMessage: function(message) {
      //adds a new message string to the array
      if (message) {
          facebookProfile.messages.push(message);
      } else {
          console.log("Your message cannot be empty!");
      }
      return facebookProfile.messages[facebookProfile.messages.length - 1];
  },
  deleteMessage: function(index) {
      //removes the message corresponding to the index provided
      if (index !== undefined) {
          facebookProfile.messages.splice(index, 1);
      } else {
          console.log("You must provide the index of the message you want to delete!");
      }
      return facebookProfile.messages;
  },
  addFriend: function() {
      //increases the friend count by 1
      facebookProfile.friends++
      return facebookProfile.friends;
  },
  removeFriend: function() {
      //decreases the friend count by 1
      facebookProfile.friends--
      return facebookProfile.friends;
      
  }
}

facebookProfile.postMessage("My new message Kristy Hey");
facebookProfile.deleteMessage();
facebookProfile.addFriend();
facebookProfile.removeFriend();

console.log(facebookProfile);