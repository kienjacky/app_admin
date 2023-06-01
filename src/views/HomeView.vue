<template>
  <div>
    <Sidebar/>
  </div>
  <div>
    <Header></Header>
  </div>
  <!--  <div>-->
  <!--    <sidebar-->
  <!--        @search-input-emit="search"-->
  <!--    />-->
  <!--  </div>-->

  <!--  Main Header-->
  <!--  <div class="main-header w-100">-->
  <!--    <Header></Header>-->
  <!--  </div>-->

  <!--  Main Content-->
  <!--  <div class="d-flex main-content h-100">-->
  <!--    <router-view/>-->
  <!--  </div>-->

  <!--  Main Footer-->
  <!--  <div class="main-footer">-->
  <!--    <Footer></Footer>-->
  <!--  </div>-->
</template>

<script>
// import { defineComponent, ref } from "vue";
import axios from "axios";
import Sidebar from "@/component/Sidebar.vue";
import Header from "@/component/Header.vue";
// import Footer from "@/component/Footer.vue";
export default ({
  name: "Home",
  components: {
    Sidebar,
    Header,
    // Footer,
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
  position: relative;
  z-index: 2023;
}
.main-footer {
  position: relative;
  height: 58px;
  top: 51.3rem !important;
  background-color: aliceblue;
}
.main-content {
  height: auto;
  min-height: 920px !important;
}
</style>
