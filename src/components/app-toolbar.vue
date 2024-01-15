<script setup>
import hotelDetails from "../source/hotel-data.json";
const hotelData = hotelDetails;
</script>

<template>
  <div class="toolbar-container">
    <img alt="Vue logo" src="../assets/logo.png" class="toolbar-logo" />
    <div class="searchbar-container">
      <div class="search-input">
        <div class="search-input-group">
          <font-awesome-icon
            icon="fa-solid fa-search"
            size="xs"
            class="search-icon"
          />
          <div class="truncated">{{ hotelData?.name }}</div>
          <div>·</div>
          <div class="truncated">25 - 26 Jun</div>
        </div>
      </div>
    </div>
    <button class="button">Sign in</button>
  </div>
</template>

<style>
.toolbar-container {
  padding: 8px 16px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.toolbar-logo {
  height: 42px;
}

.searchbar-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.search-icon {
  size: 11px;
}

.search-input {
  height: 40px;
  width: 558px;
  padding: 0 16px;
  background-color: #f5f5f5;
  font-size: 0.875rem;
  border: none;
  border-radius: 4px;
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 600px) {
  .toolbar-logo {
    display: none;
  }

  .search-input {
    width: 70%;
    margin: 0;
  }

  .searchbar-container {
    margin: 0;
  }
}

.truncated {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.search-input-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  font-weight: 500;
  text-transform: none;
  width: 100%;
  gap: 8px;
}

.search-input:hover {
  cursor: pointer;
  background-color: #ede8e8;
}
@media only screen and (max-width: 600px) {
  .earch-input-group {
    font-size: 12px;
  }
}
</style>
