<template>
  <h1>{{ $t("nav.services") }}</h1>
  <div class="services__container">
    <div class="service service__layout">
      <h4>
        <img
          v-svg-inline
          class="icon"
          src="@/assets/img/code.svg"
          alt='$t("services.service1")'
        />
        <span>{{ $t("services.service1") }}</span>
      </h4>
      <div class="service__desc">
        <p>{{ $t("services.service1-text") }}</p>
      </div>
    </div>

    <div class="service service__cms">
      <h4>
        <img
          v-svg-inline
          class="icon"
          src="@/assets/img/key.svg"
          alt='$t("services.service2")'
        />
        <span>{{ $t("services.service2") }}</span>
      </h4>
      <div class="service__desc">
        <p>{{ $t("services.service2-text") }}</p>
      </div>
    </div>

    <div class="service service__support">
      <h4>
        <img
          v-svg-inline
          class="icon"
          src="@/assets/img/key.svg"
          alt='$t("services.service2")'
        />
        <span>{{ $t("services.service3") }}</span>
      </h4>
      <div class="service__desc">
        <p>{{ $t("services.service3-text") }}</p>
      </div>
    </div>

    <div class="service service__design">
      <h4>
        <img
          v-svg-inline
          class="icon"
          src="@/assets/img/brush.svg"
          alt='$t("services.service4")'
        />
        <span>{{ $t("services.service4") }}</span>
      </h4>
      <div class="service__desc">
        <p>{{ $t("services.service4-text") }}</p>
      </div>
    </div>

    <div class="service service__redesign">
      <h4>
        <img
          v-svg-inline
          class="icon"
          src="@/assets/img/redesign.svg"
          alt='$t("services.service5")'
        />
        <span>{{ $t("services.service5") }}</span>
      </h4>
      <div class="service__desc">
        <p>{{ $t("services.service5-text") }}</p>
      </div>
    </div>

    <div class="service service__education">
      <h4>
        <img
          v-svg-inline
          class="icon"
          src="@/assets/img/education.svg"
          alt='$t("services.service6")'
        />
        <span>{{ $t("services.service6") }}</span>
      </h4>
      <div class="service__desc">
        <p>{{ $t("services.service6-text") }}</p>
      </div>
    </div>
    <!-- <div v-for="item in services" class="service">
      {{ item.title }} - {{ item.desc }} - {{ item.color }}
    </div> -->
  </div>
</template>

<script>
export default {
  setup() {
    const services = [
      { title: "1111", desc: "2222", color: "red" },
      { title: "3333", desc: "4444", color: "green" },
    ];

    return { services };
  },
};
</script>

<style>
.services__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.service {
  width: calc(50% - 30px);
  margin: 0 15px 30px;
}
.service h4 {
  background: #000;
  border-radius: 6px 6px 0 0;
  padding: 10px;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
}
.service h4 svg {
  margin-right: 15px;
  width: 30px;
}
.service__desc {
  border: 1px solid #000;
  padding: 15px;
  border-radius: 0 0 6px 6px;
}
.service__desc p {
  margin: 0 0 20px;
}
.service__layout h4 {
  background: #53a332;
}
.service__layout .service__desc {
  border-color: #53a332;
}
.service__cms h4 {
  background: #4e7dd3;
}
.service__cms .service__desc {
  border-color: #4e7dd3;
}
.service__support h4 {
  background: #bdcf2b;
}
.service__support .service__desc {
  border-color: #bdcf2b;
}
.service__design h4 {
  background: #d32173;
}
.service__design .service__desc {
  border-color: #d32173;
}
.service__design h4 {
  background: #d32173;
}
.service__design .service__desc {
  border-color: #d32173;
}
.service__redesign h4 {
  background: #ffb125;
}
.service__redesign .service__desc {
  border-color: #ffb125;
}
.service__education h4 {
  background: #c925ff;
}
.service__education .service__desc {
  border-color: #c925ff;
}
</style>
