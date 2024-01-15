<script setup>
import HotelDetails from "./pages/hotel-details.vue";
import AppToolbar from "./components/app-toolbar.vue";
</script>

<template>
  <AppToolbar />
  <HotelDetails />
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Google+Sans:400,500,700&display=swap");
#app {
  text-align: center;
  color: #000000de;
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
  font-family: inherit;
}
html {
  font-size: 16px;
  overflow-x: hidden;
  box-sizing: border-box;
  overflow-y: scroll;
}
.button {
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  font-size: 0.875rem;
  background-color: #1a73e8 !important;
  font-family: Google Sans, BlinkMacSystemFont, sans-serif;
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
.secondary {
  color: rgba(0, 0, 0, 0.6) !important;
}
</style>
