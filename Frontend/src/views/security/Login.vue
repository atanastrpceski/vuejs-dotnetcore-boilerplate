<template>
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="modalbox modalpopup-md modalpopup-start bg-transparent">
                        <div class="modalpopup">
                            <h1>Login</h1>
                            <h4 class="text-light">WELCOME TO THE DASHBOARD!</h4>
                            <br><br>
                            <div class="form">
                                <div class="form-group-line dp-block">
                                    <label class="mb10">Email</label>
                                    <input type="email" v-model="model.email" class="form-control mb20">
                                </div>
                                <div class="form-group-line dp-block">
                                    <label class="mb10">Password</label>
                                    <input v-model="model.password" type="password" class="form-control mb20">
                                </div>
                            </div>
                            <div class="modalpopup-footer mb30">
                                <a @click="login" class="btn btn-white"><span>Login</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { LoginDto } from "@/services/security/types";
import { login } from "@/services/security/authService";
import { Toast } from "@/services/common/types";

    @Component
export default class Login extends Vue {
        model = {} as LoginDto;
        // lifecycle hooks

        // computed

        // methods
        login() {
            login(this.model).then(response => {
                localStorage.setItem("authentication", JSON.stringify(response.data));
                this.$router.push("/");
            }).catch(() => {
                Toast.alert(this, "Invalid credentials", "Alert");
            });
        }
}
</script>
<style scoped>
</style>
