import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await conectaNaDatabase();

conexao.on("error", (error) => {
  console.error("erro de conexão", error);
});

conexao.once("open", () => {
  console.log("Conectado ao MongoDB");
});

const app = express();
routes(app);

export default app;
