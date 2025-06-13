import { insertNotification } from "~/lib/db/queries/notification";
import { InsertNotification } from "~/lib/db/schema";
import defineAuthenticatedEventHandler from "~/utils/define-authenticated-event-handler";

export default defineAuthenticatedEventHandler(async (event) => {
  const result = await readValidatedBody(event, InsertNotification.safeParse);

  if (!result.success) {
    return sendError(event, createError({
      statusCode: 422,
      statusMessage: "Invalid notification data",
    }));
  }

  const inserted = await insertNotification(result.data, event.context.user.id);

  return inserted;
});
