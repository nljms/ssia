import { Entity } from 'electrodb';
import { BaseEntity, documentClient, tableName, Team } from '../common';
import { TeamsSchema } from '../schemas';

const teamEntity = new Entity(TeamsSchema, {
  table: tableName,
  client: documentClient,
});

/**
 * Storage class
 */
class TeamStorage {
  constructor(private readonly entity: BaseEntity) {}

  public async find(selectCriteria: Partial<Team>): Promise<Team[]> {
    const players = await this.entity.find(selectCriteria).go();

    return <Team[]>(<unknown>players.data);
  }

  public async create(createParams: Team | Team[]): Promise<void> {
    await this.entity.create(createParams).go();
  }

  public async update(teamId: string, updateParams: Partial<Team>) {
    return this.entity
      .update({ teamId })
      .set(updateParams)
      .where((attr, op) => op.eq(attr.teamId, teamId))
      .go();
  }
}

export const TeamStore = new TeamStorage(teamEntity);
