<script setup>
import { defineProps } from "vue";
const props = defineProps({
  roomData: Object,
});
// const amenitiesArray = Object.values(props?.roomData?.amenities);
</script>

<template>
  <div class="container">
    <div>{{ props.roomData?.id }}</div>
    <div>{{ props.roomData?.name }}</div>
    <!-- <div class="amenities" v-for="amenity in amenitiesArray" :key="amenity?.id">
      {{ amenity?.name }}
    </div> -->
  </div>
</template>

<style scoped>
.container {
  margin-bottom: 40px;
}
.amenities {
  gap: 4px;
}
</style>
