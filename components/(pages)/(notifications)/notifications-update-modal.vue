<script lang="ts" setup>
import type { VaForm, VaModal } from "#components";

import { useForm } from "vuestic-ui";

import type { InsertNotificationType, UpdateNotificationType } from "~/lib/db/schema";

const notificationsStore = useNotificationsStore();

const notificationUpdateModal = ref<InstanceType<typeof VaModal> | null>(null);

const defaultValue = {
  id: undefined,
  description: "",
  contentHu: "",
  contentEn: "",
  enabled: false,
};

const modalValue = ref<UpdateNotificationType>({
  ...defaultValue,
});

const serverError = ref<string | null>(null);

const formRef = ref<InstanceType<typeof VaForm> | null>(null);

const { isValid, validate, reset, resetValidation } = useForm("formRef");

async function submit() {
  if (!isValid.value) {
    return;
  }

  serverError.value = modalValue.value.id
    ? (await notificationsStore.updateNotification(modalValue.value)).error
    : (await notificationsStore.insertNotification(modalValue.value as InsertNotificationType)).error;

  if (serverError.value) {
    return;
  }

  notificationsStore.refreshNotifications();
  notificationUpdateModal.value?.hide();
}

defineExpose({
  openNew: () => {
    reset();
    resetValidation();
    modalValue.value = { ...defaultValue };
    notificationUpdateModal.value?.show();
  },
  openEdit: (value: UpdateNotificationType) => {
    reset();
    resetValidation();
    modalValue.value = { ...value };
    notificationUpdateModal.value?.show();
  },
});
</script>

<template>
  <VaModal
    ref="notificationUpdateModal"
    stateful
    hide-default-actions
    size="small"
    :title=" $t(`pages.admin.dashboard.notifications.${modalValue.id ? 'edit' : 'create'}`) "
  >
    <div class="container">
      <VaForm
        ref="formRef"
      >
        <VaAlert
          v-if="serverError"
          :description="serverError"
          color="danger"
          outline
          closeable
        />
        <VaInput
          v-model="modalValue.description"
          required-mark
          :label="$t('pages.admin.dashboard.notifications.description')"
          :rules="[(v) => v.length >= 1 || $t('pages.admin.dashboard.notifications.validations.description.min-length'),
                   (v) => v.length <= 250 || $t('pages.admin.dashboard.notifications.validations.description.max-length')]"
        />
        <VaTextarea
          v-model="modalValue.contentHu"
          required-mark
          :label="$t('pages.admin.dashboard.notifications.content-hu')"
          min-rows="10"
          :rules="[(v) => v.length >= 1 || $t('pages.admin.dashboard.notifications.validations.content-hu.min-length'),
                   (v) => v.length <= 2000 || $t('pages.admin.dashboard.notifications.validations.content-hu.max-length')]"
        />
        <VaTextarea
          v-model="modalValue.contentEn"
          required-mark
          :label="$t('pages.admin.dashboard.notifications.content-en')"
          :rules="[(v) => v.length >= 1 || $t('pages.admin.dashboard.notifications.validations.content-en.min-length'),
                   (v) => v.length <= 2000 || $t('pages.admin.dashboard.notifications.validations.content-en.max-length')]"
        />
        <VaButton
          preset="secondary"
          @click="validate() && submit()"
        >
          {{ $t('pages.admin.dashboard.notifications.save') }}
        </VaButton>
      </VaForm>
    </div>
  </VaModal>
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
