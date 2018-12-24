<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="container">
          <div style="width: 500px">
            <textarea cols="67" rows="8" wrap="on" class="test"></textarea>
            <div style="text-align: right;padding-top: 15px">
              <button @click="save" class="btn btn-primary btn-sm">我要回答</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Answer",
  data() {
    return {
      item: [
        {
          message: "",
          time: ""
        }
      ]
    };
  },
  methods: {
    save() {
      this.item.message = $(".test").val();
      this.item.time = new Date().toTimeString();
      this.axios
        .post("api", {
          params: {
            message: this.message,
            time: this.time
          },
          headers: { "Access-Control-Allow-Origin": "*" }
        })
        .then(function(response) {
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
