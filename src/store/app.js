// Utilities
import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../plugins/firebase";
import { updateProfile, getAuth, signOut } from "firebase/auth";

export const useAuth = defineStore("auth", {
  persist: true,
  state: () => {
    return {
      email: "",
      password: "",
      displayName: "",
      phoneNumber: "",
      address: "",
      uid: "",
      accessToken: "",
      loggedIn: false,
      profile: {},
      token: "",
    };
  },
  getters: {
    isLoggedIn: (state) => state.loggedIn,
  },
  actions: {
    async logout() {
      try {
        const auth = getAuth();
        await signOut(auth);
        this.email = "";
        this.displayName = "";
        this.uid = "";
        this.accessToken = "";
        this.loggedIn = false;
      } catch (e) {
        throw new Error(e.message);
      }
    },
    async signup(email, password, address, phoneNumber, name) {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, {
          displayName: name,
          phoneNumber: phoneNumber,
          photoURL: "https://example.com/new-profile-photo.jpg",
        });
        this.email = user.email;
        this.displayName = name;
        this.phoneNumber = user.phoneNumber;
        this.uid = user.uid;
        this.accessToken = user.accessToken;
        this.loggedIn = true;
      } catch (e) {
        throw new Error(e.message);
      }
    },
    async login(email, password) {
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.email = user.email;
        this.displayName = user.displayName;
        this.phoneNumber = user.phoneNumbethis;
        this.uid = user.uid;
        this.accessToken = user.accessToken;
        this.loggedIn = true;
      } catch (e) {
        throw new Error(e.message);
      }
    },
  },
});
