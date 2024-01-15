<script setup>
import HotelDetails from "./pages/hotel-details.vue";
import AppToolbar from "./components/app-toolbar.vue";
</script>

<template>
  <AppToolbar />
  <HotelDetails />
</template>

<style>
#app {
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
  margin: 0;
  padding: 0;
  font-family: Google Sans, BlinkMacSystemFont, sans-serif;
  line-height: 1.5;
  display: flex;
  position: relative;
  flex: 1 1 auto;
  flex-direction: column;
  max-width: 100%;
}
body {
  display: block;
  margin: 0;
  padding: 0;
  background-color: rgb(255, 255, 255);
  height: calc(var(--vh, 1vh) * 100) !important;
  max-width: 1032px;
  margin-left: auto;
  margin-right: auto;
}
html {
  font-size: 16px;
  overflow-x: hidden;
  box-sizing: border-box;
  overflow-y: scroll;
}
</style>
