document.addEventListener('DOMContentLoaded', function() {
    const linksAncora = document.querySelectorAll('a[href^="#"]');
    linksAncora.forEach(link => {
        link.addEventListener('click', function(evento) {
            evento.preventDefault();
            const idAlvo = this.getAttribute('href');
            document.querySelector(idAlvo).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const itensModulo = document.querySelectorAll('.item-modulo');
    itensModulo.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.boxShadow = '0 0 15px 2px var(--cor-destaque-azul)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
        });
    });

    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                question.classList.remove('active');
            } else {
                faqQuestions.forEach(q => {
                    const a = q.nextElementSibling;
                    a.classList.remove('active');
                    q.classList.remove('active');
                });
                answer.classList.add('active');
                question.classList.add('active');
            }
        });
    });

    const whatsappButton = document.getElementById('whatsapp-button');
    const whatsappPopup = document.getElementById('whatsapp-popup');
    const whatsappPopupClose = document.querySelector('.whatsapp-popup-close');
    const whatsappPopupLink = document.querySelector('.botao-whatsapp-popup-link');

    whatsappButton.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o redirecionamento padrão do link
        // Adiciona a classe 'active' para mostrar o pop-up com transição
        whatsappPopup.classList.add('active');
    });

    whatsappPopupClose.addEventListener('click', function() {
        // Remove a classe 'active' para esconder o pop-up com transição
        whatsappPopup.classList.remove('active');
    });

    whatsappPopup.addEventListener('click', function(event) {
        // Se clicar fora do conteúdo do pop-up (no overlay), fecha o pop-up
        if (event.target === whatsappPopup) {
            whatsappPopup.classList.remove('active');
        }
    });

    whatsappPopupLink.addEventListener('click', function() {
        // Ao clicar no link de "Falar com atendente", fecha o pop-up
        whatsappPopup.classList.remove('active');
    });
});