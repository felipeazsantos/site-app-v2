<template>
  <div>
    <SectionTitle title="Projetos" id="projects" />
    <v-row>
      <v-col class="d-flex justify-center align-center px-2 flex-wrap">
        <div v-for="project in projects" :key="project.name">
          <h3 class="white--text text-center mt-4 text-h6">
            {{ project.name }}
          </h3>
          <v-hover v-slot="{ hover }" class="mt-4">
            <v-card
              :elevation="hover ? 12 : 2"
              class="mx-auto mr-1"
              height="300"
              max-width="300"
              width="300"
              dark
              :img="project.picture"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex flex-column transition-fast-in-fast-out black darken-3 v-card--reveal pa-6"
                  style="height: 100%; opacity: 0.9"
                >
                  <span class="pb-6 white--text font-weight-bold">{{
                    project.description
                  }}</span>
                  <v-btn color="teal lighten-1 white--text font-weight-bold"
                    >Conhecer</v-btn
                  >
                </div>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";

export default {
  components: { SectionTitle },
  data() {
    return {
      projects: [
        {
          name: "Vue todo list",
          description: `Vue todo list tem como objeto o controle das tarefas diárias. 
             O legal é que pude aprender a utilizar as libs animate.css e easy-dnd (drag-n-drop).
             E ainda, utlizei a lib Localbase para salvar as informações localmente no navegador do usuário`,
          picture: require("@/assets/vue-todo-list.jpg"),
          technologies: ["Vue.js", "Vuex", "Vue-router", "Axios", "Localbase"],
        },
        {
          name: "Base de conhecimento",
          description: "",
          picture: require("@/assets/knowledge-base.jpg"),
          technologies: ["Vue.js", "Node.js", "Express", "Consign", "Knex"],
        },
        {
          name: "Treinatweet",
          description: "",
          picture: require("@/assets/treinatweet.jpg"),
          technologies: ["React"],
        },
        {
          name: "Stock trader",
          description: "",
          picture: require("@/assets/stock-trader.jpg"),
          technologies: ["Vue.js", "Vuex", "Firebase", "Vuetify"],
        },
        {
          name: "Matador de Monstro",
          description: "",
          picture: require("@/assets/kill-monster.jpg"),
          technologies: ["Vue.js"],
        },
      ],
    };
  },
};
</script>

<style>
</style>