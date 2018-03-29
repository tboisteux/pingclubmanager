import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient } from 'apollo-mobx';
import { ApolloLink } from 'apollo-link';
import { setContext as SetContextLink } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Provider } from 'mobx-react';

const setContext = (context) => context.auth = 'myToken';

const link: any = ApolloLink.from([
  new SetContextLink(setContext),
  new HttpLink({ uri: 'http://localhost:4000/graphql' }),
]);

const cache = new InMemoryCache(window.__APOLLO_STATE_);

const client = new ApolloClient({
  cache,
  link,
});

ReactDOM.render(
  <Provider client={client}>
    <App/>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
