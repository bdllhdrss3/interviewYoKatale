<template>
  <v-container fill-height fluid>
    <v-snackbar v-model="snackbar" timeout="1500" color="red" location="top">
      {{ text }}
    </v-snackbar>
    <div class="d-flex justify-center">
      <v-card width="500">
        <div class="d-flex justify-center">
          <v-img
            class="text-center"
            src="@/assets/images/logo.webp"
            height="90"
            width="70"
          ></v-img>
        </div>

        <v-card-title class="text-center" :loading="loading">
          <h5>Quiz App</h5>
          <h2 class="text-caption">Create Account</h2>
        </v-card-title>
        <v-form ref="form" :disabled="loading">
          <v-card-text>
            <v-text-field
              v-model="name"
              :readonly="loading"
              :rules="required"
              label="Name"
              bg-color="#F5FAEA"
              density="compact"
            ></v-text-field>
            <v-text-field
              v-model="address"
              :readonly="loading"
              :rules="required"
              label="Address"
              bg-color="#F5FAEA"
              density="compact"
            ></v-text-field>
            <v-text-field
              v-model="phone"
              :readonly="loading"
              :rules="telRules"
              label="Phone number"
              bg-color="#F5FAEA"
              density="compact"
              @input="formatTelephoneNumber"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :readonly="loading"
              :rules="emailRules"
              label="Email"
              prepend-inner-icon="mdi-email"
              bg-color="#F5FAEA"
              density="compact"
            ></v-text-field>

            <v-text-field
              v-model="password"
              :readonly="loading"
              :rules="passwordRules"
              label="Password"
              bg-color="#F5FAEA"
              :type="passwordShow == true ? 'text' : 'password'"
              :append-inner-icon="
                passwordShow == true ? 'mdi-eye-off' : 'mdi-eye'
              "
              density="compact"
              @click:append-inner="passwordShow = !passwordShow"
            ></v-text-field>
            <v-text-field
              v-model="confirmPassword"
              :readonly="loading"
              :rules="confirmPasswordRules"
              label="Confirm Password"
              bg-color="#F5FAEA"
              :type="passwordShow == true ? 'text' : 'password'"
              :append-inner-icon="
                passwordShow == true ? 'mdi-eye-off' : 'mdi-eye'
              "
              density="compact"
              @click:append-inner="passwordShow = !passwordShow"
            ></v-text-field>

            <v-btn block color="success" size="large" @click="submit()">
              Sign Up
            </v-btn>
            <p class="text-center mt-2 text-underline">
              <router-link to="login">Login</router-link>
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
  data() {
    return {
      text: "",
      snackbar: false,
      form: false,
      email: null,
      name: null,
      address: null,
      confirmPassword: null,
      phone: null,
      password: "",
      passwordShow: false,
      loading: false,
      telRules: [
        (value) => /^\d{10}$/.test(value) || "Invalid telephone number",
      ],
      required: [(value) => !!value || "Field is Required"],
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
          } else if (value.length < 8) {
            return "Password must be at least 8 characters long";
          } else if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          } else if (!/[a-z]/.test(value)) {
            return "Password must contain at least one lowercase letter";
          } else if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return true;
        },
      ],
      confirmPasswordRules: [
        (value) => {
          if (!value) {
            return "Password is required";
          } else if (value.length < 8) {
            return "Password must be at least 8 characters long";
          } else if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          } else if (!/[a-z]/.test(value)) {
            return "Password must contain at least one lowercase letter";
          } else if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          if (value !== this.password) {
            return "Passwords dont match";
          }
          return true;
        },
      ],
    };
  },

  methods: {
    formatTelephoneNumber() {
      let formattedNumber = this.telephoneNumber.replace(/\D/g, "");
      this.telephoneNumber = formattedNumber;
    },
    async submit() {
      const { valid } = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      try {
        this.loading = true;
        await auth.signup(this.email, this.password, this.address, this.phone, this.name);
        this.$router.push({ name: "Home" });
      } catch (e) {
        this.snackbar = true;
        this.text = e.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
