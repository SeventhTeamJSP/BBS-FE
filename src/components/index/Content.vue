<template>
  <div class="col-8">
    <h3 style="font-weight: bolder">问答</h3>
    <div style="border: 3px solid #437f82">
      <ul>
        <li v-for="it1 in title" v-bind="1">
          <div style="padding-top: 10px;padding-bottom: 10px">
            <router-link to="/answer" class="title" v-bind:id="it1.id">{{it1.label}}</router-link>
            <span style="float: right;font-size: small;padding-right: 10px">
              <router-link to="#">{{it1.sort}}</router-link>
            </span>
          </div>
        </li>
      </ul>
      <!--分页-->
      <ul class="pagination" style="padding-left: 450px">
        <li class="page-item">
          <router-link class="page-link" to="#">1</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="#">2</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="#">3</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="#">4</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="#">5</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="#">更多</router-link>
        </li>
      </ul>
    </div>
    <h3 style="font-weight: bolder">普通</h3>
    <div style="border: 3px solid #437f82">
      <ul>
        <li v-for="it2 in title2">
          <div style="padding-top: 10px;padding-bottom: 10px">
            <router-link to="/answer" class="title" v-bind:id="it2.id">{{it2.label}}</router-link>
            <span style="float: right;font-size: small;padding-right: 10px">
              <router-link to="#">{{it2.sort}}</router-link>
            </span>
          </div>
        </li>
      </ul>
      <!--分页-->
      <ul class="pagination" style="padding-left: 450px">
        <li class="page-item">
          <router-link class="page-link" to="#">1</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="#">2</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="#">3</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="#">4</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="#">5</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="#">更多</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      sort: [
        { label: "旅游论坛", id: 1 },
        { label: "职业交流", id: 2 },
        { label: "大学校园", id: 3 },
        { label: "经济论坛", id: 4 }
      ],
      title: [
        {
          id: 1,
          label:
            "如何看待微博上“杭州小伙全款房给妻子加名字，9个月离婚被索取一半房子”这则新闻？",
          sort: "婆媳关系"
        },
        {
          id: 2,
          label: "女朋友怀孕了，非要我去做上门女婿",
          sort: "生活那点事"
        },
        {
          id: 3,
          label: "准备带6岁儿子坐长途火车，需要注意些什么事情",
          sort: "娱乐八卦"
        },
        {
          id: 4,
          label:
            "婆婆吃的穿的用的都比我好买衣服鞋动辄上千却为五千找我这月光族借，so？",
          sort: "婆媳关系"
        },
        {
          id: 5,
          label: "你的孩子会说方言吗？",
          sort: "论坛杂谈"
        }
      ],
      title2: [
        {
          id: 1,
          label:
            "如何看待微博上“杭州小伙全款房给妻子加名字，9个月离婚被索取一半房子”这则新闻？",
          sort: "婆媳关系"
        },
        {
          id: 2,
          label: "女朋友怀孕了，非要我去做上门女婿",
          sort: "生活那点事"
        },
        {
          id: 3,
          label: "准备带6岁儿子坐长途火车，需要注意些什么事情",
          sort: "娱乐八卦"
        },
        {
          id: 4,
          label:
            "婆婆吃的穿的用的都比我好买衣服鞋动辄上千却为五千找我这月光族借，so？",
          sort: "婆媳关系"
        },
        {
          id: 5,
          label: "你的孩子会说方言吗？",
          sort: "论坛杂谈"
        }
      ]
    };
  },
  mounted() {
    this.axios.get("api").then(response => {
      this.sort = response.data;
      console.log(response);
    });
    this.axios.get("api").then(response => {
      this.title = response.data;
      console.log(response);
    });
    this.axios.get("api").then(response => {
      this.title2 = response.data;
      console.log(response);
    });
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
