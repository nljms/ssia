import { Entity } from 'electrodb';
import { BaseEntity, documentClient, Player, tableName } from '../common';
import { PlayersSchema } from '../schemas';

const playerEntity = new Entity(PlayersSchema, {
  table: tableName,
  client: documentClient,
});

/**
 * Some of the methods, I don't really know if this will work.
 */
class PlayerStorage {
  constructor(private readonly entity: BaseEntity) {}

  public async find(selectCriteria: Partial<Player>): Promise<Player[]> {
    const players = await this.entity.find(selectCriteria).go();
    return <Player[]>(<unknown>players.data);
  }

  public async create(createParams: Player): Promise<void> {
    await this.entity.create(createParams).go();
  }

  public async update(playerId: string, updateParams: Partial<Player>) {
    return this.entity
      .update({ playerId })
      .set(updateParams)
      .where((attr, op) => op.eq(attr.playerId, playerId))
      .go();
  }
}

export const PlayerStore = new PlayerStorage(playerEntity);
