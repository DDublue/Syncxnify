import {
  pgTable,
  timestamp,
  text,
  primaryKey,
  integer,
} from 'drizzle-orm/pg-core';
import { users } from './user';
import type {AdapterAccount} from '@auth/core/adapters';

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, {onDelete: 'cascade'}),
    type: text('type').$type<AdapterAccount['type']>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
  },
  (account) => [
    primaryKey({columns: [account.provider, account.providerAccountId]})
  ]
);
