const comments = [
    {
        name: "Victor Pinto",
        review: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        timestamp: 1698957000000, // 11/02/2023
    },
    {
        name: "Christina Cabrera",
        review: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        timestamp: 1698525090000, // 10/28/2023
    },
    {
        name: "Isaac Tadesse",
        review: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        timestamp: 1697841090000, // 10/28/2023
    },
];

console.table(comments);

const commentList = document.querySelector(".comment-list"); // <ul>
const commentForm = document.querySelector(".comment-form"); // <form>

function loopThroughComments() {
    commentList.innerText = ""; // clears out the <ul> before appending new list items
  
    // here you could sort the comments array by timestamp before looping and appending to the DOM
  
    for (let i = 0; i < comments.length; i++) {
      // console.log(comments[i]);
      // create list item
      const commentItem = document.createElement("li");
      commentItem.classList.add("comment-list__item");
  
      // add <h3> element for comment name
      const commentName = document.createElement("h3");
      commentName.innerText = comments[i].name;
      commentName.classList.add("comment-list__name");
  
      // add <p> element for comment timestamp
      const commentDateCreated = document.createElement("p");
      commentDateCreated.innerText = new Date(
        comments[i].timestamp
      ).toLocaleDateString();
      commentDateCreated.classList.add("comment-list__timestamp");

      // add <p> element for comment review
      const commentReview = document.createElement("p");
      commentReview.innerText = comments[i].review;
      commentReview.classList.add("comment-list__review");
      // commentReview.style.border = "1px solid red"; // you don't have to style this way, just use a class like above and use scss
  
  
      commentItem.appendChild(commentName); // append <h3> name to <li>
      commentItem.appendChild(commentDateCreated); // append <p> timestamp to <li>
      commentItem.appendChild(commentReview); // append <p> review to <li>
      commentList.appendChild(commentItem); // append the list item to the commentList <ul>
    }
  }

  commentForm.addEventListener("submit", function (event) {
    event.preventDefault(); // keeps the page from reloading when the form submits
    // console.log("form submitted", event.target.name, event.target.review);
    const commentName = event.target.name.value;
    const commentReview = event.target.review.value;
    // console.log(commentName);
    // console.log(commentReview);
  
    // not shown here however you can check inputs if they are empty and not add a new comment item if emtpy, see diving deeper for form validation
  
    const newCommentItem = {
      name: commentName,
      review: commentReview,
      timestamp: Date.now(), // get the current time as a timestamp
    };
    comments.unshift(newCommentItem); // adds to the start of the array, another way would be to use a sort method by timestamp
    loopThroughComments(); // call loop and append function again after adding to comments array
  
    // reset form inputs, event.target is the <form>
    event.target.reset();
  });
  
  loopThroughComments(); // runs when the page loads
  