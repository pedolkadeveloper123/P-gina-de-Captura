document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('captureForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();

        if (name && email) {
            // Simular um envio bem-sucedido
            message.textContent = 'Obrigado por se inscrever, ' + name + '!';
            message.style.color = '#28a745';

            // Resetar o formulário
            form.reset();
        } else {
            message.textContent = 'Por favor, preencha todos os campos.';
            message.style.color = '#dc3545';
        }
    });
});
