import { configureStore } from "@reduxjs/toolkit";
import SeminarReducer from './SeminarSlice'

export default configureStore({
    reducer: {
        seminars: SeminarReducer,
    }
})