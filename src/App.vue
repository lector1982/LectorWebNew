<template>
  <div class="wrapper">
    <Nav />

    <router-view v-slot="{ Component, route }">
      <transition name="fade" :key="route" mode="out-in" appear>
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
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  /* transition: .3s ease-in-out; */
}
.wrapper {
  width: 100%;
  display: flex;
  height: 100vh;
}
.page {
  width: calc(100% - 200px);
  background: #fff;
  padding: 25px;
  overflow-y: auto;
  margin-left: 200px;
}
.page::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}
.page::-webkit-scrollbar {
  width: 16px;
  background-color: #f5f5f5;
}
.page::-webkit-scrollbar-thumb {
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
}
.page h1::after {
  content: "";
  display: block;
  height: 7px;
  background: #d62929;
}
.router-link-exact-active {
  color: #d62929;
}
</style>
