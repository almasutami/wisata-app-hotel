<script setup>
import { ref } from "vue";

import RoomFilter from "../components/hotel-room-filter.vue";
import RoomCard from "../components/room-card.vue";
import hotelDetails from "../source/hotel-data.json";
const hotelData = hotelDetails;
const roomList = ref(hotelData?.room);

const filterAmenitiesById = (ids, amenities) => {
  return Object.values(amenities).filter((amenity) => ids.includes(amenity.id));
};

const onFilter = (selectedFilter) => {
  roomList.value = hotelData?.room;
  const filteredRoom = hotelData?.room.filter((room) => {
    const roomAmenities = room?.amenities;
    // const roomAmenitiesId = roomAmenities?.map((amenity) => amenity?.id);
    const filteredAmenities = filterAmenitiesById(
      selectedFilter,
      roomAmenities
    );
    return filteredAmenities.length === selectedFilter.length;
    // return roomAmenitiesId?.includes(selectedFilter
  });
  roomList.value = filteredRoom;
};
</script>

<template>
  <div>
    <div class="hotel-room-container">
      <div>
        <RoomFilter @on-filter="onFilter" />
      </div>
      <div>
        <div v-for="room in roomList" :key="room.id">
          <RoomCard :room-data="room" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hotel-room-container {
  padding: 12px 16px;
}
</style>
