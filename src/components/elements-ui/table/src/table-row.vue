<template>
  <div class="table-row">
    <div class="table-row__content">

      <slot></slot>
    </div>

    <div v-show="$slots.collapse && isCollapsed" class="table-row__collapse">
      <slot name="collapse"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isCollapsed: Boolean,
  isContentTransparent: Boolean,
  isDraggable: Boolean,
  disabledIconCollapse: Boolean
});

</script>

<style lang="scss">
@use "sass:map";
@use "@/assets/styles/colors" as *;

.table {
  height: 100%;

  &__head &-row {
    background-color: transparent;
  }

  &__head &-row__content {
    background-color: transparent;
  }

  &-drag-cell {
    display: none;
  }

  &.is-draggable &-drag-cell {
    display: grid;
  }

  &.is-draggable &__head &-drag-cell {
    pointer-events: none;
    opacity: 0;
    min-height: 0;
  }

  &-row {
    display: block;
    background-color: white;
    margin-bottom: 1rem;
    border-radius: 1rem;

    &:first-child.is-collapse {
      margin-top: 0;
    }

    &:last-child.is-collapse {
      margin-bottom: 0;
    }

    &.is-collapse {
      margin: 0 0 32px;
      border: 1px solid map.get($warning-color, 'normal');
    }

    &__content {
      display: flex;
    }

    &__collapse {
    }
  }
}
</style>
