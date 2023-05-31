<template>
  <div class="container main-header">
    <div class="row justify-content-end d-header">
      <div class="h-account justify-content-end align-content-end">
        <div class="item-acc h-75 mt-1 w-100">
          <!-- Navbar Right Menu -->
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav justify-content-end align-content-end">
              <li class="dropdown user user-menu pt-1" v-on:click="logout">
                  <!-- The user image in the navbar-->
                  <img src="../assets/image/avatar.png" class="user-image" alt="User Image">
                  <!-- hidden-xs hides the username on small devices so only the image appears. -->
                  <span class="hidden-xs txt-logout">Log Out</span>
                <!-- Account Info and Menu -->
<!--                <ul class="dropdown-menu">-->
<!--                  <li class="user-header" style="height:auto;min-height:85px;padding-bottom:15px;">-->
<!--                    <p>-->
<!--                      <span>{{user.displayName}}</span>-->
<!--                      <small v-for="role in user.roles" :key="role">{{role}}</small>-->
<!--                    </p>-->
<!--                  </li>-->
<!--                  <li class="user-footer">-->
<!--                    <a href="javascript:;" class="btn btn-default btn-flat btn-block">-->
<!--                      <i class="fa fa-sign-out"></i>-->
<!--                      <span>Logout</span>-->
<!--                    </a>-->
<!--                  </li>-->
<!--                </ul>-->
              </li>

            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      logout() {
        localStorage.clear();
        this.$router.push("/");
      }
    }
  }
</script>

<style>
.main-header {
  max-width: 100% !important;
}
.d-header {
  background-color: #3c8dbc;
  height: 3.5rem !important;
}
.user-menu, .navbar-nav{
  background-color: #3c8dbc;
}
.navbar-nav {
  margin-right: 0 !important;
}
.user-menu {
  margin-right: 2rem !important;
}
.user-image {
  width: 2.5rem !important;
}
.txt-logout {
  color: white;
  font-size: 12px;
  padding-left: 0.8rem !important;
  text-decoration: none;
  cursor: pointer;
}
.dropdown-toggle {
  text-decoration: none;
}
</style>
