import { Schema } from 'electrodb';

export const PlayersSchema: Schema<string, string, string> = {
  model: {
    entity: 'teams',
    version: '1',
    service: 'taskapp',
  },
  attributes: {
    playerId: {
      type: 'string',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    age: {
      type: 'string',
      required: true,
    },
    team: {
      type: 'number',
      required: true,
    },
    createdAt: {
      type: 'number',
      default: () => Date.now(),
      // cannot be modified after created
      readOnly: true,
    },
    updatedAt: {
      type: 'number',
      // watch for changes to any attribute
      watch: '*',
      // set current timestamp when updated
      set: () => Date.now(),
      readOnly: true,
    },
  },
  indexes: {
    primary: {
      pk: {
        field: 'pk',
        composite: ['commentID'],
      },
      sk: {
        field: 'sk',
        composite: [],
      },
    },
    byTeam: {
      index: 'teampk',
      pk: {
        field: 'teampk1',
        composite: ['teamId'],
      },
    },
  },
};
