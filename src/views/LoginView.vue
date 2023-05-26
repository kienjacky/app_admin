<template>
  <div class="container" id="frm_login">
    <form @submit.prevent="handleSubmit">
      <h2 class="mb-3">Login</h2>
      <div class="input">
        <label for="email">Username</label>
        <input
            class="form-control"
            type="text"
            name="username"
            v-model="username"
            placeholder="Please enter username"
        />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input
            class="form-control"
            type="password"
            name="password"
            v-model="password"
            placeholder="Please enter password"
        />
      </div>
      <div class="alternative-option mt-4 mb-4">
        You don't have an account? <span @click="moveToRegister">Register</span>
      </div>
      <button type="submit" class="btn-pers" id="login_button">
        Login
      </button>
    </form>
  </div>
</template>

<script>
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post('auth/signin', {
        username: this.username,
        password: this.password
      });
      localStorage.setItem('token', response.data.data.accessToken)
      this.$router.push("/home");
    },
    // Register Path
    moveToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>