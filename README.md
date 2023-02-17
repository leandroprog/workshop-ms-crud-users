# WORKSHOP - NESTJS

Estudo do Framework Nestjs

### Características:

- CRUD USERS:  Criação, Leitura, Atualização e Delete

### Requisitos:

- git v2.38.0
- node v18.12.1
- npm v8.19.2
- nest js v9.1.5

#### Configurar o git com o repositório do projeto

[Connect a Azure DevOps repository to your project](https://help.valohai.com/hc/en-us/articles/4420337404049-Connect-a-Azure-DevOps-repository-to-your-project)



```bash
# Instalação
$ git clone ssh://azure.oi.intranet:22/vtal/@Falta
$ cd ./ms-appointment
$ npm install
```

#### Host Local

```bash
# desenvolvimento
$ npm run start

# modo watch
$ npm run start:dev
```

```bash
# produção
$ npm run build
$ npm run start:prod
```


```bash
# Teste unitário
$ npm run test

# Teste e2e
$ npm run test:e2e

# Cobertura de teste
$ npm run test:cov
```

#### Docker

```bash
#Desenvolvimento
$ docker compose up ${dev|hmg|prod}

#modo watch
$ docker compose up watch

# Produção
docker build -t cwintegracao/vtal_geographicaddressmanagement_api_homologation:1.2.2 --target hmg .
$ docker build -t cwintegracao/appointment:{tag} .
$ docker run --name appointment -p 3001:3000 cwintegracao/appointment:{tag}
$ docker push cwintegracao/appointment:{tag}
```

#### Base url

```bash
# local dev, watch e prod
# docker dev e watch
http://localhost:3001/

# docker produção
http://localhost/
```
