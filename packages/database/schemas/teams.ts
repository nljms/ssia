import { Schema } from 'electrodb';

export const TeamsSchema: Schema<string, string, string> = {
  model: {
    entity: 'teams',
    version: '1',
    service: 'taskapp',
  },
  attributes: {
    teamId: {
      type: 'string',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    city: {
      type: 'string',
      required: true,
    },
    players: {
      type: 'list',
      items: {
        type: 'number',
      },
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
        composite: ['teamId'],
      },
    },
  },
};
