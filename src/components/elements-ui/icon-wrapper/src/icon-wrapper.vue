<template>
  <div
    class="icon-wrapper"
    :class="{
      'icon-wrapper_secondary': color === 'secondary',
      'icon-wrapper_warning': color === 'warning',
      'icon-wrapper_success': color === 'success',
      'icon-wrapper_danger': color === 'danger',
      'icon-wrapper_white': color === 'white',
      'icon-wrapper_warning_border-double': isBorerDouble,
    }"
    :style="{
      width: size,
      height: size,
    }"
  >
    <base-icon
      :icon-name="iconName"
      :icon-size="iconSize"
      :width="iconWidth"
      :height="iconHeight"
    />
  </div>
</template>

<script setup>
import { BaseIcon } from '@/components/elements-ui';

defineProps({
  iconName: {
    type: String,
    required: true
  },
  isBorerDouble: Boolean,
  iconSize: String,
  iconWidth: String,
  iconHeight: String,
  color: String,
  size: {
    type: String,
    default: '4.2rem'
  }
});
</script>

<style scoped lang="scss">
@use "sass:map";
@use "@/assets/styles/colors" as *;

.icon-wrapper {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: map.get($primary-color, 'normal');

  & > div[class^="i-"] {
    background-color: #fff;
  }

  &_white {
    background-color: white;

    & > div[class^="i-"] {
      background-color: map.get($primary-color, 'normal');
    }
  }

  &_secondary {
    background-color: map.get($secondary-color, 'normal');

    & > div[class^="i-"] {
      background-color: map.get($primary-color, 'normal');
    }
  }

  &_success {
    background-color: map.get($success-color, 'hover');

    & > div[class^="i-"] {
      background-color: map.get($success-color, 'normal');
    }
  }

  &_danger {
    background-color: map.get($danger-color, 'hover');

    & > div[class^="i-"] {
      background-color: map.get($danger-color, 'normal');
    }
  }

  &_warning {
    position: relative;
    background-color: map.get($warning-color, 'normal');

    &_border-double {
      background-color: rgba(map.get($warning-color, 'normal'), .5);

      &:before {
        content: '';
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        width: 80%;
        height: 80%;
        background-color: map.get($warning-color, 'normal');
        border-radius: 50%;
      }
    }
  }
}
</style>
