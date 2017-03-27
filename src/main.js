// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

import PageContent from './components/PageContent';
import Person from './components/Person';

Vue.use(VueResource);

Vue.component('page-content', PageContent);
Vue.component('person', Person);

Vue.use(VueMaterial);
Vue.config.productionTip = false;
Vue.material.registerTheme({
  amir: {
    primary: {
      color: 'pink',
      hue: 800
    },
    accent: {
      color: 'pink',
      hue: 800
    }
  }
});
Vue.material.setCurrentTheme('amir');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
