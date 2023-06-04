<template>
  <h1>{{ $t("nav.home") }}</h1>
  <p>{{ $t("home.about1") }}</p>
  <p>{{ $t("home.about2") }}</p>
  <p>{{ $t("home.about3") }}</p>
  <p>{{ $t("home.about4") }}</p>
  <div class="diploms">
    <img src="@/assets/img/CSS.jpg" alt="" />
    <img src="@/assets/img/JS.jpg" alt="" />
  </div>
  <p>{{ $t("home.about5") }}</p>
  <div class="resume-skills">
    <div class="skills-block">
      <h6>Языки разметки и программирования:</h6>
      <div class="skill">
        <img src="@/assets/img/icons/HTML.png" alt="HTML" />
        <span>HTML5</span>
      </div>
      <div class="skill">
        <img src="@/assets/img/icons/CSS.png" alt="CSS" />
        <span>CSS3</span>
      </div>
      <div class="skill">
        <img src="@/assets/img/icons/JS.png" alt="Javascript" />
        <span>Javascript</span>
      </div>
      <h6>Графические редакторы и дизайн</h6>
      <div class="skill">
        <img src="@/assets/img/icons/Photoshop.png" alt="Photoshop" />
        <span>Photoshop</span>
      </div>
      <div class="skill">
        <img src="@/assets/img/icons/Figma.png" alt="Figma" />
        <span>Figma</span>
      </div>
      <h6>Таск-менеджеры и контроль версий</h6>
      <div class="skill">
        <img src="@/assets/img/icons/Git.png" alt="GIT" />
        <span>GIT</span>
      </div>
      <div class="skill">
        <img src="@/assets/img/icons/Gulp.png" alt="Gulp" />
        <span>Gulp</span>
      </div>
    </div>
    <div class="skills-block">
      <h6>Фреймворки, библиотеки и препроцессоры:</h6>
      <div class="skill">
        <img src="@/assets/img/icons/JQuery.png" alt="JQuery" />
        <span>JQuery</span>
      </div>
      <div class="skill">
        <img src="@/assets/img/icons/Bootstrap.png" alt="Bootstrap" />
        <span>Bootstrap</span>
      </div>
      <div class="skill">
        <img src="@/assets/img/icons/Sass.png" alt="Sass/Scss" />
        <span>SASS/SCSS</span>
      </div>
      <div class="skill">
        <img src="@/assets/img/icons/Sass.png" alt="Tailwind" />
        <span>Tailwind</span>
      </div>
      <div class="skill">
        <img src="@/assets/img/icons/Sass.png" alt="Vue" />
        <span>Vue</span>
      </div>
      <div class="skill">
        <img src="@/assets/img/icons/Sass.png" alt="Laravel" />
        <span>Laravel</span>
      </div>
    </div>
    <div class="skills-block">
      <h6>CMS - управление сайтом через админку</h6>
      <div class="skill">
        <img src="@/assets/img/icons/MODX.png" alt="MODX" />
        <span>ModX</span>
      </div>
      <div class="skill">
        <img src="@/assets/img/icons/EVO.png" alt="Evo CMS" />
        <span>EVO</span>
      </div>
      <div class="skill">
        <img src="@/assets/img/icons/WordPress.png" alt="Wordpress" />
        <span>Wordpress</span>
      </div>
      <h6>Серверные языки и базы данных</h6>
      <div class="skill">
        <img src="@/assets/img/icons/PHP.png" alt="PHP" />
        <span>PHP</span>
      </div>
      <div class="skill">
        <img src="@/assets/img/icons/MySQL.png" alt="MySQL" />
        <span>MySQL</span>
      </div>
    </div>
  </div>
  <p>{{ $t("home.about6") }}</p>
  <p>{{ $t("home.about7") }}</p>
  <p>{{ $t("home.about8") }}</p>
</template>

<script>
export default {
  setup() {
    const skillsLang = [
      { name: "HTML", img: "HTML" },
      { name: "CSS", img: "CSS" },
      { name: "Javascript", img: "" },
    ];

    const imageUrl = new URL("./logo.png", import.meta.url).href;

    return { skillsLang, imageUrl };
  },
};
</script>

<style scoped>
.diploms {
  display: flex;
}
.diploms img {
  width: 50%;
  max-width: 400px;
  margin-right: 15px;
}
.resume-skills {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  margin-top: 30px;
}

.skills-block {
  -webkit-box-flex: 0;
  -ms-flex: 0 32%;
  flex: 0 32%;
  margin-bottom: 2%;
}

.skills-block h6 {
  margin: 30px 0 20px;
  font-size: 15px;
  font-weight: 600;
}

.skills-block h6::after {
  content: "";
  display: block;
  width: 150px;
  height: 3px;
  background: #e30613;
  margin-top: 6px;
}

.skill {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 10px 0;
}

.skill img {
  width: 40px;
  height: 40px;
  display: block;
  margin-right: 10px;
}
</style>
