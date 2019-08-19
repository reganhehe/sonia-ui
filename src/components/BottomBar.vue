<template>
  <div class="bottomBar bg-black">
    <GridLayout
      :layout.sync="layout"
      :col-num="30"
      :row-height="12"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <MiniModule
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
        @deleteModule="removeComponent($event)"
        @openMiniModule="openComponent($event)"
      >{{item.i}}</MiniModule>
    </GridLayout>
    <button type="button" class="killswitch" name="killswitch" @click="removeComponent(2)">KILL</button>
  </div>
</template>

<script >
import MiniModule from "@/components/MiniModule.vue";
import VueGridLayout from "vue-grid-layout";

var miniModules = [];

export default {
  name: "bottomBar",
  props: [],
  created: function() {
    //alert(this.miniModuleId);
  },
  mounted() {
    this.$root.$on("minimize", id => {
      this.addComponent(id);
    });
  },
  components: {
    MiniModule,
    GridLayout: VueGridLayout.GridLayout
  },
  data() {
    return {
      layout: miniModules
    };
  },
  methods: {
    addComponent: function(id) {
      miniModules.push({ x: 8, y: 0, w: 1, h: 3, i: id });
    },
    removeComponent: function(id) {
      this.$root.$emit("deleteTemp", id);
      for (var j = 0; j < miniModules.length; j++) {
        if (miniModules[j].i == id) {
          miniModules.splice(j, 1);
        }
      }
    },
    openComponent: function(id) {
      this.$root.$emit("openModule", id);
      this.removeComponent(id);
    }
  }
};
</script>


<style scoped>
.size-md {
  width: 250px;
}

.killswitch {
  z-index: 100000;
  background-color: #ff0909;
  border: none;
  color: #111111;
  padding: auto;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 32px;
  font-weight: 900;
  position: absolute;
  bottom: 0;
  right: 40px;
  transition-duration: 0.4s;
  opacity: 1 !important;
}

.killswitch:hover {
  background-color: #a32727;
  border: none;
  color: #111111;
  padding: auto;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 39px;
  position: absolute;
  bottom: 0;
  right: 0;
  transition-duration: 0.4s;
  height: 100%;
}
</style>