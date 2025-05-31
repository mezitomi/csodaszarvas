import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";

export const NewsEntity = sqliteTable("news", {
  id: int().primaryKey({ autoIncrement: true }),
  content: text().notNull(),
  createdBy: int().notNull().references(() => user.id),
  createdAt: integer().notNull(),
  updatedAt: integer().notNull(),
});
