## nest-mongo-api

Aplicação API desenvolvida com:
- NestJS
- MongoDB

<a href="https://www.buymeacoffee.com/cicerokze" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="150" />
</a>

## Descrição

Aplicação API desenvolvida como avaliação parcial em um processo seletivo profissional. Esta aplicação usa a seguinte pilha de tecnologias: NestJS e MongoDB.

## Instalação

```bash
$ npm install
```

## Iniciando a aplicação

Certifique-se de que você tem o MongoDB instalado na sua máquina.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Requisições

Quando a API estiver executando em modo de Desenvolvimento, use o Postman ou o Thunder client para fazer requisições e testar os seguintes endpoints:

- Criar um usuário

**POST** http://localhost:3000/users
```
  {
    "firstName": "Nome",
    "lastName": "Sobrenome",
    "email": "nomesobrenome@email.com",
    "password": "Abc123@",
    "cep": "01311-200",
    "street": "Avenida Paulista",
    "number": "S/N",
    "neighbor": "Bela Vista",
    "city": "São Paulo",
    "state": "São Paulo"
  }
```

- Listar todos os usuários

**GET** http://localhost:3000/users

- Listar um usuário

**GET** http://localhost:3000/users/:id

- Atualizar um usuário

**PUT** http://localhost:3000/users/:id
```
  {
    "firstName": "Nome",
    "lastName": "Sobrenome",
    "email": "nomesobrenome@email.com",
    "password": "Abc123@",
    "cep": "01311-200",
    "street": "Avenida Paulista",
    "number": "S/N",
    "neighbor": "Bela Vista",
    "city": "São Paulo",
    "state": "São Paulo"
  }
```

- Remover um usuário

**DELETE** http://localhost:3000/users/:id
