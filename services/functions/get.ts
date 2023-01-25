import { PlayerStore } from '@ssia/ddb';

import { APIGatewayProxyHandlerV2 } from 'aws-lambda';

export const main: APIGatewayProxyHandlerV2 = async (event) => {
  const players = await PlayerStore.find({});

  if (!players.length) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'No players found' }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(players),
  };
};
