import * as mongoDB from 'mongodb';

export default class mongoClient {
  private static instance: mongoDB.MongoClient;

  public static getInstance(): mongoDB.MongoClient {
    if (!mongoClient.instance) {
      const connectionString = process.env.DB_CONN_STRING;
      if (!connectionString) {
        throw new Error('DB_CONN_STRING environment variable is not defined');
      }
      mongoClient.instance = new mongoDB.MongoClient(connectionString);
    }
    return mongoClient.instance;
  }
}
