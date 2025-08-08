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
            document.querySelector(idAlvo).scrollIntoView({
                behavior: 'smooth'
            });

            // Fecha o menu hamburguer após clique (mobile)
            const menuPrincipal = document.querySelector('.menu-principal');
            if (menuPrincipal.classList.contains('active')) {
                menuPrincipal.classList.remove('active');
            }
        });
    });

    // Toggle do menu mobile (hambúrguer)
    const menuToggle = document.querySelector('.menu-toggle');
    const menuPrincipal = document.querySelector('.menu-principal');
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            menuPrincipal.classList.toggle('active');
        });
    }


    /* ==================================================
        3. SEÇÃO FAQ — PERGUNTAS FREQUENTES
    =================================================== */

    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;

            // Fecha todas as outras respostas abertas
            faqQuestions.forEach(q => {
                const a = q.nextElementSibling;
                if (a !== answer && a.classList.contains('active')) {
                    a.classList.remove('active');
                    q.classList.remove('active');
                }
            });

            // Alterna a atual
            question.classList.toggle('active');
            answer.classList.toggle('active');
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