import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import {
  combineReducers,
  compose,
  createStore,
} from 'redux'
import { Provider } from 'react-redux'
import {
  Actions as FarceActions,
  BrowserProtocol,
  createHistoryEnhancer,
  queryMiddleware,
} from 'farce'
import {
  createConnectedRouter,
  createMatchEnhancer,
  createRender,
  Matcher,
  foundReducer,
  resolver,
} from 'found'

import RequestsContainer from './containers/Requests'
import PaymentDetail from './components/Requests/PaymentDetail'
import RequestDetail from './components/Requests/RequestDetail'
import siteReducer from './reducers/site'

const routeConfig = [
  {
    path: '/requests',
    Component: RequestsContainer,
    children: [
      {
        path: 'payment/:id',
        Component: PaymentDetail,
      },
      {
        path: 'request/:id',
        Component: RequestDetail,
      },
    ],
  },
]

const reducers = combineReducers({
  found: foundReducer,
  site: siteReducer,
})

const store = createStore(
  reducers,
  compose(
    createHistoryEnhancer({
      protocol: new BrowserProtocol(),
      middlewares: [queryMiddleware],
    }),
    createMatchEnhancer(new Matcher(routeConfig)),
  ),
)

store.dispatch(FarceActions.init())

const ConnectedRouter = createConnectedRouter({
  render: createRender({
    renderError: ({ error }) => <div>{error.status === 404 ? 'Not Found' : 'Error'}</div>,
  }),
})

const RequestsPage = () => (
  <Provider store={store}>
    <ConnectedRouter resolver={resolver} />
  </Provider>
)

// Check if we're on the requests page
const el = document.getElementById('app')
if (el) ReactDOM.render(<RequestsPage />, el)

export default RequestsPage
