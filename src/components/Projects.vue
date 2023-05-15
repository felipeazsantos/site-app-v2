<template>
  <div>
    <SectionTitle title="Projetos" id="projects" />
    <v-row>
      <v-col class="d-flex justify-center align-center px-2 flex-wrap">
        <div v-for="project in projects" :key="project.name">
          <v-hover v-slot="{ hover }" class="mt-4">
            <v-card
              :elevation="hover ? 12 : 2"
              class="mx-auto mr-1"
              height="300"
              max-width="300"
              width="300"
              dark
            >
              <v-img 
                :src="project.picture"
                class="white--text"
                gradient="to top, rgba(0,0,0,.7), rgba(0,0,0,.9)"
                height="300px"
                :alt="project.name">
                
                <v-card-title class="d-flex justify-center font-weight-bold text-uppercase teal--text text--lighten-1">
                  {{ project.name }}
                </v-card-title>
                <v-card-content class="d-flex justify-center align-center mx-8 text-justify text-subtitle-2 font-weight-bold">
                  {{ project.description }}
                </v-card-content>
                <v-card-actions class="d-flex justify-center align-center my-4">
                  <v-btn class="teal lighten-1 font-weight-bold">Conhecer</v-btn>
                </v-card-actions>
              </v-img>
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
          description: `Projeto para registro de artigos. Fiz o back-end utilizando Node.js com Express, MongoDB e PostgresSQL. No front utilizei vários recursos do Vue.js como Vuex, Vue-router,
            Hooks, Vue-editor, Vue-tree, renderização condicional e loops.`,
          picture: require("@/assets/knowledge-base.jpg"),
          technologies: ["Vue.js", "Node.js", "Express", "Consign", "Knex"],
        },
        {
          name: "Treinatweet",
          description: "Projeto para postar tweets (simulando posts do twiter), o projeto é em React. Eu fiz enquanto estava estudando a tecnologia em um curso",
          picture: require("@/assets/treinatweet.jpg"),
          technologies: ["React"],
        },
        {
          name: "Stock trader",
          description: "Projeto de compra e venda de ações. Utilizei o firebase como backend para persistir os dados e alguns recursos do Vue com o objetivo de aplicar o que estava estudando",
          picture: require("@/assets/stock-trader.jpg"),
          technologies: ["Vue.js", "Vuex", "Firebase", "Vuetify"],
        },
        {
          name: "Matador de Monstro",
          description: "O projeto é um game onde pude aplicar conceitos importantes do Vue.js e bastante lógica através de bibliotecas randomicas do Javascript",
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