# Estudo de Autenticação usando Firebase

Este projeto é um estudo de autenticação usando o Firebase. Ele demonstra a implementação básica de autenticação de usuários com o Firebase Authentication. Além de mostrar que possuo um certo conhecimento básico e interesse sobre o assunto.

## Funcionalidades

- Autenticação de usuários com provedores de terceiros (Google e Github).
- Autenticação de usuários com email e senha (Funcional mas sem verificações).

- ## Futuras funcionalidades

- Recuperação de senha por email.

## Configuração

Antes de executar o projeto, configure o seu Firebase. Siga as etapas abaixo:

1. Crie um projeto no [Console do Firebase](https://console.firebase.google.com).
2. Ative o serviço de autenticação por email e provedores de terceiros desejados.
3. Clone este repositório executando o comando `git clone https://github.com/Luzin7/auth.git`.
4. Navegue até o diretório do projeto executando o comando `cd auth`.
5. Copie as configurações do projeto (apiKey, authDomain, etc.) para o arquivo `env.example.ts`.
6. Instale as dependências do projeto executando o comando `npm install` ou `yarn`.

## Executando o Projeto

Após configurar o Firebase, você pode executar o projeto localmente seguindo as etapas abaixo:

- Utilizando npm:

  1. Execute o comando `npm run dev` para iniciar o servidor de desenvolvimento.
  2. Acesse o aplicativo no navegador através do URL `http://localhost:3000`.

- Utilizando yarn:
  1. Execute o comando `yarn dev` para iniciar o servidor de desenvolvimento.
  2. Acesse o aplicativo no navegador através do URL `http://localhost:3000`.

## Recursos

- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [Firebase Console](https://console.firebase.google.com)

## Contribuindo

Contribuições são bem-vindas! Se você encontrou algum problema, tem alguma sugestão ou deseja adicionar novos recursos, sinta-se à vontade para abrir uma issue ou enviar um pull request.
