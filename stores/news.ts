import type { InsertNewsType, NewsType, UpdateNewsType } from "~/lib/db/schema";

 type ServerResponse<T> =
{
  data?: T;
  error: string | null;
};

export const useNewsStore = defineStore("useNewsStore", () => {
  const { t } = useI18n();

  const { $csrfFetch } = useNuxtApp();

  const {
    data: newsList,
    status: newsStatus,
    refresh: refreshNews,
  } = useFetch("/api/news", {
    lazy: true,
  });

  async function updateNews(updatedData: UpdateNewsType): Promise<ServerResponse<NewsType>> {
    let error: string | null = null;

    const response = await $csrfFetch<NewsType>("/api/news", {
      method: "PUT",
      body: JSON.stringify(updatedData),
    }).catch((err) => {
      error = err.statusMessage?.split(";").map((errmsg: string) => t(errmsg)).join("\r\n");
    });

    return {
      data: response as NewsType,
      error,
    };
  }

  async function insertNews(newData: InsertNewsType): Promise<ServerResponse<NewsType>> {
    let error: string | null = null;

    const response = await $csrfFetch("/api/news", {
      method: "POST",
      body: JSON.stringify(newData),
    }).catch((err) => {
      error = err.statusMessage?.split(";").map((errmsg: string) => t(errmsg)).join("\r\n");
    });

    return {
      data: response as NewsType,
      error,
    };
  }

  async function deleteNews(id: number): Promise<ServerResponse<NewsType>> {
    let error: string | null = null;

    const response = await $csrfFetch(`/api/news/${id}`, {
      method: "DELETE",
    }).catch((err) => {
      error = err.statusMessage?.split(";").map((errmsg: string) => t(errmsg)).join("\r\n");
    });

    return {
      data: response as NewsType,
      error,
    };
  }

  return {
    newsList,
    newsStatus,
    refreshNews,
    updateNews,
    insertNews,
    deleteNews,
  };
});
