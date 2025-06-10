<script lang="ts" setup>
const { notification, confirmNotification } = useNotifications();

const showModal = ref(Boolean(notification));
</script>

<template>
  <div>
    <VaModal
      v-if="notification"
      v-model="showModal"
      blur
      cancel-text="Dismiss"
      ok-text="Dont show again"
      @ok="confirmNotification"
    >
      <div v-html="notification.message" />
    </VaModal>
  </div>
</template>
