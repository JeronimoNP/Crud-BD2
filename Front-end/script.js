document.addEventListener("DOMContentLoaded", () => {
    // Dados de exemplo para preencher a tabela inicialmente
    const users = [
        { nome: "Bruno", email: "bruno@empresa.com", login: "smart-bruno", senha: "123789", telefone: "12345678", funcao: "Faturista", prioridade: "Baixa" },
        { nome: "Cristina Sena", email: "cristina@empresa.com", login: "smart-cristina", senha: "45785#", telefone: "87654321", funcao: "Departamento Pessoal", prioridade: "Alta" }
    ];

    const userTable = document.getElementById("userTable");

    // Função para renderizar a tabela com os dados
    function renderTable(data) {
        userTable.innerHTML = "";
        data.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.nome}</td>
                <td>${user.email}</td>
                <td>${user.login}</td>
                <td>${user.senha}</td>
                <td>${user.telefone}</td>
                <td>${user.funcao}</td>
                <td>${user.prioridade}</td>
                <td>
                    <button class="btn editar">Editar</button>
                    <button class="btn excluir">Excluir</button>
                </td>
            `;
            userTable.appendChild(row);
        });
    }

    // Função para abrir o modal
    window.abrirFormulario = function() {
        document.getElementById("formModal").style.display = "flex";
    };

    // Função para fechar o modal
    window.fecharFormulario = function() {
        document.getElementById("formModal").style.display = "none";
    };

    // Listener para o formulário de cadastro
    document.getElementById("cadastroForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const novoAluno = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            login: document.getElementById("login").value,
            senha: document.getElementById("senha").value,
            telefone: document.getElementById("telefone").value,
            funcao: document.getElementById("funcao").value,
            prioridade: document.getElementById("prioridade").value
        };

        users.push(novoAluno); // Adiciona o novo aluno aos dados
        renderTable(users); // Atualiza a tabela com o novo aluno
        fecharFormulario(); // Fecha o modal
    });

    // Renderiza a tabela com os dados iniciais
    renderTable(users);
});