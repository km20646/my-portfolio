<template>
    <!-- App.vue -->

    <v-app>
        <v-app-bar app elevation="0" outlined color="white lighten-5" class="black--text" dense>
            <v-toolbar-title class="ml-1 ml-lg-5 font-weight-bold">Jaehyuk's Portfolio</v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- <v-btn text plain color="indigo accent-5">About Me</v-btn> -->
            <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon color="black" v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-btn text plain color="indigo accent-5" href="#skills">SKILLS</v-btn>
                    <v-btn text plain color="indigo accent-5" href="#projects">PROJECTS</v-btn>
                </v-list>
            </v-menu>
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <!-- Provides the application the proper gutter -->
        <!-- If using vue-router -->
        <v-container fluid>
            <router-view></router-view>
        </v-container>
        <v-footer color="white">
            <h5 class="text-center py-5 grey--text">©2022. Lee Jae Hyuk. All rights reserved</h5>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        name: "App",

        components: {},

        data: () => ({
            //
        }),
    };
</script>
<style>
    html,
    body {
        margin: 0;
        padding: 0;
        height: 100%;
    }
</style>
