# Projeto E-commerce Corebiz

Este projeto foi realizado como parte de um desafio da Corebiz para a criação de uma aplicação de e-commerce. A aplicação foi desenvolvida utilizando React com Vite no front-end e Node.js no back-end, com integração de APIs utilizando Axios.

## Tecnologias Utilizadas

- **Front-end**: React + Vite
- **Back-end**: Node.js
- **Integração de API**: Axios
- **Estilização**: Module.css
- **Gerenciamento de Pacotes**: NPM
- **Ícones**: React-icons
- **Sliders e Carrossel**: Swiper

## Funcionalidades

- Exibição de produtos em prateleiras.
- Slider de produtos em destaque.
- Integração com uma API para obter dados dos produtos.
- Contador de itens ao clicar no botão "COMPRAR".
- Persistência do contador em armazenamento local.
- Formulário para inscrição em newsletter.

**Obs: As inscrições do newletters ficam salvas no arquivo 'subscribers.json'**

## Deploy

A aplicação está disponível em: [Corebiz E-commerce](https://corebiz-six.vercel.app/)

## Instruções para Execução Local

Para executar a aplicação em sua máquina local, siga os seguintes passos:

1. Clone o repositório:
   ```bash
   git clone https://github.com/LucasFMarques2/Corebiz.git
2. Abra a pasta Corebiz com a sua IDE de preferência (recomendado Visual Studio Code).
3. Instale as dependências do projeto:
   ```bash
   npm install
4. Instale o pacote react-icons:
   ```bash
    npm install react-icons
5. Instale o pacote swiper:
    ```bash
     npm install swiper
6. Certifique-se de que o Node.js está instalado em sua máquina.
7. Para iniciar a aplicação, execute o seguinte comando:
    ```bash
     npm run dev
8. Para iniciar a aplicação node(backend), entre na pasta "backend-node" execute o seguinte comando:
   ```bash
     node index
     
  
#Estrutura do Projeto
--Frontend: Localizado na pasta src, contendo componentes React, estilos e integração de API.
--Backend: Localizado na pasta backend-node, contendo a configuração do servidor Node.js e as rotas de API.

Desenvolvido por Lucas Freitas Marques baseado no layout do [Figman](https://www.figma.com/design/awhTJyKgrjEOqPHUrrFBv0/Corebiz---Frontend-Challenge?node-id=0-1/)

# Package.json

- name": "corebiz"
- "private": true
- "version": "0.0.1"
- "type": "module"

## scripts:
- "dev": "vite"
- "build": "vite build"
- "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0"
- "preview": "vite preview"

## dependencies:
- "axios": "^1.7.2",
- "react": "^18.3.1",
- "react-burger-menu": "^3.0.9",
- "react-dom": "^18.3.1",
- "react-icons": "^5.2.1",
- "swiper": "^11.1.4"

## devDependencies:
- "@types/react": "^18.3.3"
- "@types/react-dom": "^18.3.0"
- "@vitejs/plugin-react": "^4.3.1"
- "vite": "^5.3.1"
- "eslint": "^8.57.0"
- "eslint-plugin-react": "^7.34.2"
- "eslint-plugin-react-hooks": "^4.6.2"
- "eslint-plugin-react-refresh": "^0.4.7"

Este README inclui uma descrição do projeto, as ferramentas utilizadas, as instruções de instalação e configuração, como rodar o projeto e as versões das depedencias com o `package.json`.
