<template>
  <div class="container">
    <div class="row">
      <left-banner/>
      <content/>
    </div>
  </div>
</template>

<script>
import LeftBanner from "../components/common/LeftSectionNav";

import Content from "@/components/section/Content";
export default {
  name: "Section",
  components: {
    Content,
    LeftBanner
  }
};
</script>

<style scoped>
</style>
