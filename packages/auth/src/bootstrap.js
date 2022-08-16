import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start up the app
const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
  // history.listen will onvoke the onNavigate callback from any SubApp and history object will pass an argument 'location' which contains pathname
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath]
    });
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      console.log('nextPathname', nextPathname);
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
  };
};

// If we are in isolation call the mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through the Container and we should export mount function
export { mount };
