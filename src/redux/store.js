import createSagaMiddleware from '@redux-saga/core';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { quotesSlice } from './quotesSlice'
import quoteSaga from './sagas';

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: combineReducers({ quotes: quotesSlice.reducer }),
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(quoteSaga);

export default store