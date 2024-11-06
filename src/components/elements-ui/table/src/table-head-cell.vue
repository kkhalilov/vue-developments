<template>
  <div
    class="table-head-cell"
    :style="{
      'width': width,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  width: String,
})
</script>

<style lang="scss" scoped>
.table-head-cell {
  cursor: default;
  display: inline-flex;
  font-family: 'Poppins', 'Montserrat', sans-serif;
  font-weight: 600;
  padding: 0 1rem;
  font-size: 1.4rem;

  &:nth-of-type(1) {
    //padding-left: 12px;
  }

  &:nth-last-of-type(1) {
    //padding-right: 12px;
  }
}
</style>
