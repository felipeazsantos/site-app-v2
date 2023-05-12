<template>
  <div>
      <SectionTitle title="Principais tecnologias que trabalho" id="technologies" />
      <v-row>
        <v-col xs="12">
          <ul class="technologies-list">
            <li
              class="technologies-items"
              v-for="technologie in technologies"
              :key="technologie.name"
            >
              <v-sheet
                outlined
                elevation="4"
                class="d-flex flex-column justify-center align-center py-6 px-10"
                :style="'border-bottom: 4px solid ' + technologie.color"
              >
                <img
                  :src="technologie.picture"
                  width="80"
                  :alt="technologie.name"
                />
                <span class="font-weight-bold pt-2">{{ technologie.name }}</span>
              </v-sheet>
            </li>
          </ul>
        </v-col>
      </v-row>
   </div>
</template>

<script>
import SectionTitle from './SectionTitle.vue'

export default {
  components: { SectionTitle },
  data() {
    return {
      technologies: [
        {
          name: "Vue.js",
          color: "#54AE54",
          picture: require("@/assets/vuejs.png"),
        },
        {
          name: "React.js",
          color: "#AB2353",
          picture: require("@/assets/reactjs.png"),
        },
        {
          name: "Node.js",
          color: "#22DDFF",
          picture: require("@/assets/nodejs.png"),
        },
        {
          name: "Java",
          color: "#2252FF",
          picture: require("@/assets/java.png"),
        },
        {
          name: "Golang",
          color: "#22FF12",
          picture: require("@/assets/golang.png"),
        },
        {
          name: "Typescript",
          color: "#FF2342",
          picture: require("@/assets/typescript.png"),
        },
      ],
    };
  },
};
</script>

<style>
.technologies-list {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.technologies-items {
  padding: 12px 12px;
}
</style>