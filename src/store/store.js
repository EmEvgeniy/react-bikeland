import BurgerReducer from "./slices/BurgerSlice";
import searchReducer from "./slices/searchStatus";
import favoriteReducer from "./slices/favoriteSlice";
import basketReducer from "./slices/basketSlice";
import callReducer from "./slices/callSlice";
import cardReducer from "./slices/cardDetailsSlice";
import blogReducer from "./slices/blogCardSlice";
import filterReducer from "./slices/filterSlice";
import titleReducer from "./slices/titleSlice";
import categoryIdReducer from "./slices/categoryId";
import { resourcesApi } from "./middleWares/resourcesApi";
import { blogApi } from "./middleWares/blogApi";
import { FormApi } from "./middleWares/FormApi";
import { productsApi } from "./middleWares/productsApi";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
	[FormApi.reducerPath]: FormApi.reducer,
	[productsApi.reducerPath]: productsApi.reducer,
	[resourcesApi.reducerPath]: resourcesApi.reducer,
	[blogApi.reducerPath]: blogApi.reducer,
	burger: BurgerReducer,
	search: searchReducer,
	favorite: favoriteReducer,
	basket: basketReducer,
	call: callReducer,
	category: categoryIdReducer,
	card: cardReducer,
	blog: blogReducer,
	filter: filterReducer,
	title: titleReducer,
});

const persistConfig = {
	key: "root",
	storage,
	blacklist: [
		"card",
		"blog",
		"burger",
		"search",
		"FormApi",
		"productsApi",
		"categoryIdReducer",
		"resourcesApi",
		"blogApi",
	],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat([
			FormApi.middleware,
			productsApi.middleware,
			resourcesApi.middleware,
			blogApi.middleware,
		]),
});

export const persistor = persistStore(store);
export default store;
