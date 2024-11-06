<template>
  <div
    class="table"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      v-if="$slots.head"
      class="table__head"
    >
      <div>
        <slot name="head"></slot>
      </div>
    </div>
    <div
      v-if="$slots.body"
      class="table__body"
    >
      <slot name="body"></slot>
    </div>
    <div
      v-if="$slots.foot"
      class="table__foot"
    >
      <slot name="foot"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: () => false
  },
})
</script>

<style lang="scss">
@use "sass:map";
@use "@/assets/styles/colors" as *;

.table {
  width: 100%;
  display: flex;
  flex-direction: column;

  &-raw_ghost {
    opacity: 0;
  }

  &__head {
    border-bottom: 1px solid rgba(map.get($stroke-color, 3), .3);
    background-color: map.get($white-color, 2);
    position: sticky;
    top: 0;
    z-index: 2;
    margin-bottom: 1rem;
  }


  &__body {
  }

  &__loading {
    img {
      max-width: 100%;
    }
  }

  &.is-disabled {
    position: relative;
    pointer-events: none;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(white, 0.3);
    }
  }
}
</style>
