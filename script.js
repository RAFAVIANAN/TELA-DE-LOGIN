document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validação simples (substitua com a lógica real de autenticação)
    if (username === 'usuario' && password === 'senha') {
        alert('Login bem-sucedido!');
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos.';
    }
});
