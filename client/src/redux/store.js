import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { postsApi } from '../features/posts/postsApi';
import postsSlice from '../features/posts/postsSlice';
import commentsSlice from '../features/comments/commentsSlice';
import { commentsApi } from '../features/comments/commentsApi';

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  serializableCheck: false,
  [postsApi.reducerPath]: postsApi.reducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
  posts: postsSlice,
  comments: commentsSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware).concat(commentsApi.middleware),
});

export const persistor = persistStore(store);



