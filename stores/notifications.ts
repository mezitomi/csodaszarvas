import type { InsertNotification, UpdateNotification } from "~/lib/db/schema";

export const useNotificationsStore = defineStore("useNotificationsStore", () => {
  const { $csrfFetch } = useNuxtApp();

  const {
    data: notifications,
    status: notificationsStatus,
    refresh: refreshNotifications,
  } = useFetch("/api/notifications", {
    lazy: true,
  });

  async function updateNotification(updatedData: UpdateNotification) {
    await $csrfFetch("/api/notifications", {
      method: "PUT",
      body: JSON.stringify(updatedData),
    });

    await refreshNotifications();
  }

  async function insertNotification(newData: InsertNotification) {
    await $csrfFetch("/api/notifications", {
      method: "POST",
      body: JSON.stringify(newData),
    });

    await refreshNotifications();
  }

  async function deleteNotification(id: number) {
    await $csrfFetch("/api/notifications", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
  }

  const activeNotification = computed(() => notifications.value?.find(notification => notification.enabled));

  return {
    notifications,
    notificationsStatus,
    refreshNotifications,
    updateNotification,
    insertNotification,
    deleteNotification,
    activeNotification,
  };
});
