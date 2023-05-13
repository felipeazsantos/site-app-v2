<template>
    <v-container class="mt-16 px-16">
      <About class="mb-16" />
      <Technologies class="mb-16" />
      <WorketAt class="mb-16" />
      <Projects class="mb-16" />
      <Contact class="mb-16" />
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