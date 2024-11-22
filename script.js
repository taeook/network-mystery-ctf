function checkFlag() {
    const input = document.getElementById('flagInput').value;
    const result = document.getElementById('result');
    const correctFlag = 'CTF{IT&C_101_hidden_flag}'; // This is the flag users need to find

    if (input === correctFlag) {
        result.textContent = 'Congratulations! You found the flag!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Incorrect flag. Try again!';
        result.style.color = 'red';
    }
}

// Hidden flag logic
// The flag is hidden in the comments of this script file
// CTF{IT&C_101_hidden_flag}
