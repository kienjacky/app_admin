<template>
  <div>
    <sidebar
        @search-input-emit="search"
    />
  </div>

  <div class="main-header w-100">
    <Header></Header>
  </div>
  <router-view/>
</template>

<script>
// import { defineComponent, ref } from "vue";
import axios from "axios";
import Sidebar from "@/component/Sidebar.vue";
import Header from "@/component/Header.vue";
export default ({
  name: "Home",
  components: {
    Sidebar,
    Header
  },
  data() {
    return {
      users: [],
      errors: []
    }
  },

  methods: {
    search() {

    }
  },
  // lấy dữ liệu khi component được tạo thành công
  created() {
    axios.get(`user`)
        .then(response => {
          this.users = response.data.data
        })
        .catch(e => {
          this.errors.push(e)
        })
  }

  // async created() {
  //   const response = await axios.get('user');
  //
  //   console.log("aaaa = "+response.data);
  // }
});
</script>

<style>
.main-header {
  margin-left: -15.5rem !important;
  position: relative;
  z-index: 2023;
}
</style>
