<template>
  <div class="col-2">
    <ul class="list-group">
      <li v-for="section in sectionList" style="list-style: none">
        <router-link :to="'/section/'+section.id" class="list-group-item">{{section.label}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// 左边板块导航
export default {
  data() {
    return {
      sectionList: [
        { label: "旅游论坛", id: 1 },
        { label: "职业交流", id: 2 },
        { label: "大学校园", id: 3 },
        { label: "经济论坛", id: 4 }
      ]
    };
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
