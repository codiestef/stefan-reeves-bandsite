

class BandSiteApi {
    constructor(apiKey){
        this.baseURL = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
        this.apiKey = apiKey;
    }
    async getComments(){
        const response = await axios.get(`${this.baseURL}/comments?api_key=${this.apiKey}`);
        response.data.sort(function(a, b){
            return b.timestamp - a.timestamp;
        });

        return response.data;
    }

    async postComment(newComment){
        const response = await axios.post(`${this.baseURL}/comments?api_key=${this.apiKey}`, newComment);
        return response.data;
    }
}

const commentApi = new BandSiteApi("2491824a-7c92-4e17-a0c9-5cef7929cf54");

console.log(commentApi);

const commentListElement = document.querySelector(".comment-list");
const commentFormElement = document.querySelector(".comment-form");

commentFormElement.addEventListener("submit", async function(event){
    event.preventDefault();
    console.log("form submitted");

    console.log(event.target.commentName.value)
    console.log(event.target.commentReview.value);

    const newComment = {
        name: event.target.commentName.value,
        comment: event.target.commentReview.value
    }

    const response = await commentApi.postComment(newComment);
    console.log(response);
    getCommentsAndAppendToDom();

});



async function getCommentsAndAppendToDom(){
    const comments = await commentApi.getComments();
    console.log(comments);

    commentListElement.innerText = '';

    comments.forEach(function(comment){
        console.log(comment);

        const commentItem = document.createElement('li');
        commentItem.classList.add("comment-list__item")

        const commentName = document.createElement('h3');
        commentName.innerText = comment.name;
        commentName.classList.add("comment-list__name");

        const commentDateCreated = document.createElement('p');
        commentDateCreated.innerText = new Date(comment.timestamp).toLocaleDateString();
        commentDateCreated.classList.add("comment-list__timestamp");

        const commentReview = document.createElement('p');
        commentReview.innerText = comment.comment;
        commentReview.classList.add("comment-list__review");


        commentItem.appendChild(commentName);
        commentItem.appendChild(commentDateCreated);
        commentItem.appendChild(commentReview);

        commentListElement.appendChild(commentItem)

    });
}

getCommentsAndAppendToDom();