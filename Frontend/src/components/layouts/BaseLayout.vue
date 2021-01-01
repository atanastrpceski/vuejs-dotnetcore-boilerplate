<template>
    <div>
        <div class="slider" v-show="isLoading()">
            <div class="line"></div>
            <div class="subline inc"></div>
            <div class="subline dec"></div>
        </div>
        <Header></Header>
        <div class="container">
            <main role="main" class="pb-3">
                <router-view></router-view>
            </main>
        </div>
        <Footer></Footer>
        <notifications group="boilerplate" position="top right" />
    </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
// store
import store from "@/store/store";

@Component({
    components: {
        Header,
        Footer
    }
})
export default class BaseLayout extends Vue {
    // lifecycle hooks

    // computed
    isLoading() {
        return store.activeServiceCalls > 0;
    }
    // methods
}
</script>
<style scoped>
</style>
