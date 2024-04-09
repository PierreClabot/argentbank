import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import './style/main.scss'
import { store } from './redux/store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)
