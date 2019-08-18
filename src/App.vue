<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <!-- eslint-disable -->
        <router-link to="/contact">
          <v-list-item @click>
            <v-list-item-content>
              <v-list-item-title>Modules</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/favorite">
          <v-list-item @click>
            <!-- eslint-enable -->
            <v-list-item-content>
              <v-list-item-title>Connection</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    

    <v-app-bar app color="blue" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="headline text-uppercase">
        <span>Sonia</span>
        
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <router-view></router-view>
            
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer color="blue" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>
