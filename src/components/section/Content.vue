<template>
  <div class="col-10">
    <div class="row">
      <div class="col-8">
        <p>标题</p>
        <div>
          <ul>
            <li v-for="it1 in title">
              <router-link to="/answer" v-bind:id="it1.id">
                <p class="title">{{it1.label}}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-2">
        <p style="padding-left: 40px">作者</p>
        <div>
          <ul style="list-style: none">
            <li v-for="it1 in title">
              <router-link to="/otherUser" v-bind:id="it1.id">
                <p>{{it1.author}}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-2">
        <p style="padding-left: 40px">时间</p>
        <div>
          <ul style="list-style: none">
            <li v-for="it1 in title">
              <p>{{it1.time}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Type1",
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
          sort: "婆媳关系",
          author: "杨泽群",
          time: "2018-12-21"
        },
        {
          id: 2,
          label: "女朋友怀孕了，非要我去做上门女婿",
          sort: "生活那点事",
          author: "杨泽群",
          time: "2018-12-21"
        },
        {
          id: 3,
          label: "准备带6岁儿子坐长途火车，需要注意些什么事情",
          sort: "娱乐八卦",
          author: "杨泽群",
          time: "2018-12-21"
        },
        {
          id: 4,
          label:
            "婆婆吃的穿的用的都比我好买衣服鞋动辄上千却为五千找我这月光族借，so？",
          sort: "婆媳关系",
          author: "杨泽群",
          time: "2018-12-21"
        },
        {
          id: 5,
          label: "你的孩子会说方言吗？",
          sort: "论坛杂谈",
          author: "杨泽群",
          time: "2018-12-21"
        }
      ]
    };
  }
};
</script>

<style scoped>
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 500px;
}
a {
  color: black;
}

a:hover {
  color: red;
}
</style>
