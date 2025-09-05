import type { InsertNotificationType, NotificationType, UpdateNotificationType } from "~/lib/db/schema";

export type ServerResponse<T>
  = {
    data?: T;
    error: string | null;
  };

export const useNotificationsStore = defineStore("useNotificationsStore", () => {
  const { t } = useI18n();

  const { $csrfFetch } = useNuxtApp();

  const {
    data: notifications,
    status: notificationsStatus,
    refresh: refreshNotifications,
  } = useFetch("/api/notifications", {
    lazy: true,
  });

  async function updateNotification(updatedData: UpdateNotificationType): Promise<ServerResponse<NotificationType>> {
    let error: string | null = null;

    const response = await $csrfFetch<NotificationType>("/api/notifications", {
      method: "PUT",
      body: JSON.stringify(updatedData),
    }).catch((err) => {
      error = err.statusMessage?.split(";").map((errmsg: string) => t(errmsg)).join("\r\n");
    });

    return {
      data: response as NotificationType,
      error,
    };
  }

  async function insertNotification(newData: InsertNotificationType): Promise<ServerResponse<NotificationType>> {
    let error: string | null = null;

    const response = await $csrfFetch("/api/notifications", {
      method: "POST",
      body: JSON.stringify(newData),
    }).catch((err) => {
      error = err.statusMessage?.split(";").map((errmsg: string) => t(errmsg)).join("\r\n");
    });

    return {
      data: response as NotificationType,
      error,
    };
  }

  async function deleteNotification(id: number): Promise<ServerResponse<NotificationType>> {
    let error: string | null = null;

    const response = await $csrfFetch(`/api/notifications/${id}`, {
      method: "DELETE",
    }).catch((err) => {
      error = err.statusMessage?.split(";").map((errmsg: string) => t(errmsg)).join("\r\n");
    });

    return {
      data: response as NotificationType,
      error,
    };
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
