// .fetch...catch
const url = "https://jsonplaceholder.typicode.com/posts"

const fetchPosts = () => {
    fetch(url)
        .then((response) => response.json())
        .catch((err) => err)
}


fetchPosts()

