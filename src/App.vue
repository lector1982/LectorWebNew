<template>
  <div class="wrapper">
    <Nav />

    <router-view v-slot="{ Component, route }">
      <transition name="slide" :key="route" mode="out-in" appear>
        <div class="page" :key="route.name">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Nav from "./components/NavigationBlock.vue";

export default {
  components: { Nav },
};
</script>

<style>
body,
#app {
  height: 100vh;
  /* overflow: hidden; */
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease-in-out;
}
.wrapper {
  width: 100%;
  display: flex;
  overflow: hidden;
}
.page {
  width: calc(100% - 300px);
  height: 100vh;
  background: #fff;
  margin-left: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.page__inner {
  height: 100vh;
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  padding: 25px;
}
.page__inner::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}
.page__inner::-webkit-scrollbar {
  width: 16px;
  background-color: #f5f5f5;
}
.page__inner::-webkit-scrollbar-thumb {
  border-radius: 2px;
  -webkit-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3);
  background-color: #d62929;
}
.page p {
  margin: 20px 0;
  font-size: 18px;
  font-weight: 500;
}
.page h1 {
  display: inline-block;
  margin-bottom: 25px;
  font-size: 46px;
  position: relative;
}
.page h1::after {
  content: "";
  display: block;
  height: 7px;
  background: #d62929;
}
.page h1::before {
  content: "";
  display: block;
  height: 7px;
  width: 100px;
  position: absolute;
  bottom: -15px;
  background: #d62929;
}
.router-link-exact-active {
  color: #d62929;
}
</style>
