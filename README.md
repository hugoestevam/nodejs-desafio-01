# Nodejs - Desafio 01

Para executar este projeto em seu potencial é necessário ter o Node rodando na máquina.

#### Dependencias
Todas as dependencias podem ser opcionalmente instaladas através do [Chocolatey](https://chocolatey.org/).

##### NodeJS
* Obtenha o NodeJS pelo:
 * [Site oficial](https://nodejs.org/), ou use
 
        > choco install nodejs
 
##### Git
* Obtenha o git pelo:
 * [Site oficial](https://git-for-windows.github.io/), ou use:

        > choco install git
 
#### Baixando o Projeto

O download do projeto pode ser feito através do `git` seguindo os passos:

    -aponte para a pasta da solução
     > git clone https://github.com/hugoestevam/nodejs-desafio-01.git

#### Preparando o ambiente

##### Resumo dos comandos
    
-Você pode instalar o yarn globalmente através do seguinte comando:    

    > choco install yarn
        
-Na pasta do projeto, rode esse comando para executar a instalação dos pacotes:

    > yarn install         
        
-Execute esse comanco para subir o servidor Node.

    > yarn dev

-Para executar os testes através do Jest, basta rodar o comando abaixo:

    > yarn test


##### Detalhes

* Se estiver usando Windows, inicie o prompt com permissões de administrador para que **choco install** funcione corretamente.
* Ao rodar o comando **yarn dev** o Node vai executar com a função de HotReload ativada, através do Nodemon.
* Se tudo estiver ok, o prompt irá listar todas as saídas abaixo.

```shell
    $ nodemon
    [nodemon] 2.0.3
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node src/server.js`
```
#### Executando
Basicamente deve estar executando a API Node. A aplicação já deve estar executando em  [http://localhost:3333](http://localhost:3333).

* [Insomia](https://insomnia.rest/)
    * Você pode importar o arquivo **insomnia-desafio-01.json** que se encontra na pasta principal do projeto. Nele já existem todas as chamadas para a API.
 * [Jest](https://jestjs.io/)
    * Você pode executar os testes através do comando `> yarn test`;

```shell
$ jest
 PASS  src/__tests__/likes.spec.js
 PASS  src/__tests__/repositories.spec.js

Test Suites: 2 passed, 2 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        2.629s, estimated 3s
Ran all test suites.
Done in 4.17s.
```

## FIM

Qualquer dúvida entre em contato comigo!
Obrigado.