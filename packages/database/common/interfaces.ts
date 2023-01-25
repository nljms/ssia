import { Entity, Schema } from 'electrodb';

export interface BaseEntity
  extends Entity<string, string, string, Schema<string, string, string>> {}

interface DateFields {
  createdAt: Date;
  updatedAt: Date;
}

export interface Player {
  playerId: string;
  name: string;
  age: number;
  team: number;
}

export interface Team extends DateFields {
  teamId: string;
  name: string;
  city: string;
  players: Player[];
}
