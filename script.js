// Axel Cotón Gutiérrez Copyright 2024

document.addEventListener('DOMContentLoaded', () => {
    const preguntaEl = document.getElementById('pregunta');
    const imagenesEl = document.getElementById('imagenes-animales'); // Cambio de 'imagenes-ciclistas' a 'imagenes-animales'
    const resultadoEl = document.getElementById('resultado');
    const botones = {
        azul: document.getElementById('boton-azul'),
        rojo: document.getElementById('boton-rojo'),
        verde: document.getElementById('boton-verde')
    };
    const siguientePreguntaBtn = document.getElementById('siguiente-pregunta');

    let respuestaCorrecta;

    function cargarJuego() {
        const animales = ['perro', 'gato', 'tortuga']; // Cambio de 'ciclistas' a 'animales'
        animales.sort(() => Math.random() - 0.5);

        imagenesEl.innerHTML = animales.map(animal => `<img src="${animal}.png" alt="${animal}">`).join(''); // Cambio en el map de 'color' a 'animal'
        const preguntaAleatoria = ['primero', 'segundo', 'último'][Math.floor(Math.random() * 3)];
        preguntaEl.textContent = `¿Quién llegó ${preguntaAleatoria}?`;
        respuestaCorrecta = animales[preguntaAleatoria === 'primero' ? 0 : preguntaAleatoria === 'segundo' ? 1 : 2]; // Cambio en la lógica de selección

        resultadoEl.textContent = '';
    }

    Object.values(botones).forEach(boton => {
        boton.addEventListener('click', function() {
            const seleccionUsuario = this.textContent.toLowerCase();
            if (seleccionUsuario === respuestaCorrecta) {
                resultadoEl.textContent = '¡Correcto! Felicitaciones.';
                resultadoEl.style.color = "green";
            } else {
                resultadoEl.textContent = `Incorrecto, el correcto era ${respuestaCorrecta}. ¡Inténtalo de nuevo!`;
                resultadoEl.style.color = "red";
            }
        });
    });

    siguientePreguntaBtn.addEventListener('click', cargarJuego);

    cargarJuego();
});
// Navegaciòn"  
 
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');
        
    menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    });
  });