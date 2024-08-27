<h1> Linux </h1>

<h3> Instalar postgres </h3>


```bash
# atualizar dependencias do sistema
$ sudo apt update && sudo apt upgrade -y && sudo apt autoremove

# instalando postgres
$ sudo apt install postgresql postgresql-contrib -y
```

<br>
<hr />

<h3> Verificando status do banco </h3>


```bash
# verificar se o serviço está ativo
$ sudo systemctl status postgresql

# se o serviço estiver desativado
$ sudo systemctl start postgresql
```

<br>
<hr />

<h3> Acessar banco </h3>


```bash
# abrindo console do postgres
$ sudo -i -u postgres

# abrindo terminal do pg
$ psql
```


<br>
<hr />

<h3> Criando usuario </h3>


```bash
# criando usuario default
$ CREATE USER postgres WITH PASSWORD 'postgres';

# se usuario já existir, troque a senha por garantia
$ ALTER USER postgres WITH PASSWORD 'postgres';

# criando banco de dados utilizado
$ CREATE DATABASE devdbqd;

# garantindo privilegios de adm para usuario default
$ GRANT ALL PRIVILEGES ON DATABASE devdbqd TO postgres;

# entrando na nova db
$ \c devdbqd

# criando schema usado
$ CREATE SCHEMA APP;

# verificando lista de bancos de dados existentes
$ \l

# sair do console
$ \q
```

<br>
<hr />

<h3> Aplicando mudanças </h3>


```bash
# reiniciando postgres
$ sudo systemctl restart postgresql
```

<h3> Credenciais</h3>
* Agora suas credenciais são iguais as config/dev.yml, sendo

```bash
    host: 'localhost' 
    user: 'postgres' 
    password: 'postgres' 
    database: 'devdbqd'
    port: 5432
```