import { PlayerStore, TeamStore } from '@ssia/ddb';
import { APIGatewayProxyHandlerV2 } from 'aws-lambda';

export const player: APIGatewayProxyHandlerV2 = async (event) => {
  const data = JSON.parse(<string>event.body);

  await PlayerStore.create(data);
  return {
    statusCode: 201,
  };
};

export const team: APIGatewayProxyHandlerV2 = async (event) => {
  const data = JSON.parse(<string>event.body);

  await TeamStore.create(data);
  return {
    statusCode: 201,
  };
};
