import { authClient } from "~/stores/auth";

export default defineNuxtRouteMiddleware(async (to, _) => {
  const { data: session } = await authClient.useSession(useFetch);
  if (to.path.startsWith("/admin") && session?.value?.user?.role !== "admin") {
    return navigateTo("/403");
  }
});
