// Start - Shake Animation

function addShakeAnimation() {
    const elementos = document.querySelectorAll('.is-shaking');
    elementos.forEach(elemento => {
        elemento.style.animation = 'shake 1s';
        setTimeout(() => {
            elemento.style.animation = '';
        }, 1000);
    });
}

setInterval(addShakeAnimation, 3000);

//End - Shake Animation


// Dropdow animation

// Seleciona todos os elementos com a classe 'action-btn'
var buttons = document.querySelectorAll(".action-btn");

// Adiciona um ouvinte de evento de clique para cada botão
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Seleciona a resposta associada ao botão clicado
        var resposta;
        if (this.tagName === 'I') {
            // Se for um ícone, procure a resposta no próximo irmão do pai
            resposta = this.closest('tr').querySelector('.resposta');
        } else {
            // Se for o h5, procure a resposta no próximo irmão
            resposta = this.nextElementSibling;
        }

        // Alterna a exibição da resposta
        if (resposta.style.display === "none") {
            resposta.style.display = "block";
        } else {
            resposta.style.display = "none";
        }
    });
});