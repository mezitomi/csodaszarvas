<script setup lang="ts">
import type { InsertNotification, UpdateNotification } from "~/lib/db/schema";

const notificationsStore = useNotificationsStore();
const { notifications, notificationsStatus: status } = storeToRefs(notificationsStore);
notificationsStore.refreshNotifications();

const items = computed(() => notifications.value || []);

const modalItem = ref<UpdateNotification | null>(null);

async function toggleNotificationEnabled(rowIndex: number, newValue: boolean) {
  const notification = items.value[rowIndex];

  if (!notification) {
    console.error("Notification not found at index:", rowIndex);
    return;
  }

  if (newValue) {
    const anyEnabled = items.value.some(item => item.enabled && item.id !== notification.id);
    if (anyEnabled) {
      console.warn("Cannot enable this notification because another notification is already enabled.");
      return;
    }
  }

  await notificationsStore.updateNotification({
    ...notification,
    enabled: newValue,
  });
}

async function resetModalItem() {
  modalItem.value = null;
}

async function saveModalItem() {
  if (!modalItem.value)
    return;

  if (modalItem.value.id) {
    await notificationsStore.updateNotification(modalItem.value);
  }
  else {
    await notificationsStore.insertNotification(modalItem.value as InsertNotification);
  }

  await resetModalItem();
}

async function createNotification() {
  modalItem.value = {
    description: "",
    contentHu: "",
    contentEn: "",
  };
}

async function deleteNotification(id: number) {
  if (!id)
    return;

  await notificationsStore.deleteNotification(id);
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
    <div>
      <VaButton preset="primary" @click="createNotification">
        {{ $t("pages.admin.dashboard.notifications.create") }}
      </VaButton>
    </div>
    <VaDataTable
      preset="primary"
      striped
      hoverable
      :items="items"
      :columns="[
        { key: 'enabled', label: $t('pages.admin.dashboard.notifications.active'), type: 'boolean', width: 80 },

        { key: 'description', label: $t('pages.admin.dashboard.notifications.description') },
        { key: 'contentHu', label: $t('pages.admin.dashboard.notifications.content-hu') },
        { key: 'contentEn', label: $t('pages.admin.dashboard.notifications.content-en') },
        { key: 'createdAt', label: $t('pages.admin.dashboard.notifications.created-at'), type: 'date' },
        { key: 'id', label: 'ID', type: 'number' },
        { key: 'actions', label: $t('pages.admin.dashboard.notifications.actions'), width: 80 },
      ]"
      :loading="status === 'pending'"
      :no-data-text="$t('pages.admin.dashboard.notifications.no-data-available')"
    >
      <template #cell(createdAt)="{ value }">
        {{ new Date(Number(value)).toLocaleDateString() }}
      </template>

      <template #cell(actions)="{ rowIndex }">
        <VaButton
          preset="primary"
          :disabled="items[rowIndex].enabled"
          @click="modalItem = { ...items[rowIndex] }"
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
    <VaModal
      v-if="modalItem"
      :model-value="!!modalItem"
      :title=" $t(modalItem.id ? 'pages.admin.dashboard.notifications.edit' : 'pages.admin.dashboard.notifications.create') "
      size="small"
      :ok-text="$t('pages.admin.dashboard.notifications.save')"
      :cancel-text="$t('pages.admin.dashboard.notifications.cancel')"
      @ok="saveModalItem"
      @cancel="resetModalItem"
    >
      <VaInput
        v-model="modalItem.description"
        :label="$t('pages.admin.dashboard.notifications.description')"
      />
      <VaTextarea
        v-model="modalItem.contentHu"
        :label="$t('pages.admin.dashboard.notifications.content-hu')"
      />
      <VaTextarea
        v-model="modalItem.contentEn"
        :label="$t('pages.admin.dashboard.notifications.content-en')"
      />
    </VaModal>
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
</style>
