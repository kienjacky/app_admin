<template>
  <div>
    <sidebar
        @search-input-emit="search"
    />
  </div>

  <div class="container">
    <router-view/>
  </div>
</template>

<script>
// import { defineComponent, ref } from "vue";
import axios from "axios";
import Sidebar from "@/component/Sidebar.vue";
export default ({
  name: "Home",
  components: {
    Sidebar
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