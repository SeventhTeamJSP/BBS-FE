<template>
  <div class="container">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <h3 style="text-align: center">完善信息</h3>
        <div class="form-group"></div>
        <div class="form-group">
          <label>密码</label>
          <input
            class="form-control"
            type="password"
            placeholder="请输入密码"
            v-model="password"
            @blur="checkPwd"
          >
          <span>{{pwdMsg}}</span>
        </div>
        <div class="form-group">
          <label>确认密码</label>
          <input
            class="form-control"
            type="password"
            placeholder="请再次输入密码"
            v-model="reword"
            @blur="checkReword"
          >
          <span>{{rePwdMsg}}</span>
        </div>
        <div class="form-group">
          <label>电子邮箱</label>
          <input
            class="form-control"
            type="email"
            placeholder="请输入邮箱"
            v-model="email"
            @blur="checkEmail"
          >
          <span>{{emailMsg}}</span>
        </div>
        <div class="form-group">
          <label>电话号码</label>
          <input class="form-control" type="tel" placeholder="请输入电话" v-model="tel" @blur="checkTel">
          <span>{{telMsg}}</span>
        </div>
        <div class="form-group">
          <label>工作性质</label>
          <input class="form-control" type="text" placeholder="请输入工作" v-model="job">
        </div>
        <div class="form-group">
          <label>工作地点</label>
          <input class="form-control" type="text" placeholder="请输入工作" v-model="workSpace">
        </div>
        <div class="form-group" style="text-align: right">
          <button type="submit" class="btn btn-success" @click="post">注册</button>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
//完善信息的页面
export default {
  name: "PerfectInfo",
  data() {
    return {
      password: "",
      pwdMsg: "",
      reword: "",
      rePwdMsg: "",
      email: "",
      emailMsg: "",
      tel: "",
      telMsg: "",
      job: "",
      workSpace: ""
    };
  },
  methods: {
    checkPwd: function() {
      let word = this.password.trim();
      if (word.length === 0) {
        this.pwdMsg = "*密码不能为空";
        return false;
      }
      let count = 0;
      if (/[0-9]/.test(word)) {
        count++;
      }
      if (/[A-Za-z]/.test(word)) {
        count++;
      }
      if (/[^0-9A-Za-z]/.test(word)) {
        count++;
      }
      if (count === 3 && word.length >= 6) {
        this.pwdMsg = "*高强度";
      } else if (count === 2 && word.length >= 6) {
        this.pwdMsg = "*中强度";
      } else {
        this.pwdMsg = "*低强度";
      }
      return true;
    },
    checkReword: function() {
      if (this.password !== this.reword) {
        this.rePwdMsg = "*两次密码不一致";
        return false;
      } else {
        this.rePwdMsg = "";
        return true;
      }
    },
    checkTel: function() {
      let telRule = /^1[3-578]\d{9}$/;
      if (this.tel.length !== 11) {
        this.telMsg = "*请输入11位电话号码";
        return false;
      } else if (this.tel.match(telRule) == null) {
        this.telMsg = "请输入正确的手机号";
        return false;
      } else {
        this.telMsg = "";
        return true;
      }
    },
    checkEmail: function() {
      let rule = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      if (this.email.length === 0) {
        this.emailMsg = "*请输入邮箱";
        return false;
      } else if (this.email.match(rule) == null) {
        this.emailMsg = "*请输入正确邮箱格式";
        return false;
      } else {
        this.emailMsg = "";
        return true;
      }
    },
    post() {
      this.axios
        .post("api", {
          params: {
            user_id: 1,
            password: this.password,
            email: this.email,
            tel: this.tel,
            job: this.job,
            workSpace: this.workSpace
          },
          headers: { "Access-Control-Allow-Origin": "*" }
        })
        .then(function(response) {
          if ((response.data = true)) {
            this.$store.commit("saveUserName", this.username);
            this.$router.push("/index");
          }
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
