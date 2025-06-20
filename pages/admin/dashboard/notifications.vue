<script setup lang="ts">
import type { NotificationsUpdateModal } from "#components";

const { t } = useI18n();
const notificationsStore = useNotificationsStore();
const { notifications, notificationsStatus: status } = storeToRefs(notificationsStore);
notificationsStore.refreshNotifications();

const items = computed(() => notifications.value || []);

const serverError = ref<string | null>(null);
const notificationsUpdateModal = ref<InstanceType<typeof NotificationsUpdateModal> | null>(null);

async function toggleNotificationEnabled(rowIndex: number, newValue: boolean) {
  const notification = items.value[rowIndex];

  if (!notification) {
    serverError.value = t("pages.admin.dashboard.notifications.validations.missing-notification");
    return;
  }

  if (newValue) {
    const anyEnabled = items.value.some(item => item.enabled && item.id !== notification.id);
    if (anyEnabled) {
      serverError.value = t("pages.admin.dashboard.notifications.validations.another-notification-enabled");
    }
  }

  serverError.value = (await notificationsStore.updateNotification({
    ...notification,
    enabled: newValue,
  })).error;

  if (serverError.value) {
    return;
  }

  await notificationsStore.refreshNotifications();
}

async function deleteNotification(id: number) {
  if (!id)
    return;

  serverError.value = (await notificationsStore.deleteNotification(id)).error;
  if (serverError.value) {
    return;
  }

  await notificationsStore.refreshNotifications();
}
</script>

<template>
  <div class="container">
    <CsArrowSeparator>
      <h3>
        {{ $t("pages.admin.dashboard.notifications.title") }}
      </h3>
    </CsArrowSeparator>
    <VaButton preset="primary" @click="notificationsUpdateModal?.openNew()">
      {{ $t("pages.admin.dashboard.notifications.create") }}
    </VaButton>
    <VaDataTable
      class="data-table"
      :virtual-scroller="false"
      preset="primary"
      striped
      hoverable
      :items="items"
      :columns="[
        { key: 'enabled', label: $t('pages.admin.dashboard.notifications.active'), type: 'boolean', width: '6%' },
        { key: 'description', label: $t('pages.admin.dashboard.notifications.description'), width: '200px' },
        { key: 'contentHu', label: $t('pages.admin.dashboard.notifications.content-hu'), width: '200px' },
        { key: 'contentEn', label: $t('pages.admin.dashboard.notifications.content-en'), width: '200px' },
        { key: 'actions', label: $t('pages.admin.dashboard.notifications.actions'), width: '10%' },
      ]"
      :loading="status === 'pending'"
      :no-data-html="$t('pages.admin.dashboard.notifications.no-data-available')"
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
          @click="notificationsUpdateModal?.openEdit({ ...items[rowIndex] })"
        >
          <Icon name="tabler:pencil" />
        </VaButton>
        <VaButton
          preset="primary"
          color="danger"
          :disabled="items[rowIndex].enabled"
          @click="deleteNotification(items[rowIndex].id)"
        >
          <Icon name="tabler:trash" />
        </VaButton>
      </template>

      <template #cell(enabled)="{ rowIndex }">
        <VaSwitch
          :model-value="items[rowIndex].enabled"
          :disabled="!items[rowIndex].enabled && items.some(item => item.enabled)"
          @input="toggleNotificationEnabled(rowIndex, $event.target.checked)"
        />
      </template>
    </VaDataTable>

    <NotificationsUpdateModal
      ref="notificationsUpdateModal"
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
