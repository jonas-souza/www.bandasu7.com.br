// Hamburger Menu
document.getElementById('hamburger').addEventListener('click', function() {
    const navbarLinks = document.getElementById('navbar-links');
    if (navbarLinks.style.display === 'flex') {
        navbarLinks.style.display = 'none';
    } else {
        navbarLinks.style.display = 'flex';
    }
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Formulário de Contato - Validação Simples
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
});


// Função para aplicar a transição suave
function applySmoothTransition() {
    document.body.classList.add('fade'); // Adiciona a classe que inicia o fade-out
}

// Função para gerenciar os links e adicionar a animação de saída
function handlePageTransitions() {
    const links = document.querySelectorAll('a'); // Seleciona todos os links

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            if (link.href.includes('#')) return; // Ignora links de âncora internos

            event.preventDefault(); // Evita o comportamento padrão do link
            const targetUrl = link.href; // Guarda o URL do link

            applySmoothTransition(); // Inicia a transição

            setTimeout(() => {
                window.location.href = targetUrl; // Redireciona para a nova página após a transição
            }, 500); // Tempo da transição em milissegundos
        });
    });
}

// Aplica a transição suave ao carregar a página
window.addEventListener('DOMContentLoaded', handlePageTransitions);
