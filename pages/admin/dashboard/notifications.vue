<script setup lang="ts">
import type { InsertNotificationType, UpdateNotificationType } from "~/lib/db/schema";

import { InsertNotificationSchema, UpdateNotificationSchema } from "~/lib/db/schema";

const { t } = useI18n();
const notificationsStore = useNotificationsStore();
const { notifications, notificationsStatus: status } = storeToRefs(notificationsStore);
notificationsStore.refreshNotifications();

const items = computed(() => notifications.value || []);

const modalItem = ref<UpdateNotificationType | null>(null);
const modalError = ref<Record<string, string> | null>(null);
const serverError = ref<string | null>(null);

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

async function resetModalItem() {
  modalItem.value = null;
}

async function saveModalItem() {
  validateModalItem();

  if (!modalItem.value || modalError.value) {
    return;
  }

  serverError.value = modalItem.value.id
    ? (await notificationsStore.updateNotification(modalItem.value)).error
    : (await notificationsStore.insertNotification(modalItem.value as InsertNotificationType)).error;

  if (serverError.value) {
    return;
  }

  await resetModalItem();
  await notificationsStore.refreshNotifications();
}

async function openCreateModal() {
  serverError.value = null;
  modalItem.value = {
    description: "",
    contentHu: "",
    contentEn: "",
  };
}
async function openEditModal(item: UpdateNotificationType) {
  serverError.value = null;
  modalItem.value = { ...item };
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

async function validateModalItem() {
  const validationResult = modalItem.value?.id
    ? UpdateNotificationSchema.safeParse(modalItem.value)
    : InsertNotificationSchema.safeParse(modalItem.value as InsertNotificationType);

  if (!validationResult.success) {
    modalError.value = {};

    validationResult.error.issues.forEach((issue) => {
      modalError.value![issue.path.join(".")] = issue.message;
    });
    return;
  }

  modalError.value = null;
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
      <VaButton preset="primary" @click="openCreateModal">
        {{ $t("pages.admin.dashboard.notifications.create") }}
      </VaButton>
    </div>
    <VaDataTable
      class="data-table"
      :virtual-scroller="false"
      preset="primary"
      striped
      hoverable
      :items="items"
      :columns="[
        { key: 'enabled', label: $t('pages.admin.dashboard.notifications.active'), type: 'boolean', width: '6%' },
        { key: 'description', label: $t('pages.admin.dashboard.notifications.description'), width: '10%' },
        { key: 'contentHu', label: $t('pages.admin.dashboard.notifications.content-hu'), width: '200px' },
        { key: 'contentEn', label: $t('pages.admin.dashboard.notifications.content-en'), width: '200px' },
        { key: 'actions', label: $t('pages.admin.dashboard.notifications.actions'), width: '10%' },
      ]"
      :loading="status === 'pending'"
      :no-data-text="$t('pages.admin.dashboard.notifications.no-data-available')"
    >
      <template #cell(createdAt)="{ value }">
        {{ new Date(Number(value)).toLocaleDateString() }}
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
          @click="openEditModal({ ...items[rowIndex] })"
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
      :title=" $t(`pages.admin.dashboard.notifications.${modalItem.id ? 'edit' : 'create'}`) "
      size="small"
      :ok-text="$t('pages.admin.dashboard.notifications.save')"
      :cancel-text="$t('pages.admin.dashboard.notifications.cancel')"
      @ok="saveModalItem"
      @cancel="resetModalItem"
    >
      <div class="container">
        <VaAlert
          v-if="serverError"
          :description="serverError"
          color="danger"
          outline
          closeable
        />

        <VaInput
          v-model="modalItem.description"
          required-mark
          :label="$t('pages.admin.dashboard.notifications.description')"
          :error="!!modalError?.description"
          :error-messages="modalError?.description ? [$t(modalError.description)] : []"
          :dirty="!!modalError?.description"
          @blur="validateModalItem"
        />
        <VaTextarea
          v-model="modalItem.contentHu"
          required-mark
          :label="$t('pages.admin.dashboard.notifications.content-hu')"
          :error="!!modalError?.contentHu"
          :error-messages="modalError?.contentHu ? [$t(modalError.contentHu)] : []"
          min-rows="10"
          :dirty="!!modalError?.contentHu"
          @update:model-value="validateModalItem"
        />
        <VaTextarea
          v-model="modalItem.contentEn"
          required-mark
          :label="$t('pages.admin.dashboard.notifications.content-en')"
          :error="!!modalError?.contentEn"
          :error-messages="modalError?.contentEn ? [$t(modalError.contentEn)] : []"
          :dirty="!!modalError?.contentEn"
          @update:model-value="validateModalItem"
        />
      </div>
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
