import express, { Express } from 'express';
import cors from 'cors';
import getEnvVar from 'env/index';
import logger from 'middlewares/logger.middleware';
import error from 'middlewares/error.middleware';
import HealthRouter from 'routers/health.router';
import { IDatabase } from 'interfaces/database';
import Context from 'database/Context';
import WhatsAppRouter from 'routers/whatsapp.router';

class Server {
  db: IDatabase;
  #engine: Express;

  constructor(database: IDatabase) {
    this.db = database;
    this.#engine = express();
  }

  #registerMiddlwares() {
    this.#engine.use(express.json());
    this.#engine.use(cors({ origin: '*' }));
    this.#engine.use(logger());
  }

  #registerHandlers() {
    const ctx = new Context(this.db);
    const healthRouter = new HealthRouter(ctx, this.#engine, '');
    const whatsAppRouter = new WhatsAppRouter(ctx, this.#engine, '/whatsapp');

    healthRouter.register();
    whatsAppRouter.register();
  }

  start() {
    this.#registerMiddlwares();
    this.#registerHandlers();
    this.#engine.use(error());
    this.#engine.listen(parseInt(getEnvVar('PORT')), () => {
      console.log(`\nServer listening on ${getEnvVar('PORT')}`);
    });
  }
}

export default Server;
