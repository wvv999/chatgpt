// Seleciona todos os botões da navbar
const buttons = document.querySelectorAll('.nav-btn');

// Adiciona evento de clique em cada botão
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove a classe 'active' de todos os slides
    document.querySelectorAll('.slide').forEach(slide => {
      slide.classList.remove('active');
    });

    // Adiciona a classe 'active' ao slide correspondente
    const slideId = button.getAttribute('data-slide');
    document.getElementById(`slide-${slideId}`).classList.add('active');
  });
});

// Exibe o primeiro slide inicialmente
document.getElementById('slide-1').classList.add('active');
