// READ - GET all posts
const fetchPosts = async () => {
    try {
        const res = await fetch('http://localhost:3000/posts')
        const data = await res.json()
        
        let output = []
        data && data.forEach((post) => {
            output += `
                <li>
                    <strong>${post.title}</strong>: ${post.body}
                    <button onclick="updatePost(${post.id})">Edit</button>
                    <button onclick="deletePost(${post.id})">Delete</button>
                </li>
            `
        })
        document.getElementById('posts').innerHTML = output
    } catch (error) {
        console.log(error) 
    }
}

fetchPosts()



 // CREATE - POST a new post
const createPost = async (event) => {
    event.preventDefault();
    const title = document.getElementById('post-title').value;
    const body = document.getElementById('post-body').value;

    try {
        const res = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, body })
        });
        const data = await res.json();
        console.log('Created:', data);

        fetchPosts();  // Refresh the list after creating a new post
    } catch (error) {
        console.log(error);
    }
};



// UPDATE - PUT request to update a post
const updatePost = async (id) => {
    const title = prompt('Enter new title');
    const body = prompt('Enter new body');
    if (!title || !body) return;

    try {
        const res = await fetch(`http://localhost:3000/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, body })
        });
        const data = await res.json();
        console.log('Updated:', data);

        fetchPosts();  // Refresh the list after updating
    } catch (error) {
        console.log(error);
    }
};


// updatePost()

// DELETE - DELETE request to remove a post
const deletePost = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/posts/${id}`, {
            method: 'DELETE'
        });
        if (res.ok) {
            console.log(`Post ${id} deleted`);
            fetchPosts();  // Refresh the list after deletion
        }
    } catch (error) {
        console.log(error);
    }
};




























// POST 
// const newPost =  {title: "Post six", body: "This is post six"}

// const createPosts = async () => {
//     try {
//         const res = fetch('http://localhost:3000/posts', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newPost)
//         }).then((res) => {
//             console.log(res)
//             return res.json()
//         })
//         console.log(res)
//     } catch (error) {
//         console.log(error)
//     }
// }


// createPosts()