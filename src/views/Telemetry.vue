<template>
  <div class="home">
    <button type="button" class="addComponent" name="change" @click="addComponent">Add component</button>

    <GridLayout
      :layout.sync="layout"
      :col-num="12"
      :row-height="50"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <AbstractModule
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
        @deleteModule="removeComponent($event)"
        @miniModule="minimizeComponent($event)"
      >{{item.i}}</AbstractModule>
    </GridLayout>

    <div>
      <BottomBar name="bottomBar" class="bottom-bar" @openModule="openComponent($event)"></BottomBar>
    </div>
  </div>
</template>

<script >
import AbstractModule from "@/components/AbstractModule.vue";
import BottomBar from "@/components/BottomBar.vue";
import VueGridLayout from "vue-grid-layout";

var moduleRepo = [
  { x: 0, y: 0, w: 1, h: 3, i: "0" },
  { x: 2, y: 0, w: 4, h: 3, i: "1" },
  { x: 4, y: 0, w: 4, h: 3, i: "2" },
  { x: 6, y: 0, w: 4, h: 3, i: "3" },
  { x: 8, y: 0, w: 4, h: 3, i: "4" }
];

// Here is where the instances of the minized modulesare saved
var tempModuleRepo = [];

export default {
  name: "home",
  components: {
    AbstractModule,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    BottomBar: BottomBar
  },
  data() {
    return {
      layout: moduleRepo
    };
  }, 
  mounted() {
    this.$root.$on('deleteTemp',  (id) => {
      this.removeTempComponent(id);
    })
    this.$root.$on('openModule',  (id) => {
      moduleRepo.push(this.getTempComponent(id));
      this.removeTempComponent(id);
    })
  },
  methods: {
    addComponent: function() {
      moduleRepo.push({ x: 8, y: 0, w: 4, h: 3, i: "90" });
      moduleRepo.push({ x: 8, y: 0, w: 4, h: 3, i: "91" });
      moduleRepo.push({ x: 8, y: 0, w: 4, h: 3, i: "92" });
      moduleRepo.push({ x: 8, y: 0, w: 4, h: 3, i: "93" });
      moduleRepo.push({ x: 8, y: 0, w: 4, h: 3, i: "94" });
      moduleRepo.push({ x: 8, y: 0, w: 4, h: 3, i: "95" });
    },
    openComponent: function(id) {
      moduleRepo.push({ i: id });
    },
    minimizeComponent: function(id) {
      tempModuleRepo.push(this.getComponent(id));
      this.removeComponent(id);
      
      //this.$root.$emit('minimize',id);
      this.$root.$emit('minimize',id);
      
      // ajouter id dans liste du bottom bar
    },
    removeComponent: function(id) {
      for (var j = 0; j < moduleRepo.length; j++) {
        if (moduleRepo[j].i == id) {
          moduleRepo.splice(j, 1);
        }
      }
    }, // A fusionner
    removeTempComponent: function(id) {
      for (var j = 0; j < tempModuleRepo.length; j++) {
        if (tempModuleRepo[j].i == id) {
          tempModuleRepo.splice(j, 1);
        }
      }
    },
    getComponent: function(id) {
      for (var j = 0; j < moduleRepo.length; j++) {
        if (moduleRepo[j].i == id) {
          return moduleRepo[j];
        }
      }
    },// A fusionner
    getTempComponent: function(id) {
      for (var j = 0; j < tempModuleRepo.length; j++) {
        if (tempModuleRepo[j].i == id) {
          return tempModuleRepo[j];
        }
      }
    }
  }
};

</script>


<style scoped>
.bottom-bar {
  z-index: 90000;
  position: fixed;
  bottom: 0;
  margin: 0;
  padding: 0;
  height: 50px;
  width: 100vw;
}

</style>