<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <div style="background-color: rgb(234, 244, 255);padding:0 0 15px 0">
          <div style="text-align: center">
            <img src="../../assets/index/user.png" alt="用户头像">
            <h3 style="padding-top: 15px">用户名</h3>
            <span style="padding: 0 5px">用户类型：普通</span>
            <p>关注人数：</p>
            <p>被关注人数：</p>
            <p>注册时间：2018-12-20 20：33：30</p>
            <p>联系方式：</p>
            <p>工作性质：</p>
            <p>工作地点：工作地点工作地点工作地点工作地点工作地点工作地点工作地点工作地点</p>
            <button class="btn btn-primary btn-sm">+关注</button>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div style="background-color: white;padding-left: 15px">
          <h3>Ta的帖子</h3>
          <ul>
            <li v-for="it1 in title">
              <div style="padding-top: 10px;padding-bottom: 10px">
                <a href="/answer" class="title" v-bind:id="it1.id">{{it1.label}}</a>
                <span style="float: right;font-size: small;padding-right: 10px">
                  <a href="#">{{it1.sort}}</a>
                </span>
              </div>
            </li>
          </ul>
          <h3>Ta的问答</h3>
          <ul>
            <li v-for="it1 in title">
              <div style="padding-top: 10px;padding-bottom: 10px">
                <a href="/answer" class="title" v-bind:id="it1.id">{{it1.label}}</a>
                <span style="float: right;font-size: small;padding-right: 10px">
                  <a href="#">{{it1.sort}}</a>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 他人页面
export default {
  name: "component1",
  data() {
    return {
      title: [
        {
          id: 1,
          label:
            "如何看待微博上“杭州小伙全款房给妻子加名字，9个月离婚被索取一半房子”这则新闻？",
          sort: "婆媳关系",
          type: 1
        },
        {
          id: 2,
          label: "女朋友怀孕了，非要我去做上门女婿",
          sort: "生活那点事",
          type: 2
        }
      ]
    };
  }
};
</script>

<style scoped>
.title {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 500px;
  vertical-align: middle;
}

a.title:visited {
  color: gray;
}
</style>
