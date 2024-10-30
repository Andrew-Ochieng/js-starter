// const posts = [
//     {title: "Post one", body: "This is post one"},
//     {title: "Post two", body: "This is post two"},
//     {title: "Post three", body: "This is post three"},
//     {title: "Post four", body: "This is post four"},
//     {title: "Post five", body: "This is post five"}, 
// ]

// const { default: axios } = require("axios");
const apiUrl = "http://localhost:3000/posts"

function getPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post) => {
            output += `
                <li>${post['title']} ${post.body}</>
            `
        })
        document.getElementById('posts').innerHTML = output
        // document.body.innerHTML = output
    }, 1000);
}

// getPosts()



// function createPosts(post) {
//     setTimeout(() => {
//        posts.push(post)
//     //    callback()
//     }, 2000);
// }

// createPosts({title: "Post six", body: "This is post six"}, getPosts)



// function createPosts(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post)

//             const error = false

//             if (!error) {
//                 resolve()
//             } else {
//                 reject('Error: something went wrong')
//             }
            
//         }, 2000);
//     })
// }

// createPosts({title: "Post six", body: "This is post six"})
//     .then(getPosts)
//     .catch((err) => console.log(err))


// async await
// async function asyncFunc() {
//     try {
//         await createPosts({title: "Post six", body: "This is post six"})

//         getPosts()
//     } catch (error) {
//         console.log(error)
//     }
// }

// asyncFunc()



// fetch posts
const fetchPosts = async () => {
    try {
        const res = await fetch(apiUrl).then((res) => res.json())
        // console.log(res)
        let output = []
        res && res.forEach((post) => {
            output += `
                <li>${post['title']} ${post.body}</>
            `
        })
        document.getElementById('posts').innerHTML = output
    } catch (error) {
        console.log(error) 
    }
}



const createPost = async (event) => {
    event.preventDefault()

    const title = document.getElementById('post-title').value
    const body = document.getElementById('post-body').value

    try {
        const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title, body})
        })
        const data = await res.json()
        console.log(data)

        // fetchPosts();
    } catch (error) {
        console.log(error)
    }

}



const updatePost = (id) => {
    const title = prompt('Enter post title')
    const body = prompt('Enter post body')


    
}











fetchPosts()





