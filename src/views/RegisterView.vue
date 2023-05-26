<template>
  <div class="container">
    <form @submit.prevent="handleSubmit" id="frm_register">
      <h2 class="mb-3">Register</h2>
      <div class="input">
        <label for="username">Username</label>
        <input
            class="form-control"
            type="text"
            name="username"
            v-model="username"
            placeholder="Username"
        />
      </div>
      <div class="input">
        <label for="email">Email address</label>
        <input
            class="form-control"
            type="text"
            name="email"
            v-model="email"
            placeholder="email@adress.com"
        />
      </div>
      <div class="input">
        <label for="address">Address</label>
        <input class="form-control"
               type="text"
               name="address"
               v-model="address"
               placeholder="Address"
        />
      </div>
      <div class="input">
        <label for="phone">Phone</label>
        <input class="form-control"
               type="text"
               name="phone"
               v-model="phone"
               placeholder="Phone"
        />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input
            class="form-control"
            type="password"
            name="password"
            v-model="password"
            placeholder="password123"
        />
      </div>

      <div class="alternative-option mt-4">
        Already have an account? <span @click="moveToLogin">Login</span>
      </div>

      <button type="submit" id="register_button" class="mt-4 btn-pers">
        Register
      </button>
    </form>
  </div>
</template>

<script>
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      username: '',
      email: '',
      address: '',
      phone: '',
      password: '',
    };
  },
  methods: {
    async handleSubmit() {
       const response = await axios.post('/auth/signup', {
         username: this.username,
         email: this.email,
         address: this.address,
         phone: this.phone,
         password: this.password,
         role: ["admin"]
       });
      console.log(response)
      this.$router.push("/");
       // if (response.data.status == 200) {
       //   this.$router.push("/");
       // }else {
       //   alert("Loi dang ky")
       // }
      //
    },
    moveToLogin() {
      this.$router.push("/");
    },
  },
};
</script>