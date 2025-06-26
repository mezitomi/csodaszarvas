<script lang="ts" setup>
import type { VaForm, VaModal } from "#components";

import { useForm } from "vuestic-ui";

import type { InsertNewsType, UpdateNewsType } from "~/lib/db/schema";

const newsStore = useNewsStore();

const newsUpdateModal = ref<InstanceType<typeof VaModal> | null>(null);

const defaultValue = {
  id: undefined,
  description: "",
  contentHu: "",
  contentEn: "",
  enabled: false,
};

const modalValue = ref<UpdateNewsType>({
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
    ? (await newsStore.updateNews(modalValue.value)).error
    : (await newsStore.insertNews(modalValue.value as InsertNewsType)).error;

  if (serverError.value) {
    return;
  }

  newsStore.refreshNews();
  newsUpdateModal.value?.hide();
}

defineExpose({
  openNew: () => {
    reset();
    resetValidation();
    modalValue.value = { ...defaultValue };
    newsUpdateModal.value?.show();
  },
  openEdit: (value: UpdateNewsType) => {
    reset();
    resetValidation();
    modalValue.value = { ...value };
    newsUpdateModal.value?.show();
  },
});
</script>

<template>
  <VaModal
    ref="newsUpdateModal"
    stateful
    hide-default-actions
    size="small"
    :title=" $t(`pages.admin.dashboard.news.${modalValue.id ? 'edit' : 'create'}`) "
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
          :label="$t('pages.admin.dashboard.news.description')"
          :rules="[(v) => v.length >= 1 || $t('pages.admin.dashboard.news.validations.description.min-length'),
                   (v) => v.length <= 250 || $t('pages.admin.dashboard.news.validations.description.max-length')]"
        />
        <VaTextarea
          v-model="modalValue.contentHu"
          required-mark
          :label="$t('pages.admin.dashboard.news.content-hu')"
          min-rows="10"
          :rules="[(v) => v.length >= 1 || $t('pages.admin.dashboard.news.validations.content-hu.min-length'),
                   (v) => v.length <= 2000 || $t('pages.admin.dashboard.news.validations.content-hu.max-length')]"
        />
        <VaTextarea
          v-model="modalValue.contentEn"
          required-mark
          :label="$t('pages.admin.dashboard.news.content-en')"
          :rules="[(v) => v.length >= 1 || $t('pages.admin.dashboard.news.validations.content-en.min-length'),
                   (v) => v.length <= 2000 || $t('pages.admin.dashboard.news.validations.content-en.max-length')]"
        />
        <VaButton
          preset="secondary"
          @click="validate() && submit()"
        >
          {{ $t('pages.admin.dashboard.news.save') }}
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
