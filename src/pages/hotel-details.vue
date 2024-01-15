<script setup>
import HotelHeader from "../components/hotel-header.vue";
import HotelTab from "../components/hotel-tab.vue";
import hotelDetails from "../source/hotel-data.json";
const hotelData = hotelDetails;
</script>

<template>
  <div>
    <div class="hotel-details-container">
      <div class="header">
        <HotelHeader :hotel-data="hotelData" />
      </div>
      <div>
        <HotelTab />
      </div>
      <div>Room</div>
    </div>
  </div>
</template>

<style>
.hotel-details-container {
  padding: 12px 16px;
}

.header {
  border-bottom: 1px solid #e0e0e0;
}
</style>
