 <template>
  <div
    ref="item"
    class="vue-grid-item color white-text"
    :class="{ 'vue-resizable' : resizableAndNotStatic, 'static': static, 'resizing' : isResizing, 'vue-draggable-dragging' : isDragging, 'cssTransforms' : useCssTransforms, 'render-rtl' : renderRtl, 'disable-userselect': isDragging, 'no-touch': isAndroid }"
    :style="style"
  >
    <div class="top-module-bar">
      <button type="button" class="fButton" name="fix module" @click="fixModule">=</button>
      <button type="button" class="mButton" name="minimize module" @click="minimizeModule">--</button>
      <button type="button" class="xButton" name="close module" @click="closeModule">x</button>
    </div>

    <!-- <h2>{getId()}</h2> -->
    <slot></slot>
    <span v-if="resizableAndNotStatic" ref="handle" :class="resizableHandleClass"></span>
    <!--<span v-if="draggable" ref="dragHandle" class="vue-draggable-handle"></span>-->
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";

export default {
  extends: VueGridLayout.GridItem,
  methods: {
    closeModule: function() {
      this.$emit("deleteModule", this.i);
    },
    getId: function() {
      return this.i;
    },
    minimizeModule: function() {
      this.$emit("miniModule", this.i);
    },
    fixModule: function() {
      this.static = !(this.static);
    },
    alertId: function() {
      alert(this.i);
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

.white-text {
  color: #ffffff;
  font-weight: bold;
}

.color {
  background-color: #0e5280;
}

.top-module-bar {
  background-color: #000000;
  width: 100%;
  height: 18px;
}

.xButton {
  background-color: #ff0909; /* Green */
  border: none;
  color: #111111;
  padding: 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
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

.mButton {
  background-color: #f3f023;
  border: none;
  color: #111111;
  padding: 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  position: fixed;

  right: 10px;
  transition-duration: 0.4s;
}

.mButton:hover {
  background-color: #c9b825;
  border: none;
  color: #111111;
  padding: 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 19px;
  position: fixed;

  right: 10px;
  transition-duration: 0.4s;
}
.fButton {
  background-color: #23f357;
  border: none;
  color: #111111;
  padding: 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  position: fixed;

  right: 23px;
  transition-duration: 0.4s;
}

.fButton:hover {
  background-color: #139746;
  border: none;
  color: #111111;
  padding: 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 23px;
  position: fixed;

  right: 18px;
  transition-duration: 0.4s;
}
</style>
