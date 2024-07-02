document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'manuella' && password === '02072005') {
        window.location.href = 'text.html';
    } else {
        document.getElementById('errorMessage').textContent = 'Username ou senha incorretos!';
        document.getElementById('errorMessage').style.display = 'block';
    }
});
