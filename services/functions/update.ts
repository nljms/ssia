import { PlayerStore, TeamStore } from '@ssia/ddb';
import { APIGatewayProxyHandlerV2 } from 'aws-lambda';

export const player: APIGatewayProxyHandlerV2 = async (event) => {
  const id = event.pathParameters?.playerId;
  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Got an invalid player id.' }),
    };
  }
  const payload = JSON.parse(<string>event.body);
  await PlayerStore.update(id, payload);

  return {
    statusCode: 200,
    body: JSON.stringify({ ...payload, playerId: id }),
  };
};

export const team: APIGatewayProxyHandlerV2 = async (event) => {
  const id = event.pathParameters?.teamId;
  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Got an invalid player id.' }),
    };
  }
  const payload = JSON.parse(<string>event.body);
  await TeamStore.update(id, payload);

  return {
    statusCode: 200,
    body: JSON.stringify({ ...payload, teamId: id }),
  };
};
