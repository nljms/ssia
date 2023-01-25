import { DynamoDB } from 'aws-sdk';

export const documentClient = new DynamoDB.DocumentClient({
  apiVersion: '1',
  credentials: {
    accessKeyId: <string>process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: <string>process.env.AWS_SECRET_ACCESS_KEY,
  },
});
