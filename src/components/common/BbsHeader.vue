<template>
  <div class="shadow" style="margin-bottom: 20px">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <ul class="nav" style="float: left">
            <li class="nav-item">
              <router-link class="nav-link" to="/">bbs</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/post/hot">热帖榜</router-link>
            </li>
          </ul>
          <ul class="nav" style="float: right">
            <li class="nav-item">
              <sign-in-form/>
            </li>
            <li class="nav-item">
              <sign-up-form/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignInForm from "../form/SignInForm";
import SignUpForm from "../form/SignUpForm";
export default {
  name: "TestHeader",
  components: {
    SignInForm,
    SignUpForm
  }
};
</script>

<style scoped>
a {
  color: black;
}

a:hover {
  color: red;
}
</style>
