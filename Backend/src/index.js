const cors = require('cors');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Rota / Recurso
 */
/**
 * Metodos HTTP:
 * GET: Buscar uma informacao do back-end
 * POST: Criar uma infomacao no back-end
 * PUT: Alterar uma informacao no back-end
 * DELETE: Deletar uma informacao no back-ent
 * tudo isso eh mais por uma questao de semantica para saber o que cada um desses metodos faz
 */

 /**
  * Tipos de parametros
  * 
  * Query Params: Parametros nomeados enviados na rota apos "?" (Filtros, paginacao)
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body:Corpo da requisicao, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: FORMATO QUE UTILIZAMOS para se comunicar/ buscar dados/ escrever com o BANCO DE DADOS>>> MySql, SQLITE, PostgreSQL, Oracle, Microsoft SQL Server 
   * NoSql: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */
 //para criar a primeira rota, ex:/contato ou quando nao tem nada, rota raiz coloca apenas o /