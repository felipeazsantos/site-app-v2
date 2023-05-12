<template>
    <div>
      <SectionTitle title="Contato" id="contact" />
       <v-card class="px-16 pt-16 pb-12 mt-2">
        <form @submit.prevent="submit">
          
              <v-textarea
                label="Mensagem:"
                placeholder="Digite a sua mensagem, assim que receber respondo :D"
                v-model="message"
                height="60"
              ></v-textarea>

              <v-btn
                class="mr-4 blue darken-3 white--text"
                type="submit"
              >
                Enviar
              </v-btn>
              <v-btn class="blue darken-3 white--text">
                Limpar dados
              </v-btn>
         
          </form>
         </v-card>
    </div>
</template>

<script>
import SectionTitle from './SectionTitle.vue'

export default {
  components: {SectionTitle},
  data() {
    return {
      message: ''
    }
  }

}
</script>

<style>

</style>