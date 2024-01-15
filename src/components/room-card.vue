<script setup>
import { defineProps } from "vue";
const props = defineProps({
  roomData: Object,
});
import OfferCard from "../components/offer-card.vue";
</script>

<template>
  <div class="room-container">
    <div class="room-images">
      <img
        class="first-image-row image-style"
        :src="props.roomData?.images?.[0]?.links?.['350px']?.href"
      />
      <div class="second-image-row">
        <div class="image-container">
          <img
            class="bottom-left-image image-style"
            :src="props.roomData?.images?.[1]?.links?.['350px']?.href"
          />
        </div>
        <div class="image-container">
          <img
            class="image-style"
            :src="props.roomData?.images?.[2]?.links?.['350px']?.href"
          />
        </div>
        <div class="image-container">
          <img
            class="bottom-right-image image-style"
            :src="props.roomData?.images?.[3]?.links?.['350px']?.href"
          />
        </div>
      </div>
    </div>
    <div class="details">
      <div class="room-header">
        <div class="room-name-group">
          <div class="room-name">
            {{ props.roomData?.offers?.[0]?.room_name }}
          </div>
          <div class="room-info-group">
            <div class="icon-text">
              <font-awesome-icon icon="fa-solid fa-bed" size="sm" />
              <div>{{ props.roomData?.offers?.[0]?.room_bed_groups }}</div>
            </div>
            <div class="icon-text">
              <div>
                <font-awesome-icon icon="fa-regular fa-square" size="sm" />
                {{ props.roomData?.offers?.[0]?.room_size_sqm }} m²
              </div>
            </div>
          </div>
        </div>
        <div class="see-details">See details</div>
      </div>
      <div
        class="offers"
        v-for="offer in props.roomData?.offers"
        :key="offer.id"
      >
        <OfferCard :offer="offer" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.details {
  flex: 1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  text-align: left;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
}

.offers {
  width: 100%;
  border-top: 1px solid #e0e0e0;
}
.see-details {
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500 !important;
}

.room-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  align-items: start;
  width: 90%;
}

.room-name {
  font-size: 18px;
  font-weight: 500 !important;
}
.icon-text {
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
}
.room-info-group {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
}

.room-images {
  width: 33.33%;
  height: 300px;
  gap: 4px;
  display: flex;
  flex-direction: column;
}

.room-name-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.room-detail-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.image-style {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.first-image-row {
  flex: 1;
  border-radius: 6px 6px 0 0;
}
.second-image-row {
  height: 33.33%;
  gap: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.bottom-left-image {
  border-radius: 0 0 0 6px;
}
.bottom-right-image {
  border-radius: 0 0 6px 0;
}
.room-container {
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  flex: wrap;
  justify-content: flex-start;
  gap: 16px;
}

@media only screen and (max-width: 600px) {
  .room-container {
    flex-direction: column;
  }
  .room-images {
    width: 100%;
  }
  .room-name {
    font-size: 16px;
  }
  .room-info-group {
    font-size: 14px;
  }

  .see-details {
    font-size: 12px;
  }
}
</style>
