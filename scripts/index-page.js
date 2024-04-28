const comments = [
    {
        name: "Victor Pinto",
        review: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        timestamp: 1698957000000,
    },
    {
        name: "Christina Cabrera",
        review: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        timestamp: 1698525090000,
    },
    {
        name: "Isaac Tadesse",
        review: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        timestamp: 1697841090000,
    },
];

console.table(comments);

const commentList = document.querySelector(".comment-list");
const commentForm = document.querySelector(".comment-form");

function loopThroughComments() {
    commentList.innerText = "";
  
    for (let i = 0; i < comments.length; i++) {
      const commentItem = document.createElement("li");
      commentItem.classList.add("comment-list__item");

      // const commentAvatarBlank = document.createElement("div");
      // commentAvatarBlank.classList.add("comment-list__avatar-blank");
  
      const commentName = document.createElement("h3");
      commentName.innerText = comments[i].name;
      commentName.classList.add("comment-list__name");
  
      const commentDateCreated = document.createElement("p");
      commentDateCreated.innerText = new Date(comments[i].timestamp).toLocaleDateString();
      commentDateCreated.classList.add("comment-list__timestamp");

      const commentReview = document.createElement("p");
      commentReview.innerText = comments[i].review;
      commentReview.classList.add("comment-list__review");

      // commentItem.appendChild(commentAvatarBlank);  
      commentItem.appendChild(commentName);
      commentItem.appendChild(commentDateCreated);
      commentItem.appendChild(commentReview);
      commentList.appendChild(commentItem);
    }
  }

  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const commentName = event.target.name.value;
    const commentReview = event.target.review.value;
  
    const newCommentItem = {
      name: commentName,
      review: commentReview,
      timestamp: Date.now(),
    };
    comments.unshift(newCommentItem);
    loopThroughComments();
  
    event.target.reset();
  });
  
  loopThroughComments();
  