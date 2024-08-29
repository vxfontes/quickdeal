# Configuração e Inicialização do Projeto com Docker

Este guia irá te guiar pelo processo de configuração e inicialização do ambiente Docker para o seu projeto, incluindo a preparação do PostgreSQL.

## Pré-requisitos

- **Docker** instalado na sua máquina.
- **Docker Compose** configurado.

## Passos para Iniciar o Projeto

### 1. Verifique e mate processos PostgreSQL existentes na porta 5432

#### macOS

1. Verifique se há processos escutando na porta 5432:
   ```bash
   sudo lsof -i :5432
   ```

2. Mate o processo PostgreSQL encontrado pelo PID:
   ```bash
   sudo kill <PID>
   ```

3. Opcionalmente, você pode matar todos os processos PostgreSQL:
   ```bash
   sudo pkill -u postgres
   ```

#### Linux

1. Verifique processos PostgreSQL na porta 5432:
   ```bash
   sudo ss -tap | grep :5432
   ```

2. Mate o processo PostgreSQL pelo PID:
   ```bash
   sudo kill <PID>
   ```

3. Para matar todos os processos PostgreSQL:
   ```bash
   sudo pkill -u postgres
   ```

#### Windows

1. Abra o **Prompt de Comando** e verifique processos escutando na porta 5432:
   ```cmd
   netstat -ano | findstr :5432
   ```

2. Identifique o PID e mate o processo:
   ```cmd
   taskkill /PID <PID> /F
   ```

### 2. Rodando o Docker

Após garantir que a porta 5432 está livre, rode o seguinte comando para iniciar o ambiente Docker:

```bash
docker-compose up --build
```

### 3. Acessando o PgAdmin

Com o Docker rodando, acesse o PgAdmin no navegador:

[pgadmin mapeado no docker](http://localhost:5050/login?next=/)

Faça login utilizando as credenciais especificadas no `docker-compose.yml`:

- **Email:** `admin@admin.com`
- **Password:** `pgadmin4`

### 4. Criando o Banco de Dados

Após fazer login no PgAdmin:

1. Clique com o botão direito em **Servers** e selecione **Register > Server**.
2. Configure o servidor com as seguintes informações:
   - **Name:** devdbqd
   - **Host name/address:** postgres
   - **Port:** 5432
   - **Maintenance database:** postgres
   - **Username:** postgres
   - **Password:** postgres
3. Clique em **Save** para criar o servidor.
4. Perceba que já foi criada automaticamente a database com o nome de **devdbqd**, caso não tenha criado, clique com botão direito > create > database...
5. Precisamos criar o **schema**, clique na database devdbqd e crie o schema **app**

Finalizando isso, encerre o docker e o rode novamente, utilizando:

```bash
docker-compose up
```


Agora, você está pronto para começar a trabalhar no seu projeto com o ambiente de banco de dados configurado no Docker!
