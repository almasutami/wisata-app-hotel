<script setup>
import { defineProps } from "vue";
const props = defineProps({
  offer: Object,
});
</script>

<template>
  <div class="offer-container">
    <div class="left-container">
      <div>
        {{
          props.offer?.meal_plan_code === "BB"
            ? "Free Breakfast"
            : "Without Breakfast"
        }}
      </div>
      <div>
        {{
          props.offer?.cancel_policy_code === "FC"
            ? "Free Cancellation"
            : "Non Refundable"
        }}
      </div>
      <div>Rp {{ props.offer?.price_total }} / night *</div>
      <div>after tax & fees</div>
      <div>*Member-only price, valid in app only</div>
    </div>
    <div class="right-container">
      <div class="icon-group">
        <font-awesome-icon icon="fa-regular fa-copy" size="xl" />
        <font-awesome-icon icon="fa-solid fa-vector-square" size="xl" />
        <font-awesome-icon icon="fa-solid fa-ellipsis" size="xl" />
      </div>
      <div class="book-group">
        <button class="button">Book Now</button>
        <div>Collect {{ props?.offer?.pricing_data?.wisata_point }} points</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.offer-container {
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
}
.left-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
}
.right-container {
  display: flex;
  flex-direction: column;
  align-items: end;
  text-align: right;
  justify-content: space-between;
}
.icon-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}
.book-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
@media only screen and (max-width: 600px) {
  .offer-container {
    font-size: 12px;
  }
  .left-container {
    max-width: 50%;
    flex-direction: column;
    gap: 4px;
  }
  .icon-group {
    gap: 8px;
  }
}
</style>
