<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseLayout from "@/components/layouts/BaseLayout.vue";
import EmptyLayout from "@/components/layouts/EmptyLayout.vue";
import { setUpRequestInterceptors, setUpResponseInterceptors } from "@/services/interceptors";

@Component({
    components: {
        BaseLayout,
        EmptyLayout
    }
})
export default class App extends Vue {
    // lifecycle hooks
    created() {
        setUpResponseInterceptors();
        setUpRequestInterceptors();
    }

    // computed
    get layout() {
        return `${(this.$route.meta.layout || "base")}-layout`;
    }
}
</script>
