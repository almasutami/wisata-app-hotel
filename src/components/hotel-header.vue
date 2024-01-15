<script setup>
import { defineProps } from "vue";
const props = defineProps({
  hotelData: Object,
});
</script>

<template>
  <div>
    <div class="hotel-header-container">
      <div class="hotel-title-small">{{ props.hotelData?.name }}</div>
      <div class="hotel-header-container-details">
        <div class="photo-container">
          <img
            :src="props.hotelData?.catalog_data?.hero_image"
            class="hotel-primary-photo"
          />
        </div>
        <div class="details-container">
          <div class="hotel-title-desktop">{{ props.hotelData?.name }}</div>
          <div class="secondary">
            {{ props.hotelData?.catalog_data?.category }}
          </div>
          <div>{{ props.hotelData?.catalog_data?.address }}</div>
          <div class="review-group">
            <div
              class="pie animate no-round"
              :style="`--p: ${props.hotelData?.catalog_data?.review_rating};`"
            >
              <div class="pie-text">
                {{ props.hotelData?.catalog_data?.review_rating }}
              </div>
            </div>
            <div>Excellent</div>
            <div>·</div>
            <div>{{ props.hotelData?.catalog_data?.review_count }} reviews</div>
          </div>
          <div>
            {{ props.hotelData?.catalog_data?.headline }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hotel-header-container {
  padding: 0 0 16px 0;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.hotel-header-container-details {
  display: flex;
  flex-direction: row;
  align-items: start;
  width: 100%;
}

.photo-container {
  width: 33.3%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
}

.hotel-primary-photo {
  border-bottom: 1px solid #e0e0e0;
  padding: 0 14px 0 16px;
  width: 168px;
  height: 168px;
  object-fit: cover;
  border-radius: 50%;
}

.details-container {
  flex: 1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  text-align: left;
  width: 100%;
  gap: 4px;
  font-size: 15px;
  padding: 12px;
}
.review-group {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 8px;
}
.hotel-title-desktop {
  font-size: 20px;
  font-weight: 600;
  line-height: 2rem;
}

/* piechart component */
@property --p {
  syntax: "<number>";
  inherits: true;
  initial-value: 1;
}

.pie {
  --p: 20; /* the percentage */
  --b: 3px; /* the thickness */
  --c: rgb(161, 28, 180); /* the color */
  --w: 32px; /* the size*/
  width: var(--w);
  aspect-ratio: 1/1;
  position: relative;
  display: inline-grid;
  place-content: center;
  font-size: 25px;
  font-weight: bold;
}
.pie:before,
.pie:after {
  content: "";
  position: absolute;
  border-radius: 50%;
}
.pie:before {
  inset: 0;
  background: radial-gradient(farthest-side, var(--c) 98%, #0000) top/var(--b)
      var(--b) no-repeat,
    conic-gradient(var(--c) calc(var(--p) * 1%), #0000 0);
  -webkit-mask: radial-gradient(
    farthest-side,
    #0000 calc(99% - var(--b)),
    #000 calc(100% - var(--b))
  );
  mask: radial-gradient(
    farthest-side,
    #0000 calc(99% - var(--b)),
    #000 calc(100% - var(--b))
  );
}
.pie:after {
  inset: calc(50% - var(--b) / 2);
  background: var(--c);
  transform: rotate(calc(var(--p) * 3.6deg - 90deg))
    translate(calc(var(--w) / 2 - 50%));
}
.animate {
  animation: p 1s 0.5s both;
}
.no-round:before {
  background-size: 0 0, auto;
}
.no-round:after {
  content: none;
}
@keyframes p {
  from {
    --p: 0;
  }
}
.pie-text {
  font-size: 16px;
  color: rgb(161, 28, 180);
}

@media only screen and (max-width: 600px) {
  .hotel-primary-photo {
    width: 91px;
    height: 91px;
  }
  .details-container {
    padding: 12px;
  }
  .hotel-title-desktop {
    display: none;
  }
}
@media only screen and (min-width: 600px) {
  .hotel-title-small {
    display: none;
  }
}
</style>
