import serverless from 'serverless-http';
import { APIGatewayProxyHandler } from 'aws-lambda';

import app from './app';
// import Database from './database';

const serverlessApp = serverless(app);

export const handler: APIGatewayProxyHandler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  // const database = new Database();
  // const connection = await database.getConnection();
  const response = await serverlessApp(event, context);

  // disconnect db & redis
  // try {
  //   await Promise.all([connection.close(), cache.disconnect()]);
  // } catch (e) {}

  return response;
};
