import { auth } from "~/lib/auth";

export default defineEventHandler(async (event) => {
  if (event.path.startsWith("/admin") || event.path.startsWith("/en/admin")) {
    const session = await auth.api.getSession({
      headers: event.headers,
    });

    if (session?.user?.role !== "admin") {
      sendRedirect(event, "/403");
    }
  }
});
