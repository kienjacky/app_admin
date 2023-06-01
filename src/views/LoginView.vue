<template>
  <div class="container" id="frm_login">
    <Form  @submit="handleSubmit" :validation-schema="schema" v-slot="{ errors }">
      <h2 class="mb-3 txt-login">Login</h2>
      <div class="input-group mb-3">
        <!--        <label>Username</label>-->
        <Field name="username" type="text" class="form-control" v-model="username" :class="{ 'is-invalid': errors.username }" placeholder="Please enter username"/>
        <div class="input-group-append">
          <div class="input-group-text">
            <span class="fas fa-user"></span>
          </div>
        </div>
        <div class="invalid-feedback text-danger">{{errors.username}}</div>
      </div>
      <div class="input-group mb-3">
        <Field name="password" type="password" class="form-control" v-model="password" :class="{ 'is-invalid': errors.password }"  placeholder="Please enter password"/>
        <div class="input-group-append">
          <div class="input-group-text">
            <span class="fas fa-lock"></span>
          </div>
        </div>
        <div class="invalid-feedback text-danger">{{errors.password}}</div>
      </div>
      <!--      <div class="alternative-option mt-4 mb-4">-->
      <!--        You don't have an account? <span @click="moveToRegister">Register</span>-->
      <!--      </div>-->
      <button type="submit" class="btn btn-primary mt-4" id="login_button">
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
import { toast } from "vue3-toastify";
import 'vue3-toastify/dist/index.css'

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
      schema
    };
  },
  methods: {
    async handleSubmit() {
      await axios.post('auth/signin', {
        username: this.username,
        password: this.password
      }).then((response) => {
        const getRole = response.data.data.roles;

        if (getRole === "[ROLE_ADMIN]") {
          localStorage.setItem('token', response.data.data.accessToken);
          this.$router.push("/dashboard");
        }else {
          toast.error("Account does not have permission to login", {
            autoClose: 3000
          })
        }
      }).catch(function () {
        toast.error("Username or Password is not valid!", {
          autoClose: 3000
        })
      });
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
};
</script>

<style>
.text-danger {
  color: red;
}
#frm_login {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 28% !important;
  transform: translate(-50%, -50%);
  border: 1px solid lightgray;
  padding: 4rem 4rem;
  border-radius: 5px;
  background: #fefefe;
}
.txt-login {
  text-align: center;
}
#login_button {
  padding: 2% 45.5%;
}
</style>
