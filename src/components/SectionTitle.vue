<template>
    <v-row>
        <v-col>
        <h2 :id="id" class="white--text text-center pb-4 text-h4 text-sm-h3 font-weight-bold header-title">
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
    .header-title {
        text-shadow: 3px 3px 3px teal;
    }
</style>