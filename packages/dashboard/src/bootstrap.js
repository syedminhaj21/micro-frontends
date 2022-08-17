import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount function to start up the app
const mount = el => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// If we are in isolation call the mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through the Container and we should export mount function
export { mount };
