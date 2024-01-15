<script setup>
import HotelHeader from "../components/hotel-header.vue";
import HotelTab from "../components/hotel-tab.vue";
import HotelRoom from "../components/hotel-room.vue";
import hotelDetails from "../source/hotel-data.json";
const hotelData = hotelDetails;
</script>

<template>
  <div>
    <div class="hotel-details-container">
      <div>
        <HotelHeader :hotel-data="hotelData" />
      </div>
      <div>
        <HotelTab />
      </div>
      <div>
        <HotelRoom :hotel-data="hotelData" />
      </div>
    </div>
  </div>
</template>

<style>
.hotel-details-container {
  padding: 12px 16px;
}
</style>
