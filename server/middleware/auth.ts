import type { UserWithId } from "~/lib/auth";

import { auth } from "~/lib/auth";

export default defineEventHandler(async (event) => {
  const session = await auth.api.getSession({
    headers: event.headers,
  });
  event.context.user = session?.user as unknown as UserWithId;

  if (event.path.startsWith("/admin") || event.path.startsWith("/en/admin")) {
    if (event.context.user?.role !== "admin") {
      sendRedirect(event, "/403", 302);
    }
  }
});
