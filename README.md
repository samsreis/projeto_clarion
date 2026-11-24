# Clarion - Gerenciador de Tarefas

Projeto Full-Stack Mobile e Web desenvolvido para gerenciamento de tarefas.

**Integrante:** Samuel Silva dos Reis e Eros Felipe de Oliveira Rego
**RM:** Samuel: 1143174579, Eros: 1143152106

## Sobre o Projeto
O Clarion é um aplicativo para gerenciamento de tarefas. O usuário pode criar uma conta, realizar login e gerenciar suas próprias tarefas (criar, listar e excluir). Possui design minimalista em preto e branco.

## Tecnologias Utilizadas
- **Frontend:** React Native (Expo) + JavaScript.
- **Backend:** Java (Spring Boot).
- **Banco de Dados:** H2 (em memória).
- **Segurança:** Autenticação via Token JWT.
- **Compatibilidade:** Roda em Android, iOS e Web.

## Como Rodar
O projeto precisa de 3 terminais abertos simultaneamente.

### Passo 1: Backend (Java)
Abra o terminal na pasta `backend` e rode:
mvn spring-boot:run
O servidor iniciará na porta 8080. (Aviso: o banco H2 apaga os dados toda vez que o servidor é reiniciado).

### Passo 2: Túnel para o Backend
Abra um segundo terminal e rode:
npx localtunnel --port 8080
Ele vai gerar um link (ex: https://algum-nome.loca.lt). Copie esse link e cole na variável BASE_URL dentro do arquivo frontend/src/api.js.

### Passo 3: Frontend (React Native / Expo)
Abra um terceiro terminal na pasta `frontend` e rode:
npm install
npx expo start -c --tunnel

### Como Testar
- **No Celular:** Baixe o app "Expo Go". Escaneie o QR Code que apareceu no terceiro terminal.
- **No Navegador:** Com o terminal do Expo rodando, aperte a tecla w no teclado.
- **Atenção Web:** Se der erro de "Failed to fetch", abra o link do localtunnel no navegador e clique em "Click to Continue".

## Comandos para Windows (Faculdade)
Caso o PowerShell bloqueie a execução do Node/npm na faculdade, abra o PowerShell e rode:
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
Pressione S e dê Enter quando solicitado.

## Comandos de ações (Faculdade)

Backend: cd Documentos, cd projeto_clarion, cd backend, mvn spring-boot:run.
Túnel: cd Documentos, cd projeto_clarion, cd frontend, cd npx localtunnel --port 8080 (caso o link mude, atualize no api.js).
Frontend: cd Documentos, cd projeto_clarion, cd frontend, npx expo start -c --tunnel (aperte w para abrir na web ou escaneie o QR Code).

### Talvez tenha que Instalar umas coisinhas

**cd Downloads**
**cd projeto_clarion-main**
**cd backend**
**cd mvn spring-boot:run**
**cd frontend**
**cd npx localtunnel --port 8080**
**cd npx expo start -c --tunnel**
