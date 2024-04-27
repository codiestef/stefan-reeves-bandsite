// const apiKey = "2491824a-7c92-4e17-a0c9-5cef7929cf54";

// async function getReviews(){
//     const response = await axios.get(`https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=${apiKey}`);
//     console.log(response);
    // // use response.data, which is an array of data, to loop and append elements to the DOM
// }

// getReviews();

class ReviewApi {
    constructor(apiKey){
        this.baseURL = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
        this.apiKey = apiKey;
    }
    async getReviews(){
        const response = await axios.get(`${this.baseURL}/comments?api_key=${this.apiKey}`);
        // console.log(response);
        return response.data; // array of reviews
    }
}

const reviewApi = new ReviewApi("2491824a-7c92-4e17-a0c9-5cef7929cf54");

// console.log(reviewApi);
// reviewApi.getReviews();

async function getReviewsAndAppendToDom(){
    const reviews = await reviewApi.getReviews();
    console.log(reviews);

    reviews.forEach(function(review){
        console.log(review)
    });
}

getReviewsAndAppendToDom();