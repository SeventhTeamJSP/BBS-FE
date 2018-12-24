<template>
  <div class="container" style="padding-bottom: 50px">
    <div class="row">
      <div class="col-12">
        <div class="container">
          <div style="background-color: burlywood;">
            <div style="padding:10px" v-for="it in item">
              <p style="text-align: left">
                <a href="#">{{it.username}}</a>
                <span>&nbsp; &nbsp;{{it.shijian}}</span>
              </p>
              <div id="context">{{it.message}}</div>
              <div style="text-align: right;padding-bottom: 15px">
                <a href="javascript:void (0);" @click="test(it.id)">评论</a>
              </div>
              <div style="width: 900px;padding-left: 100px;display: none" v-bind:id="it.id">
                <div style="padding-left: 100px;padding-bottom: 15px">
                  <p style="text-align: left">
                    <a href="#">名字</a>
                    <span>&nbsp;时间</span>
                  </p>
                  <div>评论内容</div>
                </div>
                <div style="padding-left: 100px;">
                  <div style="text-align: right">
                    <textarea cols="90" rows="4" wrap="on"></textarea>
                  </div>
                  <div style="text-align: right;padding-top: 15px">
                    <button class="btn btn-primary btn-sm">发表</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../store/store";

export default {
  name: "Comment",
  data() {
    return {
      item: [
        {
          id: 1,
          username: "test1",
          shijian: "2018-12-18 17:54",
          message:
            "你婆婆不是吓唬你，如果现在你跟你老公离婚，你净身出户完全有可能，因为你小家没有财产，婆家的财产是老人的，跟你们小夫妻都没关系。"
        },
        {
          id: 2,
          username: "test2",
          shijian: "2018-12-17 17:55",
          message: "你好傻"
        }
      ]
    };
  },
  methods: {
    test(id) {
      console.log(id);
      if (document.getElementById(id).style.display === "none") {
        document.getElementById(id).style.display = "block";
      } else document.getElementById(id).style.display = "none";
    }
  }
};
</script>

<style scoped>
</style>
