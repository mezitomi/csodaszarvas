import { createAuthClient } from "better-auth/vue";

const authClient = createAuthClient();
const localePath = useLocalePath();

export const useAuthStore = defineStore("useAuthStore", () => {
  const session = authClient.useSession();
  const user = computed(() => session.value.data?.user);
  const loading = computed(() => session.value.isPending || session.value.isRefetching);

  async function googleSignIn() {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: localePath("profile"),
    });
  }

  async function signOut() {
    authClient.signOut();
    navigateTo(localePath("/"));
  }

  return {
    loading,
    googleSignIn,
    user,
    signOut,
  };
});
