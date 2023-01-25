import { Api, StackContext } from '@serverless-stack/resources';

export function MyStack({ stack }: StackContext) {
  // Create the HTTP API
  const api = new Api(stack, 'Api', {
    routes: {
      'GET    /teams': 'functions/list.team',
      'POST   /teams': 'functions/create.team',
      'PUT    /teams/{playerId}': 'functions/update.player',
      'GET    /players': 'functions/create.player',
      'POST   /players': 'functions/create.player',
      'PUT    /players/{playerId}': 'functions/update.player',
    },
  });

  // Allow the API to access the table
  api.attachPermissions(['dynamodb']);

  // Show the API endpoint in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
