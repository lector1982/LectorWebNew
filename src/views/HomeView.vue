<template>
  <div class="page__inner page__home">
    <div class="home__text">
      <h1 class="hello">
        {{ $t("home.hello") }} <strong>{{ $t("home.name") }}</strong>
      </h1>
      <h2 class="i-am">
        {{ $t("home.who") }} <strong>{{ $t("home.web") }}</strong>
      </h2>
      <p class="desc">{{ $t("home.desc") }}</p>
      <p class="desc">{{ $t("home.desc2") }}</p>

      <RouterLink :to="Tr.i18nRoute({ name: 'about' })" class="home__more">{{
        $t("home.more")
      }}</RouterLink>
    </div>
    <div class="home__img">
      <img src="@/assets/img/photo.png" alt="LectorWeb" />
    </div>
  </div>
</template>

<script>
import Tr from "@/i18n/translation";
export default {
  setup() {
    return { Tr };
  },
};
</script>

<style scoped>
.page__home {
  position: static;
  height: auto;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: inherit;
}
.home__text {
  width: 80%;
  margin-right: 30px;
}
.home__text .hello,
.i-am {
  font-size: 42px;
  margin-bottom: 0;
}
.hello strong {
  font-family: "Comfortaa", cursive;
  color: #d62929;
}
.i-am {
  font-family: "Comfortaa", cursive;
  font-size: 38px;
  margin-bottom: 30px;
}
.home__text h1::after,
.home__text h1::before {
  display: none;
}
.home__more {
  background: #d62929;
  display: inline-block;
  margin-top: 40px;
  color: #fff;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 30px;
  transition: 0.3s;
  text-transform: capitalize;
}
.home__more:hover {
  background: #ff6565;
}
.home__text .desc {
  font-weight: 400;
  margin-bottom: 20px;
  font-size: 22px;
  max-width: 800px;
}
.home__img {
  background: #000;
  width: 20%;
  padding: 15px;
  position: relative;
  margin-right: 50px;
}
.home__img::before {
  content: "";
  position: absolute;
  width: 60px;
  height: 60px;
  border-top: 7px solid #d62929;
  border-left: 7px solid #d62929;
  top: -35px;
  left: -35px;
}
.home__img::after {
  content: "";
  position: absolute;
  width: 60px;
  height: 60px;
  border-bottom: 7px solid #d62929;
  border-right: 7px solid #d62929;
  bottom: -35px;
  right: -35px;
}
.home__img img {
  max-width: 100%;
}
</style>
