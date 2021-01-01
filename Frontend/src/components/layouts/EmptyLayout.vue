<template>
    <div>
    <div class="slider" v-show="isLoading()">
        <div class="line"></div>
        <div class="subline inc"></div>
        <div class="subline dec"></div>
    </div>
    <router-view></router-view>
        <notifications group="boilerplate" position="top right" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store/store";

    @Component
export default class EmptyLayout extends Vue {
    isLoading() {
        return store.activeServiceCalls > 0;
    }
}
</script>
