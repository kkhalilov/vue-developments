<template>
  <div class="table">
    <base-table class="categories">
      <template #head>
        <base-table-row>
          <base-table-head-cell width="54%">
            Категория
          </base-table-head-cell>
          <base-table-head-cell width="14%">
            Кол-во товаров
          </base-table-head-cell>
          <base-table-head-cell width="30%">
            Статус
          </base-table-head-cell>
        </base-table-row>
      </template>

      <template #body>
        <req-list
          :list="list"
        />
      </template>
    </base-table>
  </div>
</template>

<script setup>
import { BaseTable, BaseTableRow, BaseTableHeadCell } from '@/components/elements-ui'
import ReqList from './components/req-list.vue';
import { ref } from 'vue'
import {tableData} from '@/const/index.js'

const list = ref([...tableData]);
</script>

<style scoped lang="scss">
@use "sass:map";
@use "@/assets/styles/colors" as *;

.table {
  padding: 2rem 0;
  max-width: 120rem;
  margin: 0 auto;
  background-color: map.get($white-color, 2);
}
</style>