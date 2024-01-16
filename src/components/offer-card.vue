<script setup>
import { defineProps } from "vue";
const props = defineProps({
  offer: Object,
});
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiCoffeeOffOutline,
  mdiCoffee,
  mdiCreditCardOffOutline,
  mdiCreditCardCheckOutline,
} from "@mdi/js";
</script>

<template>
  <div class="offer-container">
    <div class="left-container">
      <div v-if="props.offer?.meal_plan_code === 'BB'" class="offer green">
        <svg-icon type="mdi" class="mdi" :path="mdiCoffee"></svg-icon>
        <div>Free Breakfast</div>
      </div>
      <div v-else class="offer">
        <svg-icon type="mdi" class="mdi" :path="mdiCoffeeOffOutline"></svg-icon>
        <div>Without Breakfast</div>
      </div>
      <div v-if="props.offer?.cancel_policy_code === 'FC'" class="offer green">
        <svg-icon
          type="mdi"
          class="mdi"
          :path="mdiCreditCardCheckOutline"
        ></svg-icon>
        <div>{{ offer?.cancel_policy_description }}</div>
      </div>
      <div v-else class="offer red">
        <svg-icon
          type="mdi"
          class="mdi"
          :path="mdiCreditCardOffOutline"
        ></svg-icon>
        <div>Non Refundable</div>
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

.offer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.54);
}
.offer.green {
  color: rgb(0, 188, 0);
}
.offer.red {
  color: rgb(255, 40, 40);
}

.mdi {
  height: 20px;
  width: 20px;
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
