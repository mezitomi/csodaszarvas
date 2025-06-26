import { deleteNews, findNews } from "~/lib/db/queries/news";
import defineAuthenticatedEventHandler from "~/utils/define-authenticated-event-handler";

export default defineAuthenticatedEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"));

  const existing = await findNews(id);
  if (!existing) {
    return sendError(event, createError({
      statusCode: 404,
      statusMessage: "pages.admin.dashboard.news.validations.missing-news",
    }));
  }

  if (existing.enabled) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: "pages.admin.dashboard.news.validations.cannot-delete-enabled-news",
    }));
  }

  const updated = await deleteNews(existing.id);
  return updated;
});
