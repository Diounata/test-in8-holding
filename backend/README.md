
<p align="center">
    <img src="https://in8.com.br/wp-content/themes/bootscore-child-main/img/logo.svg" height="80px" alt="IN8 Logo" />
    <br>
</p>

<h1 align="center">Backend: Shopmart API</h1>


<p align="center">
  <img src="https://github.com/Diounata/test-in8-holding/blob/main/.github/shopmart.png" height="100px" alt="Shopmart" />
</p>

## Sobre o Projeto

Este é o backend da aplicação **Shopmart**, desenvolvido como parte do teste técnico para a IN8 Holding. O objetivo é fornecer uma API para um e-commerce, contemplando as principais funcionalidades de uma loja virtual.


## Pré-requisitos:

- [Node.js](https://nodejs.org) (versão 18 ou superior)
- [Docker](https://www.docker.com/get-started)
- [Git](https://git-scm.com/)


## Principais Tecnologias

- **Node.js**
- **Typescript**
- **NestJS**
- **Prisma ORM**
- **Docker**
- **PostgreSQL**
- **Zod**

## Decisões técnicas

- **NestJS Modular**: Estruturei o projeto de forma modular para facilitar a organização e separar bem as responsabilidades de cada parte.
- **SOLID**: Procurei seguir os princípios SOLID para garantir um código limpo, fácil de entender e de manter.
- **Clean Architecture**: Separei as camadas do sistema para que ele seja mais testável e escalável no futuro.
- **Injeção de Dependências**: Usei injeção de dependências para deixar os componentes mais desacoplados e flexíveis.
- **Prisma & Zod**: Escolhi Prisma para lidar com o banco de dados e Zod para validação, aproveitando a integração entre eles.
- **Docker**: O ambiente foi preparado com Docker para facilitar a configuração e o deploy, sem surpresas.


## Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/Diounata/test-in8-holding
cd test-in8-holding/backend
```

2. Copie o arquivo `.env.example` para `.env` e ajuste as variáveis de ambiente conforme necessário.

3. Suba os containers do Docker:

```bash
docker compose up -d
```

4. Instale as dependências do projeto:

```bash
npm install
```

5. Rode as migrações do Prisma para criar o banco de dados e fazer o seed inicial com dados das APIs disponiblizadas no documento do teste técnico:

```bash
npm run prisma:reset
```
6. Inicie o servidor:

```bash
npm run start:dev
```

## Rotas (Features)

- **Produtos**
  - `GET /products` — Listar produtos (com paginação)
  - `GET /products/:id` — Buscar produto por ID
- **Itens do Carrinho**
  - `GET /cart-items` — Listar itens do carrinho
  - `POST /cart-items` — Adicionar item ao carrinho
  - `PATCH /cart-items/amount/:id` — Atualizar quantidade de um item
  - `DELETE /cart-items/:id` — Remover item do carrinho
  - `DELETE /cart-items` — Limpar todo o carrinho
- **Checkout**
  - `POST /orders/finish` — Finalizar compra
- **Pedidos**
  - `GET /orders` — Listar pedidos (com paginação)


## Observações

- Integração com duas APIs públicas para alimentação automática do catálogo de produtos. APIs utilizadas:
    - Fornecedor brasileiro: https://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider
    - Fornecedor europeu: https://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider
- Validações de dados feitas com Zod.
- Banco de dados gerenciado via Prisma ORM.
- Ambiente pronto para desenvolvimento com Docker.


<p align="center">
    :man_technologist: Feito por Jonatham Luz.
</p>