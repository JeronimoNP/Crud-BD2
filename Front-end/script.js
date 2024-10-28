document.addEventListener("DOMContentLoaded", () => {
    const users = [
        { nome: "Bruno", email: "bruno@empresa.com", login: "smart-bruno", senha: "123789", telefone: "12345678", funcao: "Faturista", prioridade: "Baixa" },
        { nome: "Cristina Sena", email: "cristina@empresa.com", login: "smart-cristina", senha: "45785#", telefone: "87654321", funcao: "Departamento Pessoal", prioridade: "Alta" },
        // Adicione mais dados para simulação
    ];

    const userTable = document.getElementById("userTable");

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

    // Renderiza a tabela com os dados
    renderTable(users);
});
