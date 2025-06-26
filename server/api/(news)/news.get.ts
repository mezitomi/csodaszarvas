import { getNews } from "~/lib/db/queries/news";
import defineAuthenticatedEventHandler from "~/utils/define-authenticated-event-handler";

export default defineAuthenticatedEventHandler(async (_) => {
  return await getNews();
});
