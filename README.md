
# Projeto de Banco de Dados - Tabela de Alunos

Este projeto implementa uma tabela de alunos em um banco de dados PostgreSQL, contendo informações relevantes de estudantes, como nome, matrícula, CPF, email e data de nascimento. O objetivo é modelar e estruturar os dados para gerenciamento eficiente no contexto de um sistema acadêmico.

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Modelagem de Dados](#modelagem-de-dados)
  - [Modelo Conceitual](#modelo-conceitual)
  - [Modelo Lógico](#modelo-lógico)
- [Estrutura da Tabela](#estrutura-da-tabela)
- [Configuração e Execução](#configuração-e-execução)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Contribuir](#como-contribuir)
- [Licença](#licença)

## Sobre o Projeto

Este projeto consiste na criação e gerenciamento de uma tabela única chamada `alunos` dentro de um banco de dados PostgreSQL. O banco de dados foi nomeado `agenda`, e armazena todas as informações dos alunos em uma única tabela, visando simplicidade e eficiência na manipulação dos dados.

## Modelagem de Dados

### Modelo Conceitual

No modelo conceitual, o projeto conta com apenas uma entidade:

- **Aluno**
  - Atributos:
    - `ID`
    - `Matrícula`
    - `Nome`
    - `CPF`
    - `Email`
    - `Data de Nascimento`

### Modelo Lógico

O modelo lógico define a estrutura detalhada da tabela `alunos` no banco de dados PostgreSQL.

```sql
CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    matricula VARCHAR(12) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    email VARCHAR(100) NOT NULL,
    nascimento DATE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

## Estrutura da Tabela

A tabela `alunos` foi projetada com os seguintes campos:

| Campo         | Tipo          | Descrição                                       |
|---------------|---------------|-------------------------------------------------|
| `id`          | SERIAL        | Identificador único do aluno                     |
| `matricula`   | VARCHAR(12)   | Número de matrícula do aluno                     |
| `nome`        | VARCHAR(100)  | Nome completo do aluno                           |
| `cpf`         | VARCHAR(11)   | CPF do aluno, único na tabela                    |
| `email`       | VARCHAR(100)  | Email do aluno                                   |
| `nascimento`  | DATE          | Data de nascimento do aluno                      |
| `created_at`  | TIMESTAMP     | Data e hora de criação do registro               |
| `updated_at`  | TIMESTAMP     | Data e hora da última atualização do registro    |

## Configuração e Execução

Para configurar o banco de dados e criar a tabela `alunos`, siga as instruções abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu_usuario/nome_do_projeto.git
    ```
2. Acesse o diretório do projeto:
    ```bash
    cd nome_do_projeto
    ```
3. Acesse o PostgreSQL e crie o banco de dados `agenda`:
    ```sql
    CREATE DATABASE agenda;
    ```
4. Conecte-se ao banco de dados `agenda`:
    ```bash
    psql -d agenda
    ```
5. Execute o script SQL para criar a tabela:
    ```sql
    CREATE TABLE alunos (
        id SERIAL PRIMARY KEY,
        matricula VARCHAR(12) NOT NULL,
        nome VARCHAR(100) NOT NULL,
        cpf VARCHAR(11) UNIQUE NOT NULL,
        email VARCHAR(100) NOT NULL,
        nascimento DATE NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
    );
    ```

Após executar esses passos, a tabela `alunos` estará configurada no banco de dados `agenda`.

## Tecnologias Utilizadas

- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional
- [SQL](https://www.w3schools.com/sql/) - Linguagem de consulta estruturada

## Como Contribuir

1. Faça um fork do projeto
2. Crie uma nova branch com a sua feature: `git checkout -b minha-feature`
3. Commit suas mudanças: `git commit -m 'Adiciona minha nova feature'`
4. Faça o push para a branch: `git push origin minha-feature`
5. Abra um pull request

## Licença

Este projeto é licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
