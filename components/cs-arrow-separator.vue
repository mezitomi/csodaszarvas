<script setup lang="ts">
type ArrowSeparatorProps = {
  lenght?: "short" | "medium" | "wide";
};

const props = defineProps<ArrowSeparatorProps>();

const getArrowStyle = computed(() => {
  if (props.lenght === "short")
    return "width: 160px; left: 42%;";
  if (props.lenght === "medium")
    return "width: 233px; left: 39%;";

  // default
  return "width: 300px; left: 35%;";
});

const arrowSrc = computed(() => {
  if (props.lenght === "short")
    return "/img/short-arrow.png";
  if (props.lenght === "medium")
    return "/img/medium-arrow.png";
  return "/img/wide-arrow.png";
});
</script>

<template>
  <div class="separator-container">
    <slot />
    <img
      :src="arrowSrc"
      draggable="false"
      :style="getArrowStyle"
      alt=""
    >
  </div>
</template>

<style scoped lang="scss">
.separator-container {
  text-align: center;

  padding-bottom: 1rem;
  padding-top: 1rem;

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
}
</style>
