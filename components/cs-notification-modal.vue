<script lang="ts" setup>
const { locale } = useI18n();

const notificationStore = useNotificationsStore();

const confirmedNotificationCookie = useCookie("confirmedNotificationId", {
  default: () => 0,
  sameSite: "strict",
  expires: new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000), // 1 year
});

async function confirmNotification() {
  if (notificationStore.activeNotification) {
    confirmedNotificationCookie.value = notificationStore.activeNotification.id;
  }
}

const notificationToShow = computed(() => {
  if (notificationStore.activeNotification && notificationStore.activeNotification.id !== confirmedNotificationCookie.value) {
    return notificationStore.activeNotification;
  }

  return null;
});
const showModal = ref(!!notificationToShow.value);

const notificationMessage = computed(() => {
  if (notificationToShow.value) {
    return locale.value === "hu" ? notificationToShow.value.contentHu : notificationToShow.value.contentEn;
  }
  return "";
});
</script>

<template>
  <div>
    <VaModal
      v-if="notificationToShow"
      v-model="showModal"
      blur
      cancel-text="Dismiss"
      ok-text="Dont show again"
      size="auto"
      hide-default-actions
      @ok="confirmNotification"
    >
      <div v-html="notificationMessage" />
      <template #header>
        <h3 class="header">
          {{ $t("pages.index.notification-modal.title") }}
        </h3>
      </template>
      <template #footer>
        <VaButton
          preset="primary"
          template
          class="button"
          @click="confirmNotification"
        >
          {{ $t("pages.index.notification-modal.close-button") }}
        </VaButton>
      </template>
    </VaModal>
  </div>
</template>

<style scoped lang="scss">
.header {
  text-align: center;
  padding-block-end: 2rem;
}

.button {
  margin-block-start: 1rem;
}
</style>
