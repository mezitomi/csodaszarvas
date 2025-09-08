import { deleteNotification, findNotification } from "~~/lib/db/queries/notification";

import defineAuthenticatedEventHandler from "~/utils/define-authenticated-event-handler";

export default defineAuthenticatedEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"));

  const existing = await findNotification(id);
  if (!existing) {
    return sendError(event, createError({
      statusCode: 404,
      statusMessage: "pages.admin.dashboard.notifications.validations.missing-notification",
    }));
  }

  if (existing.enabled) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: "pages.admin.dashboard.notifications.validations.missing-notification",
    }));
  }

  const updated = await deleteNotification(existing.id);
  return updated;
});
