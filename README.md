# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```
5) Usuarios Admin y Regulares creados:
``` bash
Al ejecutar el comenado npx sequelize-cli db:seed:all se van a crear 10 usuarios con el role admin y 10 usuarios con el role standar

Constraseña para usuarios Admin = userAdmin2022
Constraseña para usuarios Standar = userStandar2022
```