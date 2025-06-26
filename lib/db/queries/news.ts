import { eq } from "drizzle-orm";

import type { InsertNewsType, NewsType } from "../schema";

import db from "..";
import { news } from "../schema";

export async function getNews() {
  return db.query.news.findMany({
    orderBy: (news, { desc }) => [desc(news.createdAt)],
  });
}

export async function findNews(id: number) {
  return db.query.news.findFirst({
    where: eq(news.id, id),
  });
}

export async function insertNews(data: InsertNewsType, userId: number) {
  const now = Date.now();

  const [created] = await db.insert(news).values({
    ...data,
    createdBy: Number(userId),
    updatedBy: Number(userId),
    createdAt: now,
    updatedAt: now,
    enabled: false,
  }).returning();

  return created;
}

export async function updateNews(data: NewsType, userId: number) {
  const updatedData = {
    ...data,
    updatedBy: Number(userId),
    updatedAt: Date.now(),
  };

  const [updated] = await db.update(news).set(updatedData).where(
    eq(news.id, data.id),
  ).returning();

  return updated;
}

export async function deleteNews(id: number) {
  const [deleted] = await db.delete(news).where(eq(news.id, id)).returning();
  return deleted;
}
