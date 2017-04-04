## Postgres / Sequelize / Node / Express Tutorial

### Install Postgres

On Mac:
```
brew update
brew doctor
brew install postgres
```

switch to the postgres user:
```
su -
su - postgres
```

run the postgres client program: `psql`

create a new database user:
```
postgres=# CREATE USER youruseraccount
postgres-# WITH SUPERUSER CREATEDB CREATEROLE
postgres-# PASSWORD 'userAccountPassword';
```

return to your normal user account open the psql client with the new user account:

```
psql postgres
```


### Install Sequelize

```
sudo npm install -g sequelize-cli
```

Create a `.sequelizerc` file:

```
```

```
npm install --save sequelize pg pg-hstore
```

Create a database for

```
sequelize init
createdb todo-dev
```

The `sequelize init` command above creates model and migration files.  Edit those files.

Run `sequelize db:migrate` to create the 
