<template>
  <v-container class="pa-4">
    <h5 class="text-end mt-3">
      Logged in as: <span class="text-h6">{{ auth.displayName }}</span>
    </h5>
    <v-btn class="my-3" color="primary" to="quiz">Play the Quiz</v-btn>
    <br />
    <v-btn
      class="my-3 text-capitalize"
      color="orange"
      @click="share"
      append-icon="mdi-share"
      variant="tonal"
      >share with friends</v-btn
    >
    <h1 class="text-center text-h5 mt-3">
      Welcome to the "YooKatale Foodie Geniuses" Leaderboard! 🍽️🏆🥇
    </h1>
    <v-card class="my-3" variant="outlined">
      <v-table fixed-header density="compact" height="350px" width="200">
        <thead style="bg-red">
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Points</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in ranks"
            :key="item"
            :class="{ 'bg-secondary': item.uid === auth.uid }"
            :style="{ 'font-size': item.uid === auth.uid ? '22px' : '14px' }"
          >
            <td>
              <span v-if="item.uid === auth.uid">⭐️</span>{{ item.name }}
            </td>
            <td>{{ item.points }} ( {{ (item.points / 50) * 100 }}%)</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>
<script>
import { useAuth } from "@/store/app";
import { db } from "../../plugins/firebase";
import { collection, getDocs } from "firebase/firestore";

const auth = useAuth();
export default {
  data() {
    return {
      auth,
      ranks: [],
    };
  },
  mounted() {
    this.getCollectionItems();
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (!auth.loggedIn) {
        vm.$router.push({ name: "LogIn" });
      }
    });
  },
  methods: {
    async getCollectionItems() {
      try {
        const querySnapshot = await getDocs(collection(db, "ranking"));
        querySnapshot.forEach((doc) => {
          this.ranks.push(doc.data());
        });
        this.ranks.sort((a, b) => b.points - a.points);
      } catch (error) {
        console.error("Error fetching collection items:", error);
        throw error;
      }
    },
    async share() {
      if (navigator.share) {
        try {
          await navigator.share({
            title: "YoKataale Food Quiz ",
            text: "🏆 It's time to put your nutrition know-how to the test with our thrilling and interactive food puzzle game, YooKatale! 🧩🍳🧠",
            url: window.location.href,
          });
        } catch (error) {
          console.error("Error sharing:", error);
        }
      } else {
        // Web Share API is not supported
        // Provide a fallback or display a custom share widget
      }
    },
  },
};
</script>
