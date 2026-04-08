// este campo está em "inserir código" para "Funções javascript" do formulário de abertura do "ANTEPROJETO"

// Nome da Função: criarBotaoAjuda
// Executar função ao carregar formulário? SIM

if (!window.adicionarAjuda) {
    // Insere o CSS no documento
    (function adicionarCssAjuda() {
        if (document.getElementById("css-ajuda")) return; // evita duplicação
 
        const style = document.createElement("style");
        style.id = "css-ajuda";
        style.textContent = `
        /* =========================================================
           Estilos para o botão e popup de Ajuda
           ========================================================= */
 
        /* 🔹 Botão de Ajuda */
        .help-button {
            margin-left: 6px;
            padding: 1px 6px;
            font-size: 10px;
            font-weight: bold;
            line-height: 1.4;
            text-align: center;
            border: none;
            border-radius: 999px; /* formato "pílula" */
            background-color: #e6f0ff;
            color: #0056b3;
            cursor: pointer;
            display: inline-block;
            vertical-align: middle;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
            transition: background 0.3s ease, color 0.3s ease;
        }
 
        /* 🔹 Ícone do botão (ponto de interrogação) */
        .help-button .help-icon {
            background-color: #0056b3;
            color: white;
            border-radius: 50%;
            width: 14px;
            height: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            font-weight: bold;
            line-height: 1;
            margin-right: 3px;
            vertical-align: middle;
        }
 
        /* 🔹 Efeito Hover no botão */
        .help-button:hover {
            background: #007bff;
            color: #fff;
        }
 
        .help-button:hover .help-icon {
            background-color: #fff;
            color: #007bff;
        }
 
        /* =========================================================
           Overlay (backdrop) e popup
           ========================================================= */
 
        /* 🔹 Fundo escurecido atrás do popup */
        .backdrop-ajuda {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.3);
            display: none; /* exibido via JS */
            align-items: center;
            justify-content: center;
            z-index: 9998;
            transition: opacity 0.3s ease;
            opacity: 0;
        }
 
        /* 🔹 Container do popup */
        .popup-ajuda {
            background: #fff;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
            color: #444;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            position: relative;
            transform: scale(0.8); /* inicia reduzido (animado no JS) */
            transition: transform 0.3s ease, opacity 0.3s ease;
            opacity: 0;
            display: flex;
            flex-direction: column;
            max-width: 90vw;
        }
 
        /* 🔹 Título do popup */
        .popup-ajuda h3 {
            margin-top: 0;
            margin-bottom: 10px;
            color: #0056b3;
            font-weight: 600;
            font-size: 1.4em;
        }
 
        /* 🔹 Imagem exibida no popup */
        .popup-ajuda img {
            width: 700px;
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
        }
 
        /* 🔹 Botão "Fechar" (fixado no rodapé do popup) */
        .popup-ajuda .btn-fechar {
            padding: 8px 16px;
            border: none;
            background: #d9534f;
            color: white;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            font-size: 1em;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            transition: background 0.3s ease;
 
            margin-top: auto;       /* "empurra" o botão para baixo */
            align-self: flex-end;   /* alinha à direita */
        }
 
        .popup-ajuda .btn-fechar:hover {
            background: #c9302c;
        }`;
        document.head.appendChild(style);
    })();
 
    // 🔹 Função principal
    window.adicionarAjuda = function({ key, titulo, texto, imagem }) {
        const selector = `div[key="${key}"]`;
        let backdrop, popup;
 
        function inserirBotaoAjuda() {
            const container = document.querySelector(selector);
            if (!container) return;
 
            const oldBotao = container.querySelector('.help-button');
            if (oldBotao) oldBotao.remove();
 
            const botao = document.createElement('button');
            botao.type = 'button';
            botao.title = 'Ajuda';
            botao.classList.add('help-button');
 
            const icon = document.createElement('span');
            icon.classList.add('help-icon');
            icon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                <circle cx="12" cy="12" r="10" fill="#0056b3" stroke="#003f7f" stroke-width="1"/>
                <text x="12" y="16" text-anchor="middle" font-size="14" fill="#fff" font-family="Arial" font-weight="bold">?</text>
                </svg>`;
 
            const textoSpan = document.createElement('span');
            textoSpan.textContent = 'Ajuda';
 
            botao.appendChild(icon);
            botao.appendChild(textoSpan);
 
            const label = container.querySelector('label');
            if (label && label.nextSibling) {
                label.parentNode.insertBefore(botao, label.nextSibling);
            } else {
                container.appendChild(botao);
            }
 
            if (!backdrop) {
                backdrop = document.createElement('div');
                backdrop.id = `backdropAjuda-${key}`;
                backdrop.classList.add('backdrop-ajuda');
 
                popup = document.createElement('div');
                popup.id = `popupAjuda-${key}`;
                popup.classList.add('popup-ajuda');
 
                popup.innerHTML = `
                <h3>${titulo || ''}</h3>
                <p>${texto || ''}</p>
                ${imagem ? `<img src="${imagem}" alt="Exemplo">` : ''}
                <button class="btn-fechar">Fechar</button>`;
 
                backdrop.appendChild(popup);
                document.body.appendChild(backdrop);
 
                const btnFechar = popup.querySelector('.btn-fechar');
                btnFechar.addEventListener('click', fecharPopup);
                backdrop.addEventListener('click', fecharPopup);
                popup.addEventListener('click', e => e.stopPropagation());
            }
 
            function abrirPopup() {
                backdrop.style.display = 'flex';
                setTimeout(() => {
                    backdrop.style.opacity = '1';
                    popup.style.opacity = '1';
                    popup.style.transform = 'scale(1)';
                }, 10);
            }
 
            function fecharPopup() {
                popup.style.opacity = '0';
                popup.style.transform = 'scale(0.8)';
                backdrop.style.opacity = '0';
                setTimeout(() => {
                    backdrop.style.display = 'none';
                }, 300);
            }
 
            botao.onclick = abrirPopup;
        }
 
        const observer = new MutationObserver(() => {
            const container = document.querySelector(selector);
            if (container && !container.querySelector('.help-button')) {
                inserirBotaoAjuda();
            }
        });
 
        observer.observe(document.body, { childList: true, subtree: true });
        inserirBotaoAjuda();
    };
}
