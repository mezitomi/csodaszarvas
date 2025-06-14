import { findNotification, updateNotification } from "~/lib/db/queries/notification";
import { UpdateNotificationSchema } from "~/lib/db/schema";
import defineAuthenticatedEventHandler from "~/utils/define-authenticated-event-handler";

export default defineAuthenticatedEventHandler(async (event) => {
  const result = await readValidatedBody(event, UpdateNotificationSchema.safeParse);

  if (!result.success || !result.data?.id) {
    return sendError(event, createError({
      statusCode: 422,
      statusMessage: result.error?.issues.reduce((acc, issue) => `${acc};${issue.message}`, "").trim(),
    }));
  }

  const existing = await findNotification(result.data.id);
  if (!existing) {
    return sendError(event, createError({
      statusCode: 404,
      statusMessage: "pages.admin.dashboard.notifications.validations.missing-notification",
    }));
  }

  if (existing.enabled && result.data.enabled) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: "pages.admin.dashboard.notifications.validations.cannot-edit-enabled-notification",
    }));
  }

  const updatedData = {
    ...existing,
    ...result.data,
  };

  const updated = await updateNotification(updatedData, event.context.user.id);
  return updated;
});
