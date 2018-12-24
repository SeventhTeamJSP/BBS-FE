<template>
  <div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <h3>发帖</h3>
        <br>
        <h5>标题</h5>
        <input class="form-control" type="text" id="title" placeholder="请输入标题" v-model="title">
        <br>
        <select v-model="type">
          <option value="0">选择板块</option>
          <option v-for="it in sort" :value="it.id">{{it.label}}</option>
        </select>
        <h5 style="padding-top: 20px">帖子内容</h5>
        <div id="content"></div>
        <div style="text-align: right;padding-top: 15px">
          <button class="btn btn-primary btn-sm">发表</button>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
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
  name: "component1",
  data() {
    return {
      title: "",
      sort: [{ label: "家庭方面", id: 1 }, { label: "校园生活", id: 2 }],
      type: 0
    };
  },
  mounted() {
    $(document).ready(function() {
      $("#content").summernote({
        placeholder: "请输入帖子内容",
        height: 400,
        maxHeight: null,
        minHeight: 400
      });
    });
  }
};
</script>

<style scoped>
</style>
