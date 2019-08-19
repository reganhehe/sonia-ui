 <template>
  <div
    ref="item"
    class="vue-grid-item color"
    :class="{ 'vue-resizable' : resizableAndNotStatic, 'static': static, 'resizing' : isResizing, 'vue-draggable-dragging' : isDragging, 'cssTransforms' : useCssTransforms, 'render-rtl' : renderRtl, 'disable-userselect': isDragging, 'no-touch': isAndroid }"
    :style="style"
  >
    <div class="top-module-bar">
      <button type="button" class="xButton" name="close module" @click="closeModule">x</button>
    </div>
    <button type="button" class="xButton" name="close module" @click="openModule">Open</button>
    <h1></h1>
    <slot></slot>
    <span v-if="resizableAndNotStatic" ref="handle" :class="resizableHandleClass"></span>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";

export default {
  extends: VueGridLayout.GridItem,
  methods: {
    closeModule: function() {
      this.$emit('deleteModule', this.i);
    },
    openModule: function() {
      this.$emit('openMiniModule', this.i);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.color {
  background-color: #1b5dd8;
}

.top-module-bar {
  background-color: #076ff8;
  width: 100%;
  height: 18px;
  opacity: 1;
  z-index: 5000!important;
}

.xButton {
  background-color: #ff0909; /* Green */
  border: none;
  color: #111111;
  padding: 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 19px;
  font-weight: bold;
  position: fixed;

  right: 0;
  transition-duration: 0.4s;
}

.xButton:hover {
  background-color: #a32727;
  border: none;
  color: #111111;
  padding: 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 19px;
  position: fixed;

  right: 0;
  transition-duration: 0.4s;
}
</style>
