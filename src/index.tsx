import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createClient, Provider } from 'urql';
import './index.css'


const client = createClient({
  url: 'https://api.spacex.land/graphql/',
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
)
