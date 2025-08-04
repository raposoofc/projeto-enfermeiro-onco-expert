document.addEventListener('DOMContentLoaded', function() {
    /* ========================================================================== */
    /* MENU DE NAVEGAÇÃO                           */
    /* ========================================================================== */

    // Ancoragem suave para links internos
    const linksAncora = document.querySelectorAll('a[href^="#"]');
    linksAncora.forEach(link => {
        link.addEventListener('click', function(evento) {
            evento.preventDefault();
            const idAlvo = this.getAttribute('href');
            document.querySelector(idAlvo).scrollIntoView({
                behavior: 'smooth'
            });
            // Fecha o menu hamburguer após clicar em um link (apenas para mobile)
            const menuPrincipal = document.querySelector('.menu-principal');
            if (menuPrincipal.classList.contains('active')) {
                menuPrincipal.classList.remove('active');
            }
        });
    });

    // Funcionalidade do menu hambúrguer (mobile)
    const menuToggle = document.querySelector('.menu-toggle');
    const menuPrincipal = document.querySelector('.menu-principal');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuPrincipal.classList.toggle('active');
        });
    }


    /* ========================================================================== */
    /* SEÇÃO OFERTA / MÓDULOS                        */
    /* ========================================================================== */

    // Efeito de hover nos itens dos módulos
    const itensModulo = document.querySelectorAll('.item-modulo');
    itensModulo.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.boxShadow = '0 0 15px 2px var(--cor-destaque-azul)'; // Reajustar para a variável CSS se existir
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
        });
    });


    /* ========================================================================== */
    /* SEÇÃO PERGUNTAS FREQUENTES (FAQ)                */
    /* ========================================================================== */

    // Funcionalidade de expansão/colapso para o FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling; // Pega o elemento irmão seguinte (a resposta)

            // Fecha todas as outras respostas abertas
            faqQuestions.forEach(q => {
                const a = q.nextElementSibling;
                if (a !== answer && a.classList.contains('active')) {
                    a.classList.remove('active');
                    q.classList.remove('active');
                }
            });

            // Alterna a visibilidade da resposta clicada
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                question.classList.remove('active');
            } else {
                answer.classList.add('active');
                question.classList.add('active');
            }
        });
    });


    /* ========================================================================== */
    /* BOTÃO FLUTUANTE DO WHATSAPP                        */
    /* ========================================================================== */

    // Funcionalidade do botão flutuante e pop-up do WhatsApp
    const whatsappButton = document.getElementById('whatsapp-button');
    const whatsappPopup = document.getElementById('whatsapp-popup');
    const whatsappPopupClose = document.querySelector('.whatsapp-popup-close');
    const whatsappPopupLink = document.querySelector('.botao-whatsapp-popup-link');

    // Abre o pop-up ao clicar no botão flutuante
    whatsappButton.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o redirecionamento padrão do link
        whatsappPopup.classList.add('active'); // Adiciona a classe 'active' para mostrar o pop-up com transição
    });

    // Fecha o pop-up ao clicar no 'X'
    whatsappPopupClose.addEventListener('click', function() {
        whatsappPopup.classList.remove('active'); // Remove a classe 'active' para esconder o pop-up com transição
    });

    // Fecha o pop-up ao clicar fora do conteúdo (no overlay)
    whatsappPopup.addEventListener('click', function(event) {
        if (event.target === whatsappPopup) { // Verifica se o clique foi diretamente no overlay do pop-up
            whatsappPopup.classList.remove('active');
        }
    });

    // Fecha o pop-up ao clicar no link de "Falar com atendente"
    whatsappPopupLink.addEventListener('click', function() {
        whatsappPopup.classList.remove('active');
    });
});