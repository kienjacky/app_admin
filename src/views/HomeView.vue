<template>
  <div>
    <Sidebar/>
  </div>
  <div>
    <Header></Header>
  </div>

  <div class="content-wrapper">
    <router-view/>
  </div>

<!--  <Footer/>-->
</template>

<script>
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
