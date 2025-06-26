<script setup lang="ts">
import type { NewsUpdateModal } from "#components";

const { t } = useI18n();
const newsStore = useNewsStore();
const { newsList, newsStatus } = storeToRefs(newsStore);
newsStore.refreshNews();

const items = computed(() => newsList.value || []);

const serverError = ref<string | null>(null);
const newsUpdateModal = ref<InstanceType<typeof NewsUpdateModal> | null>(null);

async function toggleNewsActive(rowIndex: number, newValue: boolean) {
  const current = items.value[rowIndex];

  if (!current) {
    serverError.value = t("pages.admin.dashboard.news.validations.missing-news");
    return;
  }

  serverError.value = (await newsStore.updateNews({
    ...current,
    enabled: newValue,
  })).error;

  if (serverError.value) {
    return;
  }

  await newsStore.refreshNews();
}

async function deleteNews(id: number) {
  if (!id)
    return;

  serverError.value = (await newsStore.deleteNews(id)).error;
  if (serverError.value) {
    return;
  }

  await newsStore.refreshNews();
}
</script>

<template>
  <div class="container">
    <CsArrowSeparator>
      <h3>
        {{ $t("pages.admin.dashboard.news.title") }}
      </h3>
    </CsArrowSeparator>
    <VaButton preset="primary" @click="newsUpdateModal?.openNew()">
      {{ $t("pages.admin.dashboard.news.create") }}
    </VaButton>
    <VaDataTable
      class="data-table"
      :virtual-scroller="false"
      preset="primary"
      striped
      hoverable
      :items="items"
      :columns="[
        { key: 'enabled', label: $t('pages.admin.dashboard.news.active'), type: 'boolean', width: '6%' },
        { key: 'description', label: $t('pages.admin.dashboard.news.description'), width: '200px' },
        { key: 'contentHu', label: $t('pages.admin.dashboard.news.content-hu'), width: '200px' },
        { key: 'contentEn', label: $t('pages.admin.dashboard.news.content-en'), width: '200px' },
        { key: 'actions', label: $t('pages.admin.dashboard.news.actions'), width: '10%' },
      ]"
      :loading="newsStatus === 'pending'"
      :no-data-html="$t('pages.admin.dashboard.news.no-data-available')"
    >
      <template #cell(createdAt)="{ value }">
        {{ new Date(Number(value)).toLocaleDateString() }}
      </template>
      <template #cell(description)="{ value }">
        <div class="cell">
          {{ value }}
        </div>
      </template>
      <template #cell(contentHu)="{ value }">
        <div class="cell">
          {{ value }}
        </div>
      </template>
      <template #cell(contentEn)="{ value }">
        <div class="cell">
          {{ value }}
        </div>
      </template>
      <template #cell(actions)="{ rowIndex }">
        <VaButton
          preset="primary"
          :disabled="items[rowIndex].enabled"
          @click="newsUpdateModal?.openEdit({ ...items[rowIndex] })"
        >
          <Icon name="tabler:pencil" />
        </VaButton>
        <VaButton
          preset="primary"
          color="danger"
          :disabled="items[rowIndex].enabled"
          @click="deleteNews(items[rowIndex].id)"
        >
          <Icon name="tabler:trash" />
        </VaButton>
      </template>

      <template #cell(enabled)="{ rowIndex }">
        <VaSwitch
          :model-value="items[rowIndex].enabled"
          @input="toggleNewsActive(rowIndex, $event.target.checked)"
        />
      </template>
    </VaDataTable>

    <NewsUpdateModal
      ref="newsUpdateModal"
    />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.va-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cell {
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
}
.data-table {
  width: 100%;
  max-width: 100%;
  overflow-y: unset;
  overflow-x: unset;
}
</style>
