import type { z } from "zod/v4";

import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema, createUpdateSchema } from "drizzle-zod";

import { user } from "./auth";

export const notification = sqliteTable("notification", {
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

export const Notification = createSelectSchema(notification);
export type Notification = z.infer<typeof Notification>;

export const InsertNotification = createInsertSchema(notification).omit({
  id: true,
  enabled: true,
  createdAt: true,
  updatedAt: true,
  createdBy: true,
  updatedBy: true,
});
export type InsertNotification = z.infer<typeof InsertNotification>;

export const UpdateNotification = createUpdateSchema(notification).omit({
  createdAt: true,
  updatedAt: true,
  createdBy: true,
  updatedBy: true,
});
export type UpdateNotification = z.infer<typeof UpdateNotification>;
