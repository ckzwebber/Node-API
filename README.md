# API de CRUD de Usuários

Esta é uma API RESTful para gerenciar usuários em um banco de dados PostgreSQL. Ela permite o CRUD de usuários.

## Funcionalidades

- Criar novo usuário
- Recuperar lista de usuários
- Atualizar detalhes do usuário
- Excluir um usuário

## Tecnologias Utilizadas

- Node.js
- Fastify
- PostgreSQL
- bcrypt (hash de senhas)

### Pré-requisitos

- Node.js instalado
- PostgreSQL instalado e em execução
- Gerenciador de pacotes `npm` ou `yarn`

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/ckzwebber/Users-Node-API.git
   cd Node-API
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env` no diretório raiz e adicione a string de conexão do PostgreSQL:

   ```env
   DATABASE_URL=postgresql://usuario:senha@localhost:3030/seubanco
   ```

4. Execute as migrações do banco de dados para criar as tabelas necessárias:

   ```bash
   npm run migrate
   ```

5. Inicie o servidor:
   ```bash
   npm run dev
   ```

O servidor será iniciado na porta 3030 por padrão.

### Endpoints da API

#### Criar um Usuário

- **URL:** `/user`
- **Método:** `POST`
- **Corpo:**
  ```json
  {
    "username": "usuarioExemplo",
    "password": "senhaExemplo"
  }
  ```
- **Resposta de Sucesso:**
  - **Código:** 201 Created

#### Listar Usuários

- **URL:** `/user`
- **Método:** `GET`
- **Parâmetros de Consulta:**
  - `search` (opcional): termo de busca para filtrar usuários pelo nome de usuário
- **Resposta de Sucesso:**
  - **Código:** 200 OK
  - **Conteúdo:**
    ```json
    [
      {
        "id": "idUsuario",
        "username": "usuarioExemplo"
      },
      ...
    ]
    ```

#### Atualizar um Usuário

- **URL:** `/user/:id`
- **Método:** `PUT`
- **Corpo:**
  ```json
  {
    "username": "novousuario",
    "password": "novasenha"
  }
  ```
- **Resposta de Sucesso:**
  - **Código:** 204 No Content

#### Excluir um Usuário

- **URL:** `/user/:id`
- **Método:** `DELETE`
- **Resposta de Sucesso:**
  - **Código:** 204 No Content

## Considerações de Segurança

- As senhas são hashadas usando `bcrypt` antes de serem armazenadas no banco de dados.
- Use variáveis de ambiente para gerenciar informações sensíveis.
- Adicione o arquivo `.env` ao `.gitignore`.

## Contribuições

Fique a vontade para dar uma olhada no código e contribuir. Deixe seu feedback!

## Contato

Fique a vontade para entrar em contato comigo pelo meu <a href="https://www.linkedin.com/in/cmiguelwm/" target="_blank">LinkedIn</a>, até mais! 👋
