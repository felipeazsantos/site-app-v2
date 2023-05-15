<template>
  <v-container>
      <About class="mb-14" />
      <Technologies class="mb-14" />
      <WorketAt class="mb-14" />
      <Projects class="mb-14" />
      <Contact class="mb-14" />
  </v-container>
</template>

<script>
import About from '@/components/About.vue'
import Technologies from '@/components/Technologies.vue'
import WorketAt from '@/components/WorketAt.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Index',
  components: {
    About,
    Technologies,
    WorketAt,
    Projects,
    Contact,
  },

}
</script>

<style>

</style>