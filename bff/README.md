<div align="center" id="top"> 
  <!-- <img src="./.github/app.gif" alt="Bff" /> -->

  &#xa0;

  <!-- <a href="https://bff.netlify.app">Demo</a> -->
</div>

<h1 align="center">Backend For FrontEnd</h1>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<!-- Status -->

<h4 align="center"> 
	🚧  Bff 🚀 Under construction...  🚧
</h4> 

<hr>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#floppy_disk-database">Database</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
</p>

<br>

## :dart: About ##

Backend for FrontEnd - QuickDeal

## :sparkles: Features ##

:heavy_check_mark: NestJS;\
:heavy_check_mark: Config-yml;\
:heavy_check_mark: TypeORM;\
:heavy_check_mark: pg;\
:heavy_check_mark: Class-transformer;\
:heavy_check_mark: Class-validator;

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :floppy_disk: Database

Este projeto utiliza o PostgreSQL como sistema de gerenciamento de banco de dados e o TypeORM como ferramenta de mapeamento objeto-relacional (ORM). 

### O que é TypeORM?

TypeORM é uma ORM que permite a interação entre o banco de dados e o código da aplicação de maneira simples e eficiente. Ele faz o mapeamento entre as entidades da aplicação (classes TypeScript) e as tabelas do banco de dados, facilitando operações como consultas, inserções, atualizações e exclusões sem a necessidade de escrever SQL diretamente.

### Documentação e Instruções

- **Documentação Base:** Você pode encontrar uma explicação detalhada sobre a configuração e uso do banco de dados em [README.md](./src/database/README.md).
- **Instruções de Instalação e Configuração:** Para baixar, instalar e configurar o PostgreSQL, bem como criar o banco de dados necessário para o projeto, consulte [database.md](./docs/database.md).
- **Instruções para utilização do docker:** Para rodar o projeto utilizando docker, consulte [docker.md](./docs/docker.md).


## :checkered_flag: Starting ##

- Para rodar localmente após configurar o postgres

```bash
$ yarn start:dev

$ npm run start:dev
```

- Para rodar localmente utilizando docker, consulte o documento [docker.md](./docs/docker.md).