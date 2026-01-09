import { sql } from "drizzle-orm";
import { index, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable(
  "users",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({
      length: 255,
    }).notNull(),
    age: integer().notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
  },
  (table) => [
    index('title_search_index').using('gin', sql`to_tsvector('english', ${table.name})`),
  ]
);
