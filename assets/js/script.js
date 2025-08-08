/* ==================================================
   1. GERAL — DOM READY
================================================== */
document.addEventListener('DOMContentLoaded', function() {

/* ==================================================
    2. MENU DE NAVEGAÇÃO (hambúrguer + âncoras)
=================================================== */

    // Ancoragem suave para links internos
    const linksAncora = document.querySelectorAll('a[href^="#"]');
    linksAncora.forEach(link => {
        link.addEventListener('click', function(evento) {
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
        menuToggle.addEventListener('click', function() {
            menuPrincipal.classList.toggle('active');
        });
    }

/* ==================================================
   3. SEÇÃO CONTEÚDO — EXPANSÃO DOS MÓDULOS
=================================================== */

    // function setupCardExpansion() {
    //     const cards = document.querySelectorAll('.lista-modulos .item-modulo');
    //     cards.forEach(card => {
    //         const expandArrow = card.querySelector('.expand-arrow');
    //         if (!expandArrow) return;

    //         expandArrow.addEventListener('click', () => {
    //             const isActive = card.classList.contains('active');

    //             // Fecha todos os cards
    //             cards.forEach(c => c.classList.remove('active'));

    //             // Se não estava ativo, ativa o atual
    //             if (!isActive) {
    //                 card.classList.add('active');
    //             }
    //         });
    //     });
    // }

    // setupCardExpansion();

    
/* ==================================================
    4. SEÇÃO MÓDULOS (CARROSSEL)
=================================================== */
    const wrapper = document.querySelector('.carrossel-wrapper-novo');
    const cards = document.querySelectorAll('.carrossel-card-novo');
    const numCards = cards.length;
    const intervalTime = 3000; // Intervalo para o movimento automático
    let carrosselInterval;

    // Duplica os cards para criar o efeito de loop infinito
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        wrapper.appendChild(clone);
    });

    // O número total de cards agora é o dobro
    const allCards = document.querySelectorAll('.carrossel-card-novo');

    let currentIndex = 0;

    // Função que move o carrossel
    function moveCarrossel() {
        const cardWidth = allCards[0].offsetWidth;
        const transformValue = -currentIndex * cardWidth;
        wrapper.style.transform = `translateX(${transformValue}px)`;
        updateCardStates();
    }

    // Função que atualiza o estado (ativo/escuro) dos cards
    function updateCardStates() {
        allCards.forEach((card, index) => {
            // O card central é o que está no índice atual + 1
            if (index === currentIndex + 1) {
                card.classList.add('ativo');
            } else {
                card.classList.remove('ativo');
            }
        });
    }

    // Função para o movimento automático para a esquerda
    function autoMove() {
        currentIndex++;
        
        // A lógica de reset foi ajustada aqui
        if (currentIndex >= numCards) {
            // Aguarda o fim da animação atual
            setTimeout(() => {
                wrapper.style.transition = 'none'; // Desabilita a transição
                currentIndex = 0; // Reseta para o Módulo 1
                moveCarrossel();
                
                // Habilita a transição novamente
                setTimeout(() => {
                    wrapper.style.transition = 'transform 0.8s ease-in-out';
                }, 50);
            }, 800); // Deve ser igual ao tempo de transição do CSS
        } else {
            moveCarrossel();
        }
    }

    // Inicia o movimento automático
    function startAutoMove() {
        stopAutoMove(); // Garante que não haja múltiplos intervalos
        carrosselInterval = setInterval(autoMove, intervalTime);
    }

    // Para o movimento automático
    function stopAutoMove() {
        clearInterval(carrosselInterval);
    }

    // Eventos para pausar e retomar a animação
    wrapper.addEventListener('mouseenter', stopAutoMove);
    wrapper.addEventListener('mouseleave', startAutoMove);

    // Eventos para o efeito de expansão e retração do card central
    wrapper.addEventListener('mouseenter', (event) => {
        const activeCard = wrapper.querySelector('.carrossel-card-novo.ativo');
        if (activeCard && activeCard.contains(event.target)) {
            activeCard.style.transform = 'scale(1.1)';
        }
    }, true);

    wrapper.addEventListener('mouseleave', () => {
        const activeCard = wrapper.querySelector('.carrossel-card-novo.ativo');
        if (activeCard) {
            activeCard.style.transform = 'scale(1.05)';
        }
    });

    // Inicializa o carrossel na posição correta e o movimento
    moveCarrossel();
    startAutoMove();
});
        
/* ==================================================
    5. SEÇÃO ZEUS
=================================================== */

    document.addEventListener('DOMContentLoaded', function() {
    const secaoZeus = document.getElementById('secao-zeus');
    const zeusHeader = document.querySelector('.zeus-header');
    
    zeusHeader.addEventListener('click', function() {
        secaoZeus.classList.toggle('expandida');
    });
});

/* ==================================================
    6. SEÇÃO FAQ — PERGUNTAS FREQUENTES
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
    7. BOTÃO FLUTUANTE DO WHATSAPP
=================================================== */

    const whatsappButton      = document.getElementById('whatsapp-button');
    const whatsappPopup       = document.getElementById('whatsapp-popup');
    const whatsappPopupClose  = document.querySelector('.whatsapp-popup-close');
    const whatsappPopupLink   = document.querySelector('.botao-whatsapp-popup-link');

    // Abre o pop-up
    whatsappButton.addEventListener('click', function(event) {
        event.preventDefault();
        whatsappPopup.classList.add('active');
    });

    // Fecha ao clicar no "X"
    whatsappPopupClose.addEventListener('click', function() {
        whatsappPopup.classList.remove('active');
    });

    // Fecha ao clicar fora do conteúdo (overlay)
    whatsappPopup.addEventListener('click', function(event) {
        if (event.target === whatsappPopup) {
            whatsappPopup.classList.remove('active');
        }
    });

    // Fecha ao clicar no botão de falar com atendente
    whatsappPopupLink.addEventListener('click', function() {
        whatsappPopup.classList.remove('active');
    });

/* ==================================================
    0. RESERVADO PARA FUTURAS FUNCIONALIDADES
=================================================== */