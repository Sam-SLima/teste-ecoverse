## Teste Front-End - Econverse

Este projeto foi desenvolvido como parte de um teste técnico para a vaga de Desenvolvedor Fron-end. O objetivo foi criar uma landing page de e-commerce funcional e seguindo as melhores práticas de desenvolvimento com React e Typescript.

## Tecnologias Utilizadas
- React 18 (Vite)
- TypeScript (Tipagem estática para maior segurança)
- SASS/SCSS Modules (Estilização isolada e reutilizável)
- Context API/ Custom Hooks (Para gerenciamento de dados de produtos)

## Decisões Técnicas

1. Semântica e SEO
Em vez de utilizar apenas divs, a estrutura foi montada utilizando tags semânticas do HTML5. Um ponto crítico foi a substituição de estruturas de tabela por listas(ul/li) em menus, evitando erros de Hydration e melhorando a acessibilidade para leitores de tela.

2. Componentização Reutilizável
O componente Shelf foi projetado para ser flexivel. Através de props, ele pode alternar entre exibir um menu de categorias ou um link de "Ver todos", permitindo que o mesmo cógido possa gerenciar diferentes seções da página, assim facilitando a manutenção.

## Como rodar o projeto
Clone o repositório:

Bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm run dev
