O seu arquivo `.txt` já está com a formatação de Markdown perfeita. Basta copiar o conteúdo abaixo e colar no seu `README.md`.

```markdown
📱 Clarion - Gerenciador de Tarefas

Projeto Full-Stack Mobile desenvolvido para gerenciamento de tarefas.

**Integrante:** Samuel Silva dos Reis
**RM:** 1143174579

## 📌 Sobre o Projeto

O Clarion é um aplicativo mobile para gerenciamento de tarefas. Nele, o usuário pode criar uma conta, realizar login e gerenciar suas próprias tarefas de maneira simples e intuitiva.

### Funcionalidades
- Cadastro de usuários.
- Login e autenticação.
- Criação de tarefas.
- Listagem de tarefas.
- Marcação de tarefas como concluídas.
- Exclusão de tarefas.
- Gerenciamento individual das tarefas de cada usuário.

## 🛠️ Tecnologias Utilizadas

| Camada | Tecnologia |
| :--- | :--- |
| **Frontend** | React Native |
| **Framework Mobile** | Expo |
| **Linguagem Frontend** | JavaScript |
| **Backend** | Java |
| **Framework Backend** | Spring Boot |
| **Banco de Dados** | H2 |
| **Segurança** | JWT (JSON Web Token) |

## 🚀 Como Rodar o Projeto

Para executar o projeto, siga os passos abaixo.

### 1. Backend (Java + Spring Boot)

Abra um terminal na pasta `backend` e execute o comando:

```bash
mvn spring-boot:run
```

O backend será iniciado na porta 8080.

> **Observação:** O banco de dados H2 é executado em memória. Portanto, ao reiniciar o servidor, todas as contas e tarefas cadastradas serão apagadas.

### 2. Túnel para o Backend

Como o celular não está necessariamente conectado à mesma rede do computador, é necessário expor o backend à internet utilizando o LocalTunnel.

Abra um novo terminal e execute:

```bash
npx localtunnel --port 8080
```

Após executar o comando, será gerado um link semelhante a:

```text
https://algum-nome.loca.lt
```

Copie o endereço gerado e cole na variável `BASE_URL`, localizada no arquivo:

```text
frontend/src/api.js
```

**Exemplo:**

```javascript
const BASE_URL = "https://algum-nome.loca.lt";
```

### 3. Frontend (React Native + Expo)

Abra um terceiro terminal na pasta `frontend`.

Primeiro, instale as dependências:

```bash
npm install
```

Depois, inicie o Expo:

```bash
npx expo start -c --tunnel
```

Após a inicialização, será exibido um QR Code no terminal.

- **Android:** Escaneie o QR Code utilizando o aplicativo Expo Go.
- **iOS:** Escaneie o QR Code utilizando a câmera do dispositivo e abra pelo Expo Go.

## 💻 Comandos para Windows (Ambiente da Faculdade)

Caso o PowerShell bloqueie a execução de comandos do Node.js ou npm devido às políticas de execução de scripts, siga os passos abaixo.

Abra o PowerShell e execute:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Quando solicitado, pressione `S` e depois `Enter` para confirmar.

Após isso, tente executar novamente os comandos do projeto.

---

## 👨‍💻 Desenvolvedor

**Samuel Silva dos Reis**
RM: 1143174579

Projeto desenvolvido como parte da disciplina de Full-Stack Mobile.
```

Após substituir o conteúdo do arquivo `README.md`, rode no terminal para subir a atualização final:

```bash
git add README.md
git commit -m "Documentacao final formatada"
git push origin main
```