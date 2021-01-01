<template>
    <footer class="border-top footer text-muted">
        <div class="container">
            <div class="row">
                <div class="col-md-4"><img :src="require('@/assets/images/FooterLogo.png')" title="Dashboard">  Dashboard</div>
                <div class="col-md-4">&copy; 2020,</div>
                <div class="col-md-4"><a href="#">Report issues</a></div>
            </div>
        </div>
    </footer>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { getCurrentUser, clearCurrentUser } from "@/services/users/userService";
// store
import store from "@/store/store";

@Component
export default class Footer extends Vue {
}
</script>
<style scoped>
</style>
