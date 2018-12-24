<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="container">
          <a href="#">BBS</a>
          <span>&gt;</span>
          <span>
            <a href="#">大学校园</a>
          </span>
          <span>&gt;</span>
          <a href="#">问答</a>
        </div>
        <div class="container">
          <h3 style="text-align: center;padding: 8px 0">
            <span class="title">
              <span>你的孩子会说方言吗？</span>
            </span>
          </h3>
          <p style="text-align: center">作者：pz &nbsp; 时间：2018-12-18</p>
          <div style="background-color: gray">
            <div id="context">老夫疯狂测试</div>
            <div style="text-align: right">
              <div v-if="getUser.length > 0">
                <a
                  href="javascript:void (0);"
                  @click="edit"
                  id="test"
                  v-text="btn"
                  v-show="flag === true"
                ></a>
                <a
                  href="javascript:void (0);"
                  @click="save"
                  id="test1"
                  v-text="btn1"
                  v-show="flag === false"
                ></a>
              </div>
              <div v-else>
                <a href="javascript:void (0);">收藏</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 50px"></div>
  </div>
</template>

<script>
import "summernote/dist/summernote-bs4.css";
import "summernote/dist/summernote-bs4";
import $ from "jquery";
import "codemirror/lib/codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml";
import "codemirror/theme/monokai.css";
import "codemirror";

export default {
  name: "tie1",
  data() {
    return {
      btn: "修改",
      btn1: "提交",
      flag: true,
      context: ""
    };
  },
  methods: {
    edit() {
      this.flag = false;
      $("#context").summernote({ focus: true });
    },
    save() {
      this.flag = true;
      this.context = $("#context").summernote("code");
      $("#context").summernote("destroy");
      console.log(this.context);
    }
  },
  computed: {
    getUser() {
      return this.$store.state.user_id;
    }
  }
};
</script>

<style scoped>
.title {
  display: inline-block;
  color: white;
  background-color: #1e5882;
}
</style>
