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

    // Vulnerable to SQL Injection-like attack
    const user = users.find(user => user.username === searchInput);

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
