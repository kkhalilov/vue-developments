<template>
  <div
    :class="[`i-${iconName}`, {
      'i_color-secondary': color === 'secondary',
    }]"
    :style="{
      width: iconSize || width,
      height: iconSize || height,
    }"
  ></div>
</template>

<script setup>
defineProps({
  iconName: {
    type: String,
    required: true
  },
  iconSize: String,
  width: String,
  height: String,
  color: String,
});
</script>

<style scoped lang="scss">
@use "sass:map";
@use "@/assets/styles/colors" as *;

.i {
  &_color-secondary {
    color: map.get($white-color, 4);
  }
}

</style>
