import { auth } from "~/lib/auth";

export default defineEventHandler(async (event) => {
  if (event.path.startsWith("/admin")) {
    const session = await auth.api.getSession({
      headers: event.headers,
    });

    if (session?.user?.role !== "admin") {
      throw createError(
        {
          statusCode: 403,
          statusMessage: "Unauthorized",
          message: "You do not have permission to access this resource.",
        },
      );
    }
  }
});
