import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import MovieReducer from "./movieSlice"

const appStore = configureStore({
    reducer: {
        user:userReducer,
        movies:MovieReducer,
    },
});
export default appStore