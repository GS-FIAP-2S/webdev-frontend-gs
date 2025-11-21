# Futuro do Trabalho - Rede Profissional

## 📋 Resumo do Projeto

Este projeto é uma plataforma web colaborativa, semelhante ao LinkedIn, desenvolvida como parte da Global Solution 2025. A aplicação simula uma rede profissional voltada ao futuro do trabalho, permitindo a conexão entre profissionais de diferentes áreas, incentivando o desenvolvimento de competências, a troca de experiências e a colaboração entre talentos.

A plataforma foi desenvolvida como uma Single Page Application (SPA) utilizando **React**, **Tailwind CSS** e **Vite**, apresentando uma interface moderna, responsiva e com suporte a Dark Mode.

### 🎯 Funcionalidades Principais

- **Listagem de Profissionais**: Exibição de cards com informações básicas dos profissionais (nome, foto, cargo e principais skills)
- **Modal Detalhado**: Visualização completa do perfil profissional ao clicar em um card, incluindo:
  - Informações pessoais e acadêmicas
  - Experiências profissionais
  - Habilidades técnicas e soft skills
  - Certificações e idiomas
  - Projetos e áreas de interesse
- **Sistema de Busca**: Busca por nome, cargo ou resumo profissional
- **Filtros Avançados**: Filtragem por área, cidade ou tecnologia
- **Ações Interativas**: Botões funcionais para "Recomendar Profissional" e "Enviar Mensagem"
- **Dark Mode**: Alternância entre tema claro e escuro
- **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela

### 🛠️ Tecnologias Utilizadas

- **React 19.2.0**: Biblioteca JavaScript para construção da interface
- **Vite 7.2.4**: Build tool e dev server
- **Tailwind CSS 4.1.17**: Framework CSS utility-first para estilização
- **HTML5**: Estrutura semântica
- **JavaScript (ES6+)**: Lógica da aplicação

## 👥 Integrantes do Grupo

- **Mateus Macedo Batista de Souza** - RM 563294
- **Matheus Augusto Santa Rosa Costa Xavier** - RM 565931

## 📦 Instalação do Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório** (ou extraia os arquivos do projeto):

   ```bash
   git clone https://github.com/GS-FIAP-2S/webdev-frontend-gs.git
   cd webdev-frontend-gs
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**:
   Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no terminal)

### Build para Produção

Para gerar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`. Para visualizar a build:

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
webdev-frontend-gs/
├── src/
│   ├── components/
│   │   ├── ProfileCard.jsx      # Componente do card de perfil
│   │   ├── ProfileModal.jsx     # Modal com detalhes do perfil
│   │   └── SearchBar.jsx        # Barra de busca e filtros
│   ├── data/
│   │   └── profissionais.json   # Arquivo JSON com 60 perfis profissionais
│   ├── App.jsx                  # Componente principal
│   ├── main.jsx                 # Ponto de entrada da aplicação
│   └── index.css                # Estilos globais e Tailwind
├── index.html                   # HTML principal
├── package.json                 # Dependências e scripts
├── vite.config.js               # Configuração do Vite
├── tailwind.config.js           # Configuração do Tailwind CSS
├── postcss.config.js            # Configuração do PostCSS
└── README.md                    # Este arquivo
```

## 📊 Dados dos Profissionais

O arquivo `src/data/profissionais.json` contém **60 perfis profissionais** simulados, cada um com as seguintes propriedades:

- `id`: Identificador único
- `nome`: Nome completo
- `foto`: URL da foto do perfil
- `cargo`: Cargo atual / título profissional
- `resumo`: Bio curta / headline profissional
- `localizacao`: Cidade / Estado
- `area`: Área / setor (ex: Desenvolvimento, Design, Dados)
- `habilidadesTecnicas`: Array de hard skills / tecnologias
- `softSkills`: Array de soft skills
- `experiencias`: Array com histórico de trabalho
- `formacao`: Array com formação acadêmica
- `projetos`: Array com portfólio / projetos
- `certificacoes`: Array de certificações relevantes
- `idiomas`: Array com idiomas e níveis
- `areaInteresses`: Array com tópicos de interesse

## 🎨 Funcionalidades Detalhadas

### Busca e Filtros

- **Busca por texto**: Pesquisa em nome, cargo e resumo
- **Filtro por Área**: Filtra profissionais por área de atuação
- **Filtro por Cidade**: Filtra por localização
- **Filtro por Tecnologia**: Filtra por habilidades técnicas
- **Limpar filtros**: Botão para resetar todos os filtros

### Modal de Perfil

Ao clicar em um card, abre-se um modal com:

- Informações completas do profissional
- Todas as habilidades técnicas e soft skills
- Histórico completo de experiências
- Formação acadêmica
- Certificações e idiomas
- Projetos com links
- Áreas de interesse

### Botões de Ação

- **Recomendar Profissional**: Exibe uma mensagem de confirmação
- **Enviar Mensagem**: Exibe uma mensagem de confirmação

### Dark Mode

O botão no header permite alternar entre tema claro e escuro. A preferência é aplicada globalmente na aplicação.

## 🔗 Link do Repositório

https://github.com/GS-FIAP-2S/webdev-frontend-gs

## 📝 Notas Importantes

- O projeto não possui sistema de autenticação, portanto não há usuários e senhas
- Os dados são estáticos, carregados do arquivo JSON local
- As ações de "Recomendar" e "Enviar Mensagem" exibem alertas de confirmação (simulação)
- As fotos dos perfis são geradas aleatoriamente usando o serviço pravatar.cc
- O projeto está configurado para não incluir a pasta `node_modules` no repositório

## 🚀 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a build de produção
- `npm run preview`: Visualiza a build de produção localmente

## 📄 Licença

Este projeto foi desenvolvido como parte do trabalho acadêmico da Global Solution 2025 - FIAP.

---

**Desenvolvido com ❤️ para o Futuro do Trabalho**
