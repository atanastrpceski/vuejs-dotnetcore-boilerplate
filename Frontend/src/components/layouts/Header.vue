<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div class="container">
                <router-link :to="'/'"><img :src="require('@/assets/images/HeaderLogo.png')" title="Dashboard"></router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                    <ul class="navbar-nav flex-grow-1">
                        <li class="nav-item">
                            <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Index">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { getCurrentUser, clearCurrentUser } from "@/services/users/userService";
// store
import store from "@/store/store";

@Component
export default class Header extends Vue {
    // lifecycle hooks

    breadCrumbs() {
        return store.breadcrumbs;
    }

    // computed

    // methods
    logout() {
        clearCurrentUser();
        this.$router.push("/login");
    }
}
</script>
<style scoped>
    .breadcrumb-item+.breadcrumb-item::before {
        display: inline-block;
        padding-right: .5rem;
        color: #6c757d;
        content: ">";
    }

    .breadcrumb-item a{
        color: white;
    }
</style>
