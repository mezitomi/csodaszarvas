import { findNotification, updateNotification } from "~/lib/db/queries/notification";
import { UpdateNotification } from "~/lib/db/schema";
import defineAuthenticatedEventHandler from "~/utils/define-authenticated-event-handler";

export default defineAuthenticatedEventHandler(async (event) => {
  const result = await readValidatedBody(event, UpdateNotification.safeParse);

  if (!result.success || !result.data?.id) {
    return sendError(event, createError({
      statusCode: 422,
      statusMessage: "Invalid notification data",
    }));
  }

  const existing = await findNotification(result.data.id);
  if (!existing) {
    return sendError(event, createError({
      statusCode: 404,
      statusMessage: "Notification not found",
    }));
  }

  if (existing.enabled && result.data.enabled) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: "Cannot edit an enabled notification",
    }));
  }

  const updatedData = {
    ...existing,
    ...result.data,
  };

  const updated = await updateNotification(updatedData, event.context.user.id);
  return updated;
});
