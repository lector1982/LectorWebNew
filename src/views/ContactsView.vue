<template>
  <h1>{{ $t("nav.contacts") }}</h1>
  <p><a href="">+380981128480</a></p>
  <p><a href="">+353830810363</a></p>
  <p>
    <a href="https://www.linkedin.com/in/lectorweb" target="_blank">Linkedin</a>
  </p>
  <p>
    <a href="https://www.facebook.com/lector1982" target="_blank">Facebook</a>
  </p>
  <p>
    <a href="https://github.com/lector1982" target="_blank">Github</a>
  </p>
  <p>
    <a href="https://wa.me/+353830810363" target="_blank">Whatsapp</a>
  </p>

  <!-- <form class="form" ref="form" @submit.prevent="sendMail">
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send" />
  </form> -->
  <span v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }} </span>
  <input type="text" placeholder="Email" v-model="state.email" />
  <button>Submit</button>
</template>

<script>
import emailjs from "emailjs-com";
// import { ref } from "vue";

import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive, computed } from "vue";

export default {
  setup() {
    const state = reactive({
      email: "",
    });
    const rules = computed(() => {
      email: {
        required;
      }
    });

    const v$ = useValidate(rules, state);

    return { state, v$ };
  },
};

// export default {
//   setup() {
//     const state = reactive({
//             email: '',
//             password: {
//                 password: '',
//                 confirm: '',
//             },
//         })
//         const rules = computed(() => {
//             email: { required },
//             password: {
//                 password: { required },
//                 confirm: { required },
//             }
//         })
//     // const form = ref(null);
//     // const inputFieldReset = ref(null);

//     // const sendMail = () => {
//     //   emailjs
//     //     .sendForm(
//     //       "service_6p5aqrn",
//     //       "template_0ntbfkf",
//     //       form.value,
//     //       "4YsQsuwGCTST9TdRq"
//     //     )
//     //     .then(
//     //       () => {
//     //         alert("Message sent!");
//     //         inputFieldReset.value = " ";
//     //       },
//     //       (error) => {
//     //         alert("Message not sent", error);
//     //       }
//     //     );
//     // };

//     // return { form, inputFieldReset, sendMail };
//   }
// }
</script>

<style scoped></style>
