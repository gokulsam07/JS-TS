// Function to fetch user data
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        // Simulate fetching user data from an API
        setTimeout(() => {
            const userData = { id: userId, name: "John Doe", email: "john@example.com" };
            //console.log("Fetched user data:", userData);
            if(userData.id>122) reject(userData);
            resolve(userData);
        }, 1000);
    });
}

// Function to fetch posts for a given user ID
function fetchPosts(userId) {
    return new Promise((resolve, reject) => {
        // Simulate fetching posts from an API
        setTimeout(() => {
            const posts = ["Post 1", "Post 2", "Post 3"];
           // console.log("Fetched posts for user", userId, ":", posts);
            if(userId>=120)resolve(posts);
            else reject(new Error("Post or user doesn't exist"));
        }, 1500);
    });
}

// Chain promises to fetch user data and then fetch posts
fetchUserData(100)
    .then(userData => {
        return fetchPosts(userData.id); // Chain the promise to fetch posts using user ID
    })
    .then(posts => {
        console.log("All posts:",posts);
    })
    .catch(error => {
        console.error("Error:", error);
    });


    //if any error occurs in first promise, the nearest exisiting catch block will handle the error