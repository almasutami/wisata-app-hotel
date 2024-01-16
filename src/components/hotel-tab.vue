<script setup>
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiGrid, mdiInformationOutline, mdiTagOutline } from "@mdi/js";

const tabs = [
  {
    name: "DEALS",
    icon: mdiTagOutline,
  },
  {
    name: "PHOTOS",
    icon: mdiGrid,
  },
  {
    name: "INFO",
    icon: mdiInformationOutline,
  },
];
const selectedIndex = ref(0);

const selectTab = (index) => {
  selectedIndex.value = index;
};
</script>

<template>
  <div class="tab-container">
    <div class="tab-menu">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectTab(index)"
        :class="{ active: selectedIndex === index }"
      >
        <div class="tab">
          <svg-icon type="mdi" class="mdi" :path="tab?.icon"></svg-icon
          >{{ tab?.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
.tab-container {
  font-size: 12px;
}

.tab-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #e0e0e0;
  padding-left: 12px;
  padding-right: 12px;
  font-weight: 500 !important;
  gap: 12px;
  font-family: Roboto, BlinkMacSystemFont, sans-serif !important;
}

.tab-menu > div {
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 -1px 0 #e0e0e0;
  padding: 12px 24px;
  user-select: none;
  color: rgba(0, 0, 0, 0.54);
  transition: box-shadow 0.3s ease-in-out;
}

.tab {
  display: flex;
  flex: row;
  gap: 8px;
  align-items: center;
}
.tab-menu > div.active {
  color: #007bff !important;
  box-shadow: none;
  border-top: #007bff 2px solid;
  z-index: 3;
}

.mdi {
  height: 18px;
  width: 18px;
}
</style>
