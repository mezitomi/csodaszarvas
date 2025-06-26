import { findNews, updateNews } from "~/lib/db/queries/news";
import { UpdateNewsSchema } from "~/lib/db/schema";
import defineAuthenticatedEventHandler from "~/utils/define-authenticated-event-handler";

export default defineAuthenticatedEventHandler(async (event) => {
  const result = await readValidatedBody(event, UpdateNewsSchema.safeParse);

  if (!result.success || !result.data?.id) {
    return sendError(event, createError({
      statusCode: 422,
      statusMessage: result.error?.issues.reduce((acc, issue) => `${acc};${issue.message}`, "").trim(),
    }));
  }

  const existing = await findNews(result.data.id);
  if (!existing) {
    return sendError(event, createError({
      statusCode: 404,
      statusMessage: "pages.admin.dashboard.news.validations.missing-news",
    }));
  }

  const updatedData = {
    ...existing,
    ...result.data,
  };

  const updated = await updateNews(updatedData, event.context.user.id);
  return updated;
});
