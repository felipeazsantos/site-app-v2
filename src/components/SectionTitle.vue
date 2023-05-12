<template>
    <v-row>
        <v-col>
        <h2 :id="id" class="white--text text-center pb-4 text-h4 font-weight-bold">
            {{ title }}
        </h2>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        title: String,
        id: String
    }
}
</script>

<style>

</style>