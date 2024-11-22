// Simulated database
const users = [
    { username: 'admin', password: 'admin123', flag: 'FLAG{SQL_INJECTION_SUCCESS}' },
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

const comments = [];

// Simulate SQL Injection vulnerability
function searchUser() {
    const searchInput = document.getElementById('search').value;
    const resultDiv = document.getElementById('searchResult');

    // Simulate a more complex query check
    const user = users.find(user => searchInput.includes(user.username) && searchInput.includes(user.password));

    if (user) {
        resultDiv.innerHTML = `User found: ${user.username}`;
        if (user.flag) {
            resultDiv.innerHTML += `<br>Flag: ${user.flag}`;
        }
    } else {
        resultDiv.innerHTML = 'User not found';
    }
}

// Simulate XSS vulnerability
function postComment() {
    const commentInput = document.getElementById('comment').value;
    comments.push(commentInput);
    displayComments();
}

function displayComments() {
    const commentsSection = document.getElementById('commentsSection');
    commentsSection.innerHTML = comments.map(comment => `<p>${comment}</p>`).join('');
}
