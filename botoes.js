
const toggleButtons = document.querySelectorAll('.toggleButton');


toggleButtons.forEach(botao => {
    botao.addEventListener('click', function() {
        const textoVisivel = this.nextElementSibling;
        if (textoVisivel.style.display === 'none') {
            textoVisivel.style.display = 'block';
            this.textContent = 'Ver Menos';
        } else {
            textoVisivel.style.display = 'none';
            this.textContent = 'Ver Mais';
        }
    });
});
