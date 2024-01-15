<script setup>
import { onMounted, ref } from "vue";

import RoomFilter from "../components/hotel-room-filter.vue";
import RoomCard from "../components/room-card.vue";
import hotelDetails from "../source/hotel-data.json";
import offersData from "../source/offers-data.json";
const hotelData = hotelDetails;
const roomList = ref(hotelData?.room);

onMounted(() => {
  linkOfferToRoom(hotelData?.room);
});

const linkOfferToRoom = (inputRooms) => {
  const offers = offersData?.offers;
  const rooms = inputRooms;
  const linkedRooms = rooms.map((room) => {
    const roomOffers = offers.filter(
      (offer) => offer.room_data?.id === room.id
    );
    return {
      ...room,
      offers: roomOffers,
    };
  });
  roomList.value = linkedRooms;
};

const onFilter = (selectedFilter) => {
  console.log(selectedFilter);
  linkOfferToRoom(hotelData?.room);

  const filteredRoom = roomList.value?.map((room) => {
    const newOffers = room.offers.filter((offer) => {
      if (selectedFilter.includes("BB") && selectedFilter.includes("FC")) {
        if (
          offer.meal_plan_code === "BB" &&
          offer.cancel_policy_code === "FC"
        ) {
          return true;
        } else {
          return false;
        }
      } else if (
        selectedFilter.includes("BB") &&
        offer.meal_plan_code === "BB"
      ) {
        return true;
      } else if (
        selectedFilter.includes("FC") &&
        offer.cancel_policy_code === "FC"
      ) {
        return true;
      } else if (selectedFilter.length === 0) {
        return true;
      }
    });

    return {
      ...room,
      offers: newOffers,
    };
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
      <div class="room-card-container">
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
.room-card-container {
  padding: 16px 0;
}
@media only screen and (max-width: 600px) {
  .hotel-room-container {
    padding: 4px 8px;
  }
}
</style>
