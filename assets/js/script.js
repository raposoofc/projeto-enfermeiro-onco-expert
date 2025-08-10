/* ==================================================
   1. GERAL — DOM READY
================================================== */
document.addEventListener('DOMContentLoaded', function () {

    /* ==================================================
        2. MENU DE NAVEGAÇÃO (hambúrguer + âncoras)
    =================================================== */

    // Ancoragem suave para links internos
    const linksAncora = document.querySelectorAll('a[href^="#"]');
    linksAncora.forEach(link => {
        link.addEventListener('click', function (evento) {
            evento.preventDefault();
            const idAlvo = this.getAttribute('href');
            const menuItems = document.querySelector('.menu-items');
            const menuToggleIcon = document.querySelector('.menu-toggle i');

            document.querySelector(idAlvo).scrollIntoView({
                behavior: 'smooth'
            });

            // Fecha o menu hamburguer após clique (mobile)
            if (menuItems.classList.contains('active')) {
                menuItems.classList.remove('active');
                menuToggleIcon.classList.remove('fa-times');
                menuToggleIcon.classList.add('fa-bars');
            }
        });
    });

    // Toggle do menu mobile (hambúrguer)
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');
    if (menuToggle && menuItems) {
        menuToggle.addEventListener('click', function () {
            menuItems.classList.toggle('active');
            const icon = this.querySelector('i');
            if (menuItems.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // Ícone "X" para fechar
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }


    /* ==================================================
       3. SEÇÃO FAQ — PERGUNTAS FREQUENTES
    =================================================== */
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.faq-icon');

            // Fecha outras respostas abertas
            document.querySelectorAll('.faq-answer').forEach(ans => {
                if (ans !== answer && ans.style.display === 'block') {
                    ans.style.display = 'none';
                    ans.previousElementSibling.querySelector('.faq-icon').textContent = '+';
                }
            });

            // Alterna a resposta e o ícone da pergunta clicada
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.textContent = '+';
            } else {
                answer.style.display = 'block';
                icon.textContent = '-';
            }
        });
    });

    /* ==================================================
        4. BOTÃO FLUTUANTE DO WHATSAPP
    =================================================== */

    const whatsappButton = document.getElementById('whatsapp-button');
    const whatsappPopup = document.getElementById('whatsapp-popup');
    const whatsappPopupClose = document.querySelector('.whatsapp-popup-close');
    const whatsappPopupLink = document.querySelector('.botao-whatsapp-popup-link');

    // Abre o pop-up
    whatsappButton.addEventListener('click', function (event) {
        event.preventDefault();
        whatsappPopup.classList.add('active');
    });

    // Fecha ao clicar no "X"
    whatsappPopupClose.addEventListener('click', function () {
        whatsappPopup.classList.remove('active');
    });

    // Fecha ao clicar fora do conteúdo (overlay)
    whatsappPopup.addEventListener('click', function (event) {
        if (event.target === whatsappPopup) {
            whatsappPopup.classList.remove('active');
        }
    });

    // Fecha ao clicar no botão de falar com atendente
    whatsappPopupLink.addEventListener('click', function () {
        whatsappPopup.classList.remove('active');
    });

    /* ==================================================
        0. RESERVADO PARA FUTURAS FUNCIONALIDADES
    =================================================== */
});