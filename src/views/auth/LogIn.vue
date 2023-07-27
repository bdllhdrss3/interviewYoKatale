<template>
  <v-container fill-height fluid>
    <v-snackbar v-model="snackbar" timeout="1500" color="red" location="top">
      {{ text }}
    </v-snackbar>
    <div class="d-flex justify-center" style="margin-top: 10%">
      <v-card width="500" :loading="loading">
        <div class="d-flex justify-center">
          <v-img
            class="text-center"
            src="@/assets/images/logo.webp"
            height="100"
            width="70"
          ></v-img>
        </div>

        <v-card-title class="text-center">
          <h5>Quiz App</h5>
          <p class="text-caption">
            Log in to test your knowledge in foods with YooKatale
          </p>
          <h2 class="text-caption">Login</h2>
        </v-card-title>
        <v-form ref="form" :disabled="loading">
          <v-card-text>
            <v-text-field
              v-model="email"
              :readonly="loading"
              :rules="emailRules"
              label="Email"
              density="compact"
              prepend-inner-icon="mdi-email"
              bg-color="#F5FAEA"
            ></v-text-field>

            <v-text-field
              v-model="password"
              :readonly="loading"
              :rules="passwordRules"
              label="Password"
              density="compact"
              bg-color="#F5FAEA"
              :type="passwordShow == true ? 'text' : 'password'"
              :append-inner-icon="
                passwordShow == true ? 'mdi-eye-off' : 'mdi-eye'
              "
              @click:append-inner="passwordShow = !passwordShow"
            ></v-text-field>
            <v-btn
              block
              color="success"
              size="large"
              :disabled="loading"
              type="submit"
              @click="submit"
            >
              Sign In
            </v-btn>

            <p class="text-center mt-5 text-underline">
              <router-link to="signup">Sign up</router-link>
            </p>
          </v-card-text>
        </v-form>
      </v-card>
    </div>
  </v-container>
</template>
<script>
import { useAuth } from "@/store/app";

const auth = useAuth();
export default {
  data: () => ({
    text: "",
    snackbar: false,
    form: false,
    email: null,
    password: null,
    passwordShow: false,
    loading: false,
    emailRules: [
      (value) => !!value || "Email is Required",
      (value) => (value || "").length <= 20 || "Max 20 characters",
      (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    ],
    passwordRules: [
      (value) => {
        if (!value) {
          return "Password is required";
        }
        return true;
      },
    ],
  }),

  methods: {
    async submit() {
      const { valid } = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      try {
        this.loading = true;
        await auth.login(this.email, this.password);

        this.$router.push({ name: "Home" });
      } catch (e) {
        this.snackbar = true;
        this.text = e.message;
      } finally {
        this.loading = false;
      }
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
};
</script>
