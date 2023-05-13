<template>
    <div>
      <SectionTitle title="Contato" id="contact" />
       <v-card class="pa-2 mt-2" dark>
        <form @submit.prevent="submit">
            <v-container>
              <v-row no-gutters>
                <v-col cols="12">
                  <v-text-field
                    label="Nome"
                    placeholder="Infomr seu nome"
                    outlined
                    dense
                  /> 
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="12">
                  <v-text-field
                    label="E-mail"
                    placeholder="Infomr seu e-mail"
                    outlined
                    dense
                  /> 
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="12">
                   <v-textarea
                    label="Mensagem:"
                    outlined
                    placeholder="Escreva a sua mensagem, assim que receber respondo :D"
                    v-model="message"
                    height="100"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="12">
                   <v-btn
                      class="mr-2 teal lighten-1 white--text font-weight-bold"
                      type="submit"
                    >
                      Enviar
                    </v-btn>
                    <v-btn class="teal lighten-1 white--text font-weight-bold">
                      Limpar dados
                    </v-btn>
                </v-col>
              </v-row>
            </v-container>
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