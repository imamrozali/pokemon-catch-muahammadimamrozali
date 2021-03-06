import React from "react";
import ReactDOM from "react-dom";
import client from './graphql/client';
import { ApolloProvider } from '@apollo/client';
import { AppProvider } from './utils/app.state';
import App from './App';
import './injectGlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AppProvider>
        <App />
      </AppProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
