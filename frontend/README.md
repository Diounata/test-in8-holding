<p align="center">
  <img src="https://in8.com.br/wp-content/themes/bootscore-child-main/img/logo.svg" height="100px" alt="IN8 Logo" /><br>
  <img src="https://github.com/Diounata/test-in8-holding/blob/main/.github/shopmart.png" height="100px" alt="Shopmart" />
</p>

<h1 align="center">Frontend: Shopmart</h1>

## Sobre o Projeto

Este é o frontend da aplicação **Shopmart**, desenvolvido como parte do teste técnico para a IN8 Holding. O objetivo é fornecer uma interface moderna e responsiva para um e-commerce, consumindo a API do backend e contemplando as principais funcionalidades de uma loja virtual.

## Pré-requisitos

- [Node.js](https://nodejs.org) (versão 18 ou superior)
- [Npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

## Principais Tecnologias

- **React**
- **Next.js**
- **Typescript**
- **TailwindCSS**
- **ShadCNUI**
- **Axios**
- **date-fns**
- **Nuqs**
- **React Hook Form**
- **TanStack Query**
- **Zod**
- **Zustand**

## Decisões técnicas

- **Next.js**: Utilizado para renderização SSR/SSG, melhorando performance e SEO.
- **Componentização**: Interface dividida em componentes reutilizáveis para facilitar manutenção e escalabilidade.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.
- **ShadCNUI e Radix UI**: Componentes de UI acessíveis e customizáveis.
- **Validação com Zod**: Garantia de dados corretos ao consumir a API.
- **Axios**: Requisições HTTP simplificadas e tipadas.
- **TanStack Query**: Gerenciamento eficiente de cache e requisições assíncronas.
- **Zustand**: Gerenciamento de estado global simples e performático.

## Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/Diounata/test-in8-holding
cd test-in8-holding/frontend
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Configure as variáveis de ambiente copiando `.env.example` para `.env` e ajustando conforme necessário.

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O frontend estará disponível em [http://localhost:3000](http://localhost:3000).

## Funcionalidades

- **Catálogo de Produtos**
  - Listagem paginada de produtos
  - Visualização de detalhes do produto
- **Carrinho de Compras**
  - Adição, remoção e atualização de itens
  - Visualização do carrinho em tempo real
- **Checkout**
  - Finalização de compra com validação de dados
- **Pedidos**
  - Listagem de pedidos realizados

## Observações

- Integração total com a API backend desenvolvida para o teste.
- Validações de formulários e dados com Zod.
- Interface responsiva e acessível.
- Projeto pronto para deploy em Vercel ou similar.
- Padronização de código com ESLint e Prettier.
- Componentes de UI modernos com ShadCNUI, Radix UI e Lucid Icons.
- Gerenciamento eficiente de dados com TanStack Query e Zustand.

<p align="center">
  :man_technologist: Feito por Jonatham Luz.
</p>

