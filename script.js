// Base URL for the JSONPlaceholder API
const apiUrl = 'http://jsonplaceholder.typicode.com';

// Reference to the HTML element where the results will be displayed
const resultDiv = document.getElementById('result');

// Function to clear previous results from the resultDiv
function clearResult() {
    resultDiv.innerHTML = '';
}

// Function to fetch and display all posts
async function getAllPosts() {
    // Clear previous results
    clearResult();
    try {
        // Send a GET request to fetch all posts
        const response = await fetch(`${apiUrl}/posts`);
        // Parse the JSON response
        const data = await response.json();
        // Display the result in a readable format
        resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        // Log any errors to the console
        console.error('Error:', error);
    }
}

// Function to fetch and display the post with ID 10
async function getPostById() {
    // Clear previous results
    clearResult();
    try {
        // Send a GET request to fetch the post with ID 10
        const response = await fetch(`${apiUrl}/posts/10`);
        // Parse the JSON response
        const data = await response.json();
        // Display the result in a readable format
        resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        // Log any errors to the console
        console.error('Error:', error);
    }
}

// Function to create a new post and log the generated ID
async function createNewPost() {
    // Clear previous results
    clearResult();
    try {
        // Send a POST request to create a new post
        const response = await fetch(`${apiUrl}/posts`, {
            method: 'POST', // Specify the HTTP method
            headers: {
                'Content-Type': 'application/json' // Set the content type to JSON
            },
            // Convert the post data to a JSON string and include in the request body
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            })
        });
        // Parse the JSON response
        const data = await response.json();
        // Display the generated ID of the new post
        resultDiv.innerHTML = `<p>New post created with ID: ${data.id}</p>`;
    } catch (error) {
        // Log any errors to the console
        console.error('Error:', error);
    }
}

// Function to replace the post with ID 12 and display the response
async function replacePost() {
    // Clear previous results
    clearResult();
    try {
        // Send a PUT request to replace the post with ID 12
        const response = await fetch(`${apiUrl}/posts/12`, {
            method: 'PUT', // Specify the HTTP method
            headers: {
                'Content-Type': 'application/json' // Set the content type to JSON
            },
            // Convert the replacement post data to a JSON string and include in the request body
            body: JSON.stringify({
                id: 12,
                title: 'replaced title',
                body: 'replaced body',
                userId: 1
            })
        });
        // Parse the JSON response
        const data = await response.json();
        // Display the response in a readable format
        resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        // Log any errors to the console
        console.error('Error:', error);
    }
}

// Function to update the title of the post with ID 12 and display the response
async function updatePostTitle() {
    // Clear previous results
    clearResult();
    try {
        // Send a PATCH request to update the title of the post with ID 12
        const response = await fetch(`${apiUrl}/posts/12`, {
            method: 'PATCH', // Specify the HTTP method
            headers: {
                'Content-Type': 'application/json' // Set the content type to JSON
            },
            // Convert the updated title to a JSON string and include in the request body
            body: JSON.stringify({
                title: 'updated title'
            })
        });
        // Parse the JSON response
        const data = await response.json();
        // Display the response in a readable format
        resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        // Log any errors to the console
        console.error('Error:', error);
    }
}

// Function to delete the post with ID 12 and display a success message
async function deletePost() {
    // Clear previous results
    clearResult();
    try {
        // Send a DELETE request to delete the post with ID 12
        await fetch(`${apiUrl}/posts/12`, {
            method: 'DELETE' // Specify the HTTP method
        });
        // Display a success message
        resultDiv.innerHTML = `<p>Post with ID 12 deleted successfully.</p>`;
    } catch (error) {
        // Log any errors to the console
        console.error('Error:', error);
    }
}

