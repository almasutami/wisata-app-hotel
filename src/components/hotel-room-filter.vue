<script setup>
import { ref, defineEmits } from "vue";

const filters = [
  {
    name: "Free Breakfast",
    value: "BB",
    icon: "fa-solid fa-utensils",
  },
  {
    name: "Free Cancellation",
    value: "FC",
    icon: "fa-solid fa-credit-card",
  },
];
const emits = defineEmits(["onFilter"]);
const selectedIndex = ref([]);

const selectFilter = (index) => {
  if (selectedIndex.value.includes(index)) {
    selectedIndex.value = selectedIndex.value.filter((item) => item !== index);
  } else {
    selectedIndex.value.push(index);
  }

  const selectedFilter = selectedIndex.value?.map((index) => {
    const filter = filters[index]?.value;
    return filter;
  });
  emits("onFilter", selectedFilter);
};
</script>

<template>
  <div class="filter-container">
    <div class="filter-menu">
      <div class="filter-title">
        <font-awesome-icon icon="fa-solid fa-filter" />Filter rooms by
      </div>
      <div class="filter-clear" v-if="selectedIndex?.length > 0">
        <div>Clear all</div>
        <div class="filter-circle">{{ selectedIndex?.length }}</div>
      </div>
    </div>
    <div class="filter-menu">
      <div
        v-for="(filter, index) in filters"
        :key="index"
        @click="selectFilter(index)"
        :class="{ active: selectedIndex.includes(index) }"
      >
        <div class="filter">
          <font-awesome-icon :icon="filter?.icon" />{{ filter?.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-container {
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.filter-menu {
  display: flex;
  justify-content: center;
  padding: 4px 8px;
  gap: 8px;
  min-width: 200px;
}

.filter-menu > div {
  cursor: pointer;
  z-index: 2;
  padding: 6px 10px;
  user-select: none;
  border: #e0e0e0 1px solid;
  border-radius: 20px;
}

.filter {
  display: flex;
  flex: row;
  gap: 8px;
  align-items: center;
}

.filter-title {
  display: flex;
  flex: row;
  gap: 8px;
  align-items: center;
  font-size: 15px;
  border: none !important;
  cursor: default !important;
}
.filter-clear {
  display: flex;
  flex: row;
  gap: 8px;
  border: #007bff 1px solid !important;
  align-items: center;
}

.filter-menu > div.active {
  color: #007bff;
  background-color: rgba(0, 123, 255, 0.1) !important;
  z-index: 3;
  font-weight: 500 !important;
}

.filter-circle {
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 600px) {
  .filter-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .filter-menu {
    padding: 4px 8px;
  }
}
</style>
