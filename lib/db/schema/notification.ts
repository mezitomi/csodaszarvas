import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema, createUpdateSchema } from "drizzle-zod";
import { z } from "zod/v4";

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

export const NotificationSchema = createSelectSchema(notification);
export type NotificationType = z.infer<typeof NotificationSchema>;

export const InsertNotificationSchema = createInsertSchema(notification, {
  description: z.string()
    .min(1, "pages.admin.dashboard.notifications.validations.description.min-length")
    .max(2000, "pages.admin.dashboard.notifications.validations.description.max-length"),
  contentHu: z.string()
    .min(1, "pages.admin.dashboard.notifications.validations.content-hu.min-length")
    .max(2000, "pages.admin.dashboard.notifications.validations.content-hu.max-length"),
  contentEn: z.string()
    .min(1, "pages.admin.dashboard.notifications.validations.content-en.min-length")
    .max(2000, "pages.admin.dashboard.notifications.validations.content-en.max-length"),
}).omit({
  id: true,
  enabled: true,
  createdAt: true,
  updatedAt: true,
  createdBy: true,
  updatedBy: true,
});
export type InsertNotificationType = z.infer<typeof InsertNotificationSchema>;

export const UpdateNotificationSchema = createUpdateSchema(notification, {
  description: z.string()
    .min(1, "pages.admin.dashboard.notifications.validations.description.min-length")
    .max(2000, "pages.admin.dashboard.notifications.validations.description.max-length"),
  contentHu: z.string()
    .min(1, "pages.admin.dashboard.notifications.validations.content-hu.min-length")
    .max(2000, "pages.admin.dashboard.notifications.validations.content-hu.max-length"),
  contentEn: z.string()
    .min(1, "pages.admin.dashboard.notifications.validations.content-en.min-length")
    .max(2000, "pages.admin.dashboard.notifications.validations.content-en.max-length"),
}).omit({
  createdAt: true,
  updatedAt: true,
  createdBy: true,
  updatedBy: true,
});
export type UpdateNotificationType = z.infer<typeof UpdateNotificationSchema>;
