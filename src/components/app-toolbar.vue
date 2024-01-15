<script setup>
import hotelDetails from "../source/hotel-data.json";
const hotelData = hotelDetails;
</script>

<template>
  <div class="toolbar">
    <div class="toolbar-container">
      <img alt="Vue logo" src="../assets/logo.png" class="toolbar-logo" />
      <div class="searchbar-container">
        <div class="search-input">
          <font-awesome-icon icon="fa-solid fa-search" class="search-icon" />
          <div>{{ hotelData?.name }}</div>
          <div>{{ hotelData?.name }}</div>
        </div>
      </div>
      <button class="button">Sign in</button>
    </div>
  </div>
</template>

<style>
.toolbar {
  padding: 4px 0px;
  height: 64px;
}

.toolbar-container {
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.toolbar-logo {
  height: 42px;
}

.searchbar-container {
  width: 590px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.search-icon {
  margin-right: 8px;
  color: #888;
}

.search-input {
  margin-left: 24px;
  margin-right: 24px;
  height: 40px;
  width: 80%;
  padding: 0 16px;
  background-color: #f5f5f5;
  font-size: 0.875rem;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.14),
    0 0 0 0 rgba(0, 0, 0, 0.12) !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  outline: none;
}

.search-input:hover {
  cursor: pointer;
  background-color: #ede8e8;
}

.button {
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  font-size: 0.875rem;
  background-color: #1a73e8 !important;
  border: none;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  font-weight: 500;
  justify-content: center;
  outline: 0;
  text-decoration: none;
  color: #ffffff;
}
</style>
