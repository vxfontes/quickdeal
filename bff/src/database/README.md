## Documentação do Banco de Dados

Este projeto utiliza **PostgreSQL** como banco de dados relacional e **TypeORM** como ORM (Object-Relational Mapping). As dependências principais para a configuração do banco de dados são:

- [`pg`](https://www.npmjs.com/package/pg): Driver para PostgreSQL em Node.js.
- [`typeorm`](https://www.npmjs.com/package/typeorm): ORM para TypeScript e JavaScript.

### Configuração do Banco de Dados

As configurações do banco de dados estão centralizadas na pasta `config`, onde você encontrará perfis específicos para diferentes ambientes de execução:

- **Perfil de Desenvolvimento (`dev.hml`)**: Configurações para rodar o projeto localmente.

### Estrutura das Configurações

- **Configurações de Conexão**: As informações de conexão com o banco de dados, como host, porta, usuário, e senha, estão definidas nos arquivos dentro da pasta `config`.
- **Scripts de Migração**: Para garantir que o banco de dados esteja sincronizado com as definições do modelo no TypeORM, scripts de migração são gerados e armazenados na pasta específica definida nas configurações.

### Como Configurar o Ambiente Localmente

1. **Instalar Dependências**: Certifique-se de que as dependências estão instaladas

2. **Configurar o Banco de Dados**:
   - Verifique se o PostgreSQL está instalado e rodando na sua máquina.
   - Crie um banco de dados conforme especificado nas configurações.

3. **Rodar Migrações**:
   - Execute as migrações do TypeORM para garantir que o esquema do banco de dados esteja atualizado:
     ```bash
     npm run typeorm migration:run
     ```

### Mais Detalhes

Para mais detalhes sobre a configuração e o uso do banco de dados, veja o arquivo [database.md](../../docs/database.md).
