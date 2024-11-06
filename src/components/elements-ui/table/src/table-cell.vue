<template>
  <div
    class="table-cell"
    :style="{
      width: width,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElTableCell',
  props: {
    width: String
  }
};
</script>

<style lang="scss">
@use "sass:map";
@use "@/assets/styles/colors" as *;

.table-cell {
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  padding: 0 1rem;
  min-height: 6rem;

  color: map.get($primary-color, 'normal');
  font-family: 'Poppins', 'Montserrat', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;

  &:nth-last-of-type(1) {
    //padding-right: 12px;
  }
}
</style>
