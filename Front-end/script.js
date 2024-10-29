document.addEventListener("DOMContentLoaded", () => {
    // Dados de exemplo para preencher a tabela inicialmente
    // const users = [
    //     { nome: "Bruno", email: "bruno@empresa.com", login: "smart-bruno", senha: "123789", telefone: "12345678", funcao: "Faturista", prioridade: "Baixa" },
    //     { nome: "Cristina Sena", email: "cristina@empresa.com", login: "smart-cristina", senha: "45785#", telefone: "87654321", funcao: "Departamento Pessoal", prioridade: "Alta" }
    // ];
    
    list();
    let users;
    async function list(){
        try {
            const response = await fetch(`http://localhost:3000/listar`, {
                method: 'GET'
            });

            if(!response.ok){
                throw new error('Erro na aquisição');
            }
            const users1 = await response.json();
            users = users1;
            renderTable(users1);
        } catch (error){
            console.error('error: ', error);
        }
    }
    const userTable = document.getElementById("userTable");

    // Função para renderizar a tabela com os dados
    function renderTable(data) {
        userTable.innerHTML = "";
        data.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.matricula}</td>
                <td>${user.nome}</td>
                <td>${user.email}</td>
                <td>${user.nascimento}</td>
                <td>${user.cpf}</td>
                
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
            matricula: document.getElementById("matricula").value,
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            nascimento: document.getElementById("nascimento").value,
            cpf: document.getElementById("cpf").value,
        };
        console.log(novoAluno);
        createdb(novoAluno);

        // users.push(novoAluno); // Adiciona o novo aluno aos dados
        renderTable(users); // Atualiza a tabela com o novo aluno
        fecharFormulario(); // Fecha o modal
    });

    async function createdb(dados){
        
        try {
            const response = await fetch('http://localhost:3000/cadastro', {
                method: 'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(dados)
            });

            if(response.ok){
                const data = await response.json();
                console.log('aluno cadastrado com sucesso', data);
            }
            list();
            renderTable(users);
        } catch (error){
            console.error('erro ao cadastrar aluno!');
        }
    }

});
