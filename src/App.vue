<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <!-- eslint-disable -->
        <router-link to="/telemetry">
          <v-list-item @click>
            <v-list-item-content>
              <v-list-item-title>Telemetry</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>Modules</v-expansion-panel-header>
            <v-expansion-panel-content>
              <router-link to="/moduleOne">
                <v-list-item @click>
                  <v-list-item-content>
                    <v-list-item-title>Module 1</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
              <router-link to="/moduleOne">
                <v-list-item @click>
                  <v-list-item-content>
                    <v-list-item-title>Module 2</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
              <router-link to="/moduleOne">
                <v-list-item @click>
                  <v-list-item-content>
                    <v-list-item-title>Module 3</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
              
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <router-link to="/telemetryLayout">
          <v-list-item @click>
            <!-- eslint-enable -->
            <v-list-item-content>
              <v-list-item-title>Save/Load Layout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/connection">
                <v-list-item @click>
                  <v-list-item-content>
                    <v-list-item-title>Connection</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-btn text x-large color="primary" @click.stop="drawer = !drawer">
        
          <img src="./assets/logo_color.png" alt="logo-sonia" width="120px" height="auto" />
        
      </v-btn>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.bg-black {
  background-color: #111111;
}

body {
  margin: 0;
}

.size-md {
  width: 100px;
}
</style>