# Ateliê Arquitetura

> Arquitetura que preserva histórias e renova a maneira de viver os espaços.

Portfólio digital de um escritório dedicado a intervenções sensíveis em edifícios e interiores. O projeto apresenta uma identidade editorial, com foco na relação entre memória, materialidade e vida contemporânea.

## Áreas de atuação

- **Restauração:** recuperação e reabilitação de edifícios históricos com respeito às suas características originais.
- **Conservação do patrimônio histórico:** pesquisa, documentação e cuidado com os valores culturais e materiais de cada lugar.
- **Interiores:** espaços contemporâneos que integram conforto, uso e história.

## Tecnologias

![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06b6d4?logo=tailwindcss&logoColor=white)

## Começar

### Pré-requisitos

- Node.js 20.19+ ou 22.12+
- npm

### Instalação e execução local

```bash
npm install
npm run dev
```

O Vite informa no terminal o endereço local para abrir no navegador. Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura do projeto

```text
.
├── public/                 # Arquivos estáticos públicos
├── src/
│   ├── assets/             # Imagens e recursos importados
│   ├── App.tsx             # Página principal do portfólio
│   ├── App.css             # Estilos específicos da página
│   ├── index.css           # Base e diretivas do Tailwind CSS
│   └── main.tsx            # Inicialização React
├── postcss.config.js       # Pipeline PostCSS
├── tailwind.config.js      # Tema e caminhos de conteúdo do Tailwind
└── vite.config.ts          # Configuração do Vite
```

## Boas práticas de contribuição

- Prefira commits pequenos, objetivos e escritos no imperativo, por exemplo: `feat: adicionar seção de projetos` ou `fix: ajustar navegação mobile`.
- Separe mudanças de conteúdo, estilo e configuração quando isso deixar a revisão mais clara.
- Mantenha componentes acessíveis, imagens com texto alternativo e layouts adaptáveis a telas menores.
- Antes de enviar alterações, execute `npm run build` e revise o resultado local com `npm run dev`.

## Licença

Este repositório é um portfólio demonstrativo. Adicione aqui os termos de licença e atribuição dos conteúdos antes de redistribuí-lo.
