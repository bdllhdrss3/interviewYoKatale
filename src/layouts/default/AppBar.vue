<template>
  <v-app-bar>
    <v-app-bar-title>
      <router-link to="/">
        <v-img
          class="text-center mt-5"
          src="@/assets/images/logo.webp"
          height="150"
          width="90"
          to="/"
        ></v-img>
      </router-link>
    </v-app-bar-title>
    <router-link to="/">
      <h3 class="mx-5">Quiz App</h3>
    </router-link>
    <v-btn :loading="loading" @click="signout" color="primary" variant="tonal"
      >Logout</v-btn
    >
  </v-app-bar>
</template>

<script>
import { useAuth } from "@/store/app";
const auth = useAuth();
export default {
  methods: {
    data() {
      return {
        loading: false,
      };
    },
    async signout() {
      try {
        this.loading = true;
        await auth.logout();
        this.$router.push({ name: "LogIn" });
        await auth.$reset();
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
