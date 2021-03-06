import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootEpic from '../epics/rootEpics'
import rootReducer from '../reducers/rootReducer'

export default function configureStore() {
  const epicMiddleware = createEpicMiddleware()
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        epicMiddleware,
        createLogger({
          diff: true,
          collapsed: true,
          actionTransformer: (action: any) => {
            return action
          },
        }),
      ),
    ),
  )
  epicMiddleware.run(rootEpic)
  return store
}
