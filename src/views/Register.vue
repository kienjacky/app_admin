<template>
    <form>
      <!-- 2 column grid layout with text inputs for the first and last names -->
      <MDBRow class="mb-4">
        <MDBCol>
          <MDBInput
            type="text"
            label="First name"
            id="form3FirstName"
            v-model="form3FirstName"
          />
        </MDBCol>
        <MDBCol>
          <MDBInput
            type="text"
            label="Last name"
            id="form3LastName"
            v-model="form3LastName"
          />
        </MDBCol>
      </MDBRow>
      <!-- Email input -->
      <MDBInput
        type="email"
        label="Email address"
        id="form3Email"
        v-model="form3Email"
        wrapperClass="mb-4"
      />
      <!-- Password input -->
      <MDBInput
        type="password"
        label="Password"
        id="form3Password"
        v-model="form3Password"
        wrapperClass="mb-4"
      />
  
      <!-- Checkbox -->
      <MDBCheckbox
        label="Remember me"
        id="form3SubscribeCheck"
        v-model="form3SubscribeCheck"
        wrapperClass="d-flex justify-content-center mb-4"
      />
  
      <!-- Submit button -->
      <MDBBtn color="primary" block class="mb-4"> Sign up </MDBBtn>
  
      <!-- Register buttons -->
      <div class="text-center">
        <p>or sign up with:</p>
        <MDBBtn color="secondary" floating class="mx-1">
          <MDBIcon iconStyle="fab" icon="facebook-f" />>
        </MDBBtn>
  
        <MDBBtn color="secondary" floating class="mx-1">
          <MDBIcon iconStyle="fab" icon="google" />
        </MDBBtn>
  
        <MDBBtn color="secondary" floating class="mx-1">
          <MDBIcon iconStyle="fab" icon="twitter" />
        </MDBBtn>
  
        <MDBBtn color="secondary" floating class="mx-1">
          <MDBIcon iconStyle="fab" icon="github" />
        </MDBBtn>
      </div>
    </form>
  </template>

  <script>
  import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  } from "mdb-vue-ui-kit";
  import { ref } from "vue";

  const form3FirstName = ref("");
  const form3LastName = ref("");
  const form3Email = ref("");
  const form3Password = ref("");
  const form3SubscribeCheck = ref(true);
</script>