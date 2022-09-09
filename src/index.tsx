import ReactDOM from 'react-dom/client'
// import App from "./App";
import MyRouter from 'router'
import 'base.less'
import { Provider } from 'react-redux'
import store from 'store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <MyRouter />
  </Provider>
)
