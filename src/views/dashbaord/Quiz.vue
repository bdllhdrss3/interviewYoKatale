<template>
  <v-container>
    <h1 v-if="active" class="text-center text-h4 mt-3">
      Prove you're a true foodie genius 🍔
    </h1>

    <div>
      <div class="d-flex justify-space-around align-center py-4">
        <h5 v-if="active" class="font-weight-medium">{{ model + 1 }}/5</h5>
      </div>
      <v-carousel
        v-if="active"
        v-model="model"
        hide-delimiters
        width="100%"
        progress="primary"
        :show-arrows="false"
      >
        <v-carousel-item v-for="i in quizData" :key="i.qtn" :value="i.qtn">
          <v-sheet
            :color="color"
            height="100%"
            class="pa-6 pb-10"
            :elevation="elevation"
            border="10"
          >
            <v-container fluid>
              <h5 class="text-h5 text-center text-white my-2 mx-4">
                {{ i.qtn }}
              </h5>
              <v-item-group>
                <v-row
                  justify="end"
                  class="mt-2 mx-md-15"
                  style="height: 100px !important"
                >
                  <v-col
                    cols="6"
                    md="6"
                    sm="6"
                    v-for="a in i.values"
                    :key="a.no"
                  >
                    <v-item
                      v-slot="{ isSelected, toggle }"
                      :value="a"
                      @group:selected="select(i, a)"
                    >
                      <v-card
                        width="95%"
                        height="300"
                        :color="isSelected ? 'red' : 'transparent'"
                        @click="toggle"
                      >
                        <v-img width="100%" :src="a.image" height="100%" cover>
                        </v-img>
                      </v-card>
                    </v-item>
                    <h5 class="mt-2">{{ a.no + " :  " + a.name }}</h5>
                  </v-col>
                </v-row>
              </v-item-group>
            </v-container>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-carousel v-else hide-delimiters width="100%" :show-arrows="false">
        <v-carousel-item>
          <v-sheet
            elevation="12"
            color="primary"
            max-width="650"
            rounded="lg"
            width="100%"
            class="pa-4 text-center mx-auto"
          >
            <v-progress-circular
              class="mt-4"
              :size="110"
              :width="10"
              :model-value="(points / 50) * 100"
              :color="messageColor"
            >
              <h1>{{ (points / 50) * 100 }}</h1>
            </v-progress-circular>
            <h6 class="text-h6 mb-6">{{ message }}</h6>
            <div class="text-center">
              <v-btn
                class="text-none"
                color="secondary mx-1"
                rounded
                variant="flat"
                @click="retry()"
                width="90"
              >
                Retake
              </v-btn>
              <v-btn
                class="text-none"
                color="success"
                rounded
                variant="flat"
                width="90"
                :loading="finalloader"
                @click="toDashbaord()"
              >
                Done
              </v-btn>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-container>
</template>
<script>
import { useAuth } from "@/store/app";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../plugins/firebase";
import quizData from "../../data/questions.js";

const auth = useAuth();
export default {
  data() {
    return {
      model: 0,
      finalloader: false,
      quizData,
      points: 0,
      elevation: 0,
      color: "lime",
      messageColor: "green",
      active: true,
      message: "Congrats ! 🎉🎊",
    };
  },
  mounted() {
    this.quizData = this.getRandomNonConsecutiveQuestions(this.quizData, 5);
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (!auth.loggedIn) {
        vm.$router.push({ name: "LogIn" });
      }
    });
  },
  methods: {
    retry() {
      location.reload();
    },
    async toDashbaord() {
      this.finalloader = true;
      const que = query(
        collection(db, "ranking"),
        where("uid", "==", auth.uid)
      );
      const querySnapshot = await getDocs(que);
      if (querySnapshot.docs.length) {
        await updateDoc(querySnapshot.docs[0].ref, {
          points: this.points,
        });
      } else {
        await addDoc(collection(db, "ranking"), {
          name: auth.displayName,
          points: this.points,
          uid: auth.uid,
        });
      }
      this.finalloader = false;
      this.$router.push("/");
    },
    select(qtn, answer) {
      let correctAnswer = qtn.correctAnswer;
      let selection = answer.no;

      if (correctAnswer == selection) {
        this.color = "green";
        this.points = this.points + 10;
      } else {
        this.color = "red darken-5";
      }
      setTimeout(() => {
        this.model = Math.min(this.model + 1, this.quizData.length - 1);
        this.color = "lime";
      }, 450);
      if (this.quizData.length - 1 === this.model) {
        const marks = (this.points / 50) * 100;
        if (marks > 79) {
          this.message = "Congrats ! Spectacular score 🎉🎊 😉";
          this.messageColor = "green";
        }
        if (marks > 60) {
          this.message = "Very Good! Bravo 🎉👍";
          this.messageColor = "yellow draken-2";
        }
        if (marks > 50) {
          this.message = "Good job 🎉👍";
          this.messageColor = "lime draken-2";
        }
        if (marks < 51) {
          this.message = "Poor! ☹️";
          this.messageColor = "red draken-2";
        }
        this.active = false;
      }
    },
    getRandomElement(array) {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    },

    // Function to get five random non-consecutive questions
    getRandomNonConsecutiveQuestions(data, count) {
      if (count > data.length) {
        console.error(
          "The number of questions requested exceeds the available questions."
        );
        return [];
      }

      const selectedQuestions = [];
      let prevIndex = -1;

      for (let i = 0; i < count; i++) {
        let randomQuestion;
        do {
          randomQuestion = this.getRandomElement(data);
        } while (
          selectedQuestions.includes(randomQuestion) ||
          data.indexOf(randomQuestion) === prevIndex
        );

        selectedQuestions.push(randomQuestion);
        prevIndex = data.indexOf(randomQuestion);
      }

      return selectedQuestions;
    },
  },
};
</script>
