import {PrismaClient} from "@prisma/client";

export class Connection {
  private static _connection: PrismaClient;
  
  static getInstance() {
    if (!this._connection) {
      this._connection = new PrismaClient();
    }
    return this._connection;
  }
}