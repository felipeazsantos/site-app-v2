<template>
   <v-app>
    <v-navigation-drawer app permanent expand-on-hover mini-variant dark>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :href="item.link">
          <v-list-item-icon>
            <v-icon size="30">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <span class="menu-item-title">{{ item.title }}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="main-container">
      <router-view />
    </v-main>

    <v-footer app>
      <Footer />
    </v-footer>

  </v-app>
</template>

<script>

import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  },
  data() {
    return {
      drawer: false,
      items: [
          { title: 'Sobre', icon: 'mdi-account-eye-outline', link: "#about" },
          { title: 'Tecnologias', icon: 'mdi-code-tags', link: "#technologies" },
          { title: 'Experiência', icon: 'mdi-badge-account-horizontal-outline', link: "#worketAt" },
          { title: 'Projetos', icon: 'mdi-widgets', link: "#projects" },
          { title: 'Contato', icon: 'mdi-email-outline', link: "#contact" },
        ],
    };
  },
};
</script>

<style>
 .menu-item-title {
    font-size: 16px;
 }

 .main-container {
    background: rgb(78,79,80);
    background: linear-gradient(90deg, rgba(78,79,80,1) 0%, rgba(47,52,52,1) 53%);
 }

 .perfil-image {
    border-radius: 10px 10px 40px 10px;
  }
</style>