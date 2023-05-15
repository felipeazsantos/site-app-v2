<template>
    <v-container>
        <v-row align="center" dense justify="center">
            <v-col cols="12" sm="5" class="mx-auto pa-0">
                <div class="d-flex flex-column justify-center align-center white--text pb-4 font-weight-medium">
                    <h2 id="about" class="align-self-sm-start white--text  pb-4 text-sm-h3 text-h4 font-weight-bold header-title">Software Developer</h2>
                    <span :class="textAlign">
                        Possuo mais de 5 anos de experiência em desenvolvimento de software
                        Atuando com tecnologias front-end e back-end.
                        Estou sempre em busca em me desenvolver como profissional, estudando e aplicando tudo que aprendo.
                    </span>
                </div>
            </v-col>
            <v-col cols="12" sm="5" class="d-flex justify-center  align-center pa-4">
                <img src="@/assets/felipe_perfil.jpeg" width="300" class="perfil-image" alt="Imagem de Perfil" />
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
export default {
    computed: {
        textAlign() {
            if (this.windowWidth > 600) {
                return 'text-justify'
            } else {
                return 'text-center'
            }
        }
    },
    data() {
        return {
            windowWidth: window.innerWidth
        }
    }
}
</script>

<style>
    .header-title {
        text-shadow: 3px 3px 3px teal;
    }

    .perfil-image {
       border: 3px solid teal;
        box-shadow: 3px 3px 5px teal;
    }
</style>