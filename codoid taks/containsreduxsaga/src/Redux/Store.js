import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './Reducer'
import watchGetUser from './Saga'
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore } from 'redux-persist'


const sagaMiddleware = createSagaMiddleware()

const persistConfig={
    key:'root',
    storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV != 'production',
    middleware:[sagaMiddleware],
})

sagaMiddleware.run(watchGetUser)

export const persistor = persistStore(store)
