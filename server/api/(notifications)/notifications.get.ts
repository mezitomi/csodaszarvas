import { getNotifications } from "~/lib/db/queries/notification";
import defineAuthenticatedEventHandler from "~/utils/define-authenticated-event-handler";

export default defineAuthenticatedEventHandler(async (_) => {
  return await getNotifications();
});
