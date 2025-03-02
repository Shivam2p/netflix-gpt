import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import MovieReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"

const appStore = configureStore({
    reducer: {
        user:userReducer,
        movies:MovieReducer,
        gpt:gptReducer,
        config:configReducer,
    },
});
export default appStore