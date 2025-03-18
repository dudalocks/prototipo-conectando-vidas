document.addEventListener("DOMContentLoaded", () => {
    // Validação do formulário de login
    const loginForm = document.querySelector(".login-container form");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;
            
            if (email === "" || senha === "") {
                alert("Por favor, preencha todos os campos.");
            } else {
                alert("Login realizado com sucesso!");
                window.location.href = "index.html";
            }
        });
    }

    const cadastroForm = document.querySelector(".cadastro-container form");
    if (cadastroForm) {
        cadastroForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const nome = document.getElementById("nome").value;
            const sobrenome = document.getElementById("sobrenome").value;
            const usuario = document.getElementById("usuario").value;
            const senha = document.getElementById("senha").value;
            
            if (email === "" || nome === "" || sobrenome === "" || usuario === "" || senha === "") {
                alert("Por favor, preencha todos os campos.");
            } else {
                alert("Cadastro realizado com sucesso!");
                window.location.href = "login.html";
            }
        });
    }

    const searchInput = document.querySelector(".lista-animais input");
    if (searchInput) {
        searchInput.addEventListener("input", (event) => {
            const searchValue = event.target.value.toLowerCase();
            const cards = document.querySelectorAll(".animal-card");
            
            cards.forEach(card => {
                const name = card.textContent.toLowerCase();
                if (name.includes(searchValue)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});
