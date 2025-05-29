import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const NewsEntity = sqliteTable("news", {
  id: int().primaryKey({ autoIncrement: true }),
  content: text().notNull(),
});
