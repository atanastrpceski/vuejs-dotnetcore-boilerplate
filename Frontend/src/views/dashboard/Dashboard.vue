<template>
<div class="container">
    <div class="row">
   </div>
</div>
</template>
<script lang="ts">
// service
// types
import { CurrentUser } from "@/services/users/types";

// components
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { getCurrentUser } from "@/services/users/userService";

// types
import { Toast, PageDetails } from "@/services/common/types";

// services

@Component({
    components: {
    }
})
export default class Dashboard extends Vue {
  currentUser = {} as CurrentUser;

  // lifecycle hooks
  created() {
      this.initData();
  }

  // computed

  // methods
  initData() {
      this.currentUser = getCurrentUser();
  }
}
</script>
<style scoped>
</style>
