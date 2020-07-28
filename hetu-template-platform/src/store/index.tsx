import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from '../reducer'

// state 变化追踪
const hasExtConfig = false

const configureAppStoreLite = configureStore({
  reducer: rootReducer
})

function configureAppStore(preloadedState?: any) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
    preloadedState,
    enhancers: []
  })

  return store
}

// export type RootState = ReturnType<typeof rootReducer>
export default hasExtConfig ? configureAppStore() : configureAppStoreLite
