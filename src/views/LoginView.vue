<template>
  <div class="container" id="frm_login">
    <Form  @submit="handleSubmit" :validation-schema="schema" v-slot="{ errors }">
      <h2 class="mb-3">Login</h2>
      <div class="input">
        <label>Username</label>
        <Field name="username" type="text" class="form-control" v-model="username" :class="{ 'is-invalid': errors.username }" />
        <div class="invalid-feedback text-danger">{{errors.username}}</div>
      </div>
      <div class="input">
        <label for="password">Password</label>
        <Field name="password" type="password" class="form-control" v-model="password" :class="{ 'is-invalid': errors.password }" />
        <div class="invalid-feedback text-danger">{{errors.password}}</div>
      </div>
      <div class="alternative-option mt-4 mb-4">
        You don't have an account? <span @click="moveToRegister">Register</span>
      </div>
      <button type="submit" class="btn-pers" id="login_button">
        Login
      </button>
    </Form>
  </div>
</template>

<script>
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import { Field, Form } from "vee-validate";
import * as Yup from 'yup';

export default {
  name: "Login",
  components: {
    Form,
    Field,
  },

  data() {
    const schema = Yup.object().shape({
      username: Yup.string()
          .required('Username is required'),
      password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required')
    });
    return {
      // username: "",
      // password: "",
      schema
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post('auth/signin', {
        username: this.username,
        password: this.password
      });

      const getRole = response.data.data.roles;

      if (getRole === "[ROLE_ADMIN]") {
        localStorage.setItem('token', response.data.data.accessToken)
        this.$router.push("/dashboard");
      } else {
        this.$router.push("/");
      }
    },
    // Register Path
    moveToRegister() {
      this.$router.push("/register");
    },

    // clear form
    clearForm(reset) {
      this.email = '';
      this.password = '';
      reset(); // reset validation states
    },
  },
};
</script>

<style>
.text-danger {
  color: red;
}
</style>
