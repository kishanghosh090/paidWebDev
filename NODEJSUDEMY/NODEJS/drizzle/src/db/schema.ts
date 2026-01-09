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
  (table) => ({
    searchIndexOnName: index("name_search_index").on(table.name),
  })
);
