import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/telemetry',
      name: 'telemetry',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "telemetry" */ './views/Telemetry.vue'),
    },
    {
      path: '/telemetryLayout',
      name: 'telemetryLayout',
      component: () => import('./views/TelemetryLayout.vue'),
    },
    {
      path: '/moduleOne',
      name: 'moduleOne',
      component: () => import('./views/ModuleOne.vue'),
    },
  ],
});
