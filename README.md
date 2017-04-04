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
