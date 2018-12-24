<template>
  <div>
    <button class="btn btn-outline-primary" data-toggle="modal" data-target="#myModal">登录</button>

    <!-- 模态框 -->
    <div class="modal fade" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- 模态框头部 -->
          <div class="modal-header">
            <h4 class="modal-title">登录</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- 模态框主体 -->
          <div class="modal-body">
            <form action>
              <div class="form-group">
                <label>用户名</label>
                <input class="form-control" type="text" placeholder="请输入用户名" v-model="name">
              </div>
              <div class="form-group">
                <label>密码</label>
                <input class="form-control" type="password" placeholder="请输入密码" v-model="pwd">
              </div>
            </form>
          </div>

          <!-- 模态框底部 -->
          <div class="modal-footer">
            <button type="submit" class="btn btn-success" @click="post">登录</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "component1",
  data() {
    return {
      name: "",
      pwd: ""
    };
  },
  methods: {
    post() {
      this.axios
        .get("http://localhost:8080/api/users", {
          params: {
            name: this.name,
            pwd: this.pwd
          },
          headers: { "Access-Control-Allow-Origin": "*" }
        })
        .then(response => {
          this.$store.commit("saveUserName", response.data);
          this.$router.push("/index");
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
</style>
