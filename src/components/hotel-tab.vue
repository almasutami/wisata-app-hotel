<script setup>
import { ref } from "vue";

const tabs = [
  {
    name: "DEALS",
    icon: "fa-solid fa-tag",
  },
  {
    name: "PHOTOS",
    icon: "fa-solid fa-camera",
  },
  {
    name: "INFO",
    icon: "fa-solid fa-info-circle",
  },
];
const selectedIndex = ref(0);

const selectTab = (index) => {
  selectedIndex.value = index;
};
</script>

<template>
  <div class="container">
    <div class="tab-menu">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectTab(index)"
        :class="{ active: selectedIndex === index }"
      >
        <div class="tab">
          <font-awesome-icon
            :icon="tab?.icon"
            size="xl"
            class="search-icon"
          />{{ tab?.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
.container {
  font-size: 12px;
}

.tab-menu {
  display: flex;
  justify-content: center;
  border-top: 2px solid #e0e0e0;
  padding-left: 12px;
  padding-right: 12px;
  font-weight: 500 !important;
  font-family: Roboto, BlinkMacSystemFont, sans-serif !important;
}

.tab-menu > div {
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 -1px 0 #e0e0e0;
  padding: 8px 16px;
  user-select: none;
  transition: box-shadow 0.3s ease-in-out;
}

.tab {
  display: flex;
  flex: row;
  gap: 8px;
  align-items: center;
}
.tab-menu > div.active {
  color: #007bff;
  box-shadow: 0 -1px 0 #007bff;
  border-top: #007bff 2px solid;
  z-index: 3;
}
</style>
