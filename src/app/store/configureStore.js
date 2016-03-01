import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import storage from '../utils/storage'

const loggerMiddleware = createLogger()

const enhancer = compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware),
  storage(),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
