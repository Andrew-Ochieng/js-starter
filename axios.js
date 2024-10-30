const apiUrl = 'http://localhost:3000/posts';

        // READ - GET all posts
        const fetchPosts = async () => {
            try {
                const response = await axios.get(apiUrl);
                const posts = response.data;

                let output = '';
                posts.forEach((post) => {
                    output += `
                        <li>
                            <strong>${post.title}</strong>: ${post.body}
                            <button onclick="updatePost(${post.id})">Edit</button>
                            <button onclick="deletePost(${post.id})">Delete</button>
                        </li>
                    `;
                });
                document.getElementById('posts').innerHTML = `<ul>${output}</ul>`;
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();

        // CREATE - POST a new post
        const createPost = async (event) => {
            event.preventDefault();
            const title = document.getElementById('post-title').value;
            const body = document.getElementById('post-body').value;

            try {
                const response = await axios.post(apiUrl, { title, body });
                console.log('Created:', response.data);

                fetchPosts();  // Refresh the list after creating a new post
            } catch (error) {
                console.error('Error creating post:', error);
            }
        };

        // UPDATE - PUT request to update a post
        const updatePost = async (id) => {
            const title = prompt('Enter new title');
            const body = prompt('Enter new body');
            if (!title || !body) return;

            try {
                const response = await axios.put(`${apiUrl}/${id}`, { title, body });
                console.log('Updated:', response.data);

                fetchPosts();  // Refresh the list after updating
            } catch (error) {
                console.error('Error updating post:', error);
            }
        };

        // DELETE - DELETE request to remove a post
        const deletePost = async (id) => {
            try {
                await axios.delete(`${apiUrl}/${id}`);
                console.log(`Post ${id} deleted`);

                fetchPosts();  // Refresh the list after deletion
            } catch (error) {
                console.error('Error deleting post:', error);
            }
        };