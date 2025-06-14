import { eq } from "drizzle-orm";

import type { InsertNotificationType, NotificationType } from "../schema";

import db from "..";
import { notification } from "../schema";

export async function getNotifications() {
  return db.query.notification.findMany({
    orderBy: (notification, { desc }) => [desc(notification.createdAt)],
  });
}

export async function findNotification(id: number) {
  return db.query.notification.findFirst({
    where: eq(notification.id, id),
  });
}

export async function insertNotification(data: InsertNotificationType, userId: number) {
  const now = Date.now();

  const [created] = await db.insert(notification).values({
    ...data,
    createdBy: Number(userId),
    updatedBy: Number(userId),
    createdAt: now,
    updatedAt: now,
    enabled: false,
  }).returning();

  return created;
}

export async function updateNotification(data: NotificationType, userId: number) {
  const updatedData = {
    ...data,
    updatedBy: Number(userId),
    updatedAt: Date.now(),
  };

  const [updated] = await db.update(notification).set(updatedData).where(
    eq(notification.id, data.id),
  ).returning();

  return updated;
}

export async function deleteNotification(id: number) {
  const [deleted] = await db.delete(notification).where(eq(notification.id, id)).returning();
  return deleted;
}
