<template>
    <v-app>
        <router-view></router-view>
        <v-footer color="primary" app>
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>

export default {
    name: "App",

    data: () => ({
        //
    })
};
</script>
