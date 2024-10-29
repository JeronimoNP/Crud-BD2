document.addEventListener("DOMContentLoaded", () => {
    const ITEMS_PER_PAGE = 10;  // Número de alunos por página
    let currentPage = 1;        // Página inicial
    let totalPages;             // Total de páginas
    let users = [];             // Array para armazenar os alunos

    list();  // Chama a função para buscar os alunos

    async function list() {
        try {
            const response = await fetch(`http://localhost:3000/listar`, {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error('Erro na aquisição');
            }
            users = await response.json(); // Armazena todos os alunos
            totalPages = Math.ceil(users.length / ITEMS_PER_PAGE); // Calcula o total de páginas
            renderTable();  // Renderiza a tabela com a página inicial
            renderPagination(); // Renderiza os botões de paginação
        } catch (error) {
            console.error('Erro:', error);
        }
    }

    const userTable = document.getElementById("userTable");

    // Função para formatar data no padrão brasileiro
    function formatarDataBrasileira(dataISO) {
        const data = new Date(dataISO);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    // Função para renderizar a tabela com base na página atual
    function renderTable() {
        userTable.innerHTML = "";
        
        // Cálculo dos índices de início e fim da página
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const pageData = users.slice(startIndex, endIndex);

        pageData.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.matricula}</td>
                <td>${user.nome}</td>
                <td>${user.email}</td>
                <td>${formatarDataBrasileira(user.nascimento)}</td>
                <td>${user.cpf}</td>
                <td>
                    <button class="btn editar">Editar</button>
                    <button class="btn excluir" data-id="${user.id}">Excluir</button>
                </td>
            `;
            userTable.appendChild(row);
        });

        addDeleteEventListeners();
    }

    // Função para adicionar eventos de exclusão aos botões
    function addDeleteEventListeners() {
        const deleteButtons = document.querySelectorAll(".btn.excluir");
        deleteButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                const userId = e.target.getAttribute("data-id");
                deleteUser(userId);
            });
        });
    }

    // Função para enviar a requisição DELETE
    async function deleteUser(id) {
        try {
            const response = await fetch(`http://localhost:3000/delete`, {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ id })
            });

            if (response.ok) {
                console.log(`Aluno com ID ${id} deletado com sucesso`);
                await list(); // Atualiza a lista após a exclusão
            } else {
                console.error(`Erro ao deletar aluno com ID ${id}`);
            }
        } catch (error) {
            console.error("Erro na requisição de exclusão:", error);
        }
    }

    // Função para abrir o modal de cadastro
    window.abrirFormulario = function() {
        document.getElementById("formModal").style.display = "flex";
    };

    // Função para fechar o modal de cadastro
    window.fecharFormulario = function() {
        document.getElementById("formModal").style.display = "none";
    };

    // Listener para o formulário de cadastro
    document.getElementById("cadastroForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const novoAluno = {
            matricula: document.getElementById("matricula").value,
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            nascimento: document.getElementById("nascimento").value,
            cpf: document.getElementById("cpf").value,
        };
        createdb(novoAluno);
        fecharFormulario();
    });

    async function createdb(dados) {
        try {
            const response = await fetch('http://localhost:3000/cadastro', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(dados)
            });

            if (response.ok) {
                console.log('Aluno cadastrado com sucesso');
                await list(); // Atualiza a lista após o cadastro
            }
        } catch (error) {
            console.error('Erro ao cadastrar aluno:', error);
        }
    }

    // Função para renderizar a paginação
    function renderPagination() {
        const paginationContainer = document.querySelector(".pagination");
        paginationContainer.innerHTML = "";

        const prevButton = document.createElement("button");
        prevButton.className = "page-btn";
        prevButton.textContent = "« Anterior";
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener("click", () => changePage(currentPage - 1));
        paginationContainer.appendChild(prevButton);

        const pageDisplay = document.createElement("span");
        pageDisplay.className = "page-num";
        pageDisplay.textContent = `Página ${currentPage} de ${totalPages}`;
        paginationContainer.appendChild(pageDisplay);

        const nextButton = document.createElement("button");
        nextButton.className = "page-btn";
        nextButton.textContent = "Próxima »";
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener("click", () => changePage(currentPage + 1));
        paginationContainer.appendChild(nextButton);
    }

    // Função para trocar de página
    function changePage(newPage) {
        if (newPage >= 1 && newPage <= totalPages) {
            currentPage = newPage;
            renderTable();
            renderPagination();
        }
    }
});

