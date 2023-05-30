<template>
  <div class="container">
    <Form @submit.prevent="handleSubmit" id="frm_register"  :validation-schema="schema" v-slot="{ errors }">
      <h2 class="mb-3">Register</h2>
      <div class="input">
        <label for="username">Username <span class="text-danger">*</span></label>
        <Field
            class="form-control"
            type="text"
            name="username"
            v-model="username"
            :class="{ 'is-invalid': errors.username }"
            placeholder="Username"
        />
        <div class="invalid-feedback"><span class="text-danger">{{errors.username}}</span></div>
      </div>
      <div class="input">
        <label for="email">Email address <span class="text-danger">*</span></label>
        <Field
            class="form-control"
            type="text"
            name="email"
            v-model="email"
            :class="{ 'is-invalid': errors.email}"
            placeholder="email@adress.com"
        />
        <div class="invalid-feedback"><span class="text-danger">{{errors.email}}</span></div>
      </div>
      <div class="input">
        <label for="address">Address</label>
        <Field class="form-control"
               type="text"
               name="address"
               v-model="address"
               :class="{ 'is-invalid': errors.address}"
               placeholder="Address"
        />
        <div class="invalid-feedback"><span class="text-danger">{{errors.address}}</span></div>
      </div>
      <div class="input">
        <label for="phone">Phone <span class="text-danger">*</span></label>
        <Field class="form-control"
               type="text"
               name="phone"
               v-model="phone"
               v-validate="'required|min:3|max:12'"
               :class="{ 'is-invalid': errors.phone}"
               placeholder="Phone"
        />
        <div class="invalid-feedback"><span class="text-danger">{{ errors.phone }}</span></div>
      </div>
      <div class="input">
        <label for="password">Password <span class="text-danger">*</span></label>
        <Field
            class="form-control"
            type="password"
            name="password"
            v-model="password"
            :class="{ 'is-invalid': errors.password}"
            placeholder="password123"
        />
        <div class="invalid-feedback"><span class="text-danger">{{errors.password}}</span></div>
      </div>

      <div class="input">
        <label for="confirmPassword">Confirm Password <span class="text-danger">*</span></label>
        <Field name="confirmPassword"
               class="confirmPassword"
               type="password"
               v-model="confirmPassword"
               :class="{ 'is-invalid': errors.confirmPassword}"
               placeholder="Password Confirm"
               />
        <div class="invalid-feedback"><span class="text-danger">{{errors.confirmPassword}}</span></div>
      </div>

      <div class="alternative-option mt-4">
        Already have an account? <span @click="moveToLogin">Login</span>
      </div>

      <button type="submit" id="register_button" class="mt-4 btn-pers">
        Register
      </button>
    </Form>
  </div>
</template>

<script>
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';


export default {
  components: {
    Form,
    Field
  },
  name: "Register",
  data() {
    const schema = Yup.object().shape({
      username: Yup.string()
          .required('Username is required'),
      phone: Yup.string()
          .required('Phone is required')
          .max(12, 'Phone must be at 12 characters')
          .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Phone is in valid'),
      email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
      password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required')
    });

    return {
      schema
    }
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
       if (response.data.status == 200) {
         this.$router.push("/");
       }else {
         this.$router.push("/register");
       }
    },
    moveToLogin() {
      this.$router.push("/");
    },
  },
};
</script>