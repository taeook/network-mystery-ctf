// Function to fetch the flag from a JSON file
function fetchFlag() {
    return fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Extract the flag from the JSON data
            return data.data.find(item => item.id === 3).value;
        })
        .catch(error => {
            console.error('Error fetching flag:', error);
            return null; // Return null if there's an error
        });
}

// Function to check the flag input by the user
function checkFlag() {
    const input = document.getElementById('flagInput').value;
    const result = document.getElementById('result');

    // Fetch the correct flag from the JSON file
    fetchFlag().then(correctFlag => {
        if (correctFlag && input === correctFlag) {
            result.textContent = 'Congratulations! You found the flag!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Incorrect flag. Try again!';
            result.style.color = 'red';
        }
    });
}
