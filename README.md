# Prova theVelops
<p align="center">Prova theVelops para estagiarios iniciantes</p>

## 1 - Downloads

```
Baixe a pasta no github contendo a app
```

## 2 - Banco de dados

```
Instale o MongoDB em sua maquina, inicie o mongod e após o mongo.
Use o comando: use TheVelopsBD
Use o comando: load("COLOQUE O CAMINHO ATÉ O ARQUIVO BD.JS EM LIBS DO APP"
Pronto, criado o banco com 50 usuarios já cadastrados
```

## 3 - APP

```
Abra o npm e encontre o arquivo pelo comando: cd pasta.
Use o comando npm start na pasta.
```

## 4 - Instruções de execução

```
A url(http://localhost:3000/) inicial contem as instruções das rotas criadas pelo **Swagger**.
- Sugestão: use o postman ou o resteasy da google para executar as rotas da app.
- Obs: erros ocasionam o fechamento da app na npm, caso ocorra um erro execute o comando: npm start novamente.
- Obs 2: utilize o content-type: application/x-www-form-unlercoded para enviar os valores
```

## Exemplos para caso de duvida em Swagger:
```
method get: http://localhost:3000/users
```
```
method post: http://localhost:3000/users
key = nome / value = ...
```
```
method get: http://localhost:3000/users/5a199a731c41532914efaeab -> id
```
```
method put: http://localhost:3000/users/5a199a731c41532914efaeab -> id
key = nome / value = ...
```
```
method delete: http://localhost:3000/users/5a199a731c41532914efaeab -> id
```


## Autor: 

Arthur Coutinho Santos

## Data : 25/11/2017

## Licença MIT


