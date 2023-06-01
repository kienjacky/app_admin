<template>
  <div class="container regist-member justify-content-center align-content-center">
    <Form @submit="handleSubmit" id="frm_register w-100"  :validation-schema="schema" v-slot="{ errors }">
      <div class="row">
        <div class="col-6">
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
        </div>

        <div class="col-6">
          <div class="input">
            <label for="phone">Phone <span class="text-danger">*</span></label>
            <Field class="form-control"
                   type="text"
                   name="phone"
                   v-model="phone"
                   v-validate="'required|min:3|max:12'"
                   :class="{ 'is-invalid': errors.phone}"
                   placeholder="024xxxxxxxx"
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
                   class="form-control"
                   type="password"
                   v-model="confirmPassword"
                   :class="{ 'is-invalid': errors.confirmPassword}"
                   placeholder="Password Confirm"
            />
            <div class="invalid-feedback"><span class="text-danger">{{errors.confirmPassword}}</span></div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-3">
            <button type="submit" id="btn-regist" class="mt-4 btn btn-primary">Register</button>
            <button type="submit" id="btn-cancel" class="mt-4 btn btn-default">Cancel</button>
          </div>
        </div>
<!--        <div class="col align-self-center">-->
<!--          <button type="submit" id="register_button" class="mt-4 btn btn-primary">Register</button>-->
<!--          <button type="submit" id="register_button" class="mt-4 btn btn-default">Cancel</button>-->
<!--        </div>-->
      </div>
    </Form>
  </div>
</template>

<script>
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { toast } from "vue3-toastify";
import 'vue3-toastify/dist/index.css'

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
          .max(11, 'Phone must be at 11 characters')
          .matches(/^(([+]{0,1}\d{2})|\d?)[\s-]?[0-9]{2}[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/, 'Phone is in valid'),
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
      const response = await axios.post('auth/signup', {
        username: this.username,
        email: this.email,
        address: this.address,
        phone: this.phone,
        password: this.password,
        role: ["admin"]
      });

      if (response.data.status == 200) {
        toast.success('Register is successful', {
          autoClose: 40000,
        });
        // this.$router.push("/");
      }else {
        toast.error("Register is error", {
          autoClose: 40000
        })
        this.$router.push("/register");
      }
    },
    moveToLogin() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
#frm_register {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4rem 4rem;
  border-radius: 5px;
}
.regist-member {
  padding-top: 20%;
}
#btn-cancel {
  margin-left: 1rem;
}
#btn-regist, #btn-cancel {
  padding: 0.3rem 2rem;
}
</style>
