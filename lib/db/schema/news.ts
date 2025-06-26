import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema, createUpdateSchema } from "drizzle-zod";
import { z } from "zod/v4";

import { user } from "./auth";

export const news = sqliteTable("news", {
  id: int().notNull().primaryKey({ autoIncrement: true }),
  description: text().notNull(),
  contentHu: text().notNull(),
  contentEn: text().notNull(),
  enabled: integer({ mode: "boolean" }).notNull(),
  createdAt: integer().notNull(),
  updatedAt: integer().notNull(),
  createdBy: integer().notNull().references(() => user.id, { onDelete: "cascade" }),
  updatedBy: integer().notNull().references(() => user.id, { onDelete: "cascade" }),
});

export const NewsSchema = createSelectSchema(news);
export type NewsType = z.infer<typeof NewsSchema>;

export const InsertNewsSchema = createInsertSchema(news, {
  description: z.string()
    .min(1, "pages.admin.dashboard.news.validations.description.min-length")
    .max(250, "pages.admin.dashboard.news.validations.description.max-length"),
  contentHu: z.string()
    .min(1, "pages.admin.dashboard.news.validations.content-hu.min-length")
    .max(2000, "pages.admin.dashboard.news.validations.content-hu.max-length"),
  contentEn: z.string()
    .min(1, "pages.admin.dashboard.news.validations.content-en.min-length")
    .max(2000, "pages.admin.dashboard.news.validations.content-en.max-length"),
}).omit({
  id: true,
  enabled: true,
  createdAt: true,
  updatedAt: true,
  createdBy: true,
  updatedBy: true,
});
export type InsertNewsType = z.infer<typeof InsertNewsSchema>;

export const UpdateNewsSchema = createUpdateSchema(news, {
  description: z.string()
    .min(1, "pages.admin.dashboard.news.validations.description.min-length")
    .max(250, "pages.admin.dashboard.news.validations.description.max-length"),
  contentHu: z.string()
    .min(1, "pages.admin.dashboard.news.validations.content-hu.min-length")
    .max(2000, "pages.admin.dashboard.news.validations.content-hu.max-length"),
  contentEn: z.string()
    .min(1, "pages.admin.dashboard.news.validations.content-en.min-length")
    .max(2000, "pages.admin.dashboard.news.validations.content-en.max-length"),
}).omit({
  createdAt: true,
  updatedAt: true,
  createdBy: true,
  updatedBy: true,
});
export type UpdateNewsType = z.infer<typeof UpdateNewsSchema>;
