<template>
  <base-table-row
    v-for="(item, idx) in list"
    :key="idx"
    class="categories-list__item"
    :class="{'!mb-0': depth, 'categories-list__item_parent': !depth}"
    :is-collapsed="item.isCollapsed"
  >
    <base-table-cell width="54%">
      <div class="flex items-center w-full">
        <div :style="{marginLeft: isChild ? '2.2rem' : 0}">
              <span
                v-for="i in depth"
                :key="i"
                class="categories-list__item-block"
                :class="{'categories-list__item-block_last': i === depth && idx === list?.length - 1}"
                :style="{
                  width: i !== depth ? '5.5rem' : '3.3rem',
                  opacity: props.infoObject[i] ? 0 : 1,
                  borderBottom: depth === i  ? 1 : 0,
                }"
              >
                 <div
                   v-if="item.children?.length && depth === i"
                   style="width: 4.4rem; height: 4.4rem"
                   class="flex items-center justify-center mr-15"
                   @click="onCollapseItem(item)"
                 >
                    <base-icon-wrapper
                      class="cursor-pointer transition-transform"
                      :class="{'rotate-90': item.isCollapsed}"
                      color="secondary"
                      size="3.2rem"
                      icon-name="chevron-right"
                      icon-width=".65rem"
                      icon-height="1.2rem"
                      style="left: -47%; position:absolute; top: -70%; z-index: 1; background-color: #e4e4e4;"
                    />
                  </div>
              </span>
        </div>
        <div class="flex items-center grow" :class="{'categories-list__item-wrapper': isChild}">
          <div
            @click="onCollapseItem(item)"
            class="items-center justify-center hidden"
            :class="{'!flex': item.children?.length && !isChild}"
            style="width: 4.4rem; height: 4.4rem"
          >
            <base-icon-wrapper
              class="cursor-pointer transition-transform translate-x-1"
              :class="{'rotate-90': item.isCollapsed}"
              color="secondary"
              size="3.2rem"
              icon-name="chevron-right"
              icon-width=".65rem"
              icon-height="1.2rem"
            />
          </div>

          <div class="categories-list__item-img-wrapper mr-10">
            <img
              class="categories-list__item-img"
              :class="{'hidden': !item.thumb}"
              :src="item.thumb"
              alt="categories list item img"
            />
          </div>

          <div class="categories-list__item-title">{{ item.name }}</div>
        </div>
      </div>
    </base-table-cell>

    <base-table-cell width="14%">
      <span class="categories-list__item-balance">depth {{ depth }}</span>
    </base-table-cell>

    <base-table-cell width="14%">
      Статус
    </base-table-cell>

    <base-table-cell width="18%">
      <div class="flex justify-end items-center w-full">
      </div>
    </base-table-cell>

    <template #collapse v-if="item.children?.length">
      <req-list
        is-child
        :list="item.children"
        :depth="depth + 1"
        :info-object="handleInfoObject(idx)"
        @add="onAdd"
        @remove="onRemove"
        @edit="onEdit"
      />
    </template>
  </base-table-row>
</template>

<script setup lang="ts">
import { BaseTableRow, BaseTableCell, BaseIconWrapper } from '@/components/elements-ui'

const props = defineProps({
  list: Array,
  isChild: Boolean,
  infoObject: {
    type: Object,
    default: {}
  },
  depth: {
    type: Number,
    default: () => 0
  }
})

const handleInfoObject = (idx) => {
  const infoObjectCopy = { ...props.infoObject }
  infoObjectCopy[props.depth] = idx === props.list?.length - 1
  return infoObjectCopy
}

const onCollapseItem = (item) => {
  item.isCollapsed = !item.isCollapsed
}
</script>

<style lang="scss">
@use "sass:map";
@use "@/assets/styles/colors" as *;

.categories-list {
  &__item {
    .table-row {
      .table-cell {
        border-bottom: 1px solid map.get($stroke-color, 2);

        &:first-child {
          border-bottom: 0;
          position: relative;
        }
      }
    }

    &-wrapper {
      position: relative;
      min-height: 6rem;

      &:first-child {
        &:after {
          border-bottom: 1px solid transparent;
        }
      }

      &:after {
        position: absolute;
        width: calc(100% - 4.5rem);
        height: 1px;
        content: '';
        bottom: 0;
        right: -1rem;
        border-bottom: 1px solid map.get($stroke-color, 2);
      }
    }

    &-title {
      color: map.get($primary-color, 'normal');
      font-size: 1.4rem;
      font-weight: 600;
      text-overflow: ellipsis;
      overflow: hidden;
      text-wrap: nowrap;
    }

    &-balance {
      font-size: 1.4rem;
      color: map.get($primary-color, 'normal');
    }

    &-img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &-wrapper {
        overflow: hidden;
        background-color: map.get($secondary-color, 'normal');
        width: 4.4rem;
        height: 4.4rem;
        border-radius: 0.8rem;
      }
    }

    &-block {
      display: inline-block;
      height: 1rem;
      border-bottom: 1px solid map.get($stroke-color, 1);
      position: relative;
      transform: translateY(-2px);

      &_last {
        border-bottom: 0;

        &:before {
          border-left: 1px solid map.get($stroke-color, 1);
          border-bottom: 1px solid map.get($stroke-color, 1);
          content: '';
          display: inline-block;
          border-bottom-left-radius: .5rem;
        }

        &:after {
          opacity: 0;
        }
      }

      &:before {
        width: 100%;
        top: -6rem;
        position: absolute;
        height: 7rem;
        border-left: 1px solid map.get($stroke-color, 1);
        content: '';
        display: inline-block;
      }

      &:after {
        width: 100%;
        bottom: -6rem;
        position: absolute;
        height: 6rem;
        border-left: 1px solid map.get($stroke-color, 1);
        content: '';
        display: inline-block;
      }
    }
  }
}
</style>