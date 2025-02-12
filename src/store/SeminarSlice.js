import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchingSeminars = createAsyncThunk(
    'seminars/fetchingSeminars', 
    async (_, {rejectWithValue})=>{
        try{
            const response = await axios.get(`http://localhost:3001/seminars`)
            return response.data
        } catch(e) {
            return rejectWithValue(e.message)
        }
    }
)

export const deleted = createAsyncThunk(
    'seminars/deleted',
    async (id, {rejectWithValue, dispatch})=>{
        try{
            const response = await axios.delete(`http://localhost:3001/seminars/${id}`)
            return dispatch(deletedSeminar(id))
        } catch(e) {
            return rejectWithValue(e.message)
        }
    }
)

export const patch = createAsyncThunk(
    'seminars/patch',
    async (id,  {rejectWithValue, dispatch})=>{
        try{
            const response = await axios.patch(`http://localhost:3001/seminars/${id}`)
            return dispatch(patchSeminar(id))
        } catch(e) {
            return rejectWithValue(e.message)
        }
    }
)

const SeminarSlice = createSlice({
    name: 'seminars',
    initialState:{
        seminars: [],
        status: false,
        error: '',
        updateSeminar: {
            id: '',
            title: '', 
            description: '', 
            date: '', 
            time: '', 
            photo: ''
        }
    },
    reducers: {
        changeTitle(state, {payload}) {
            state.updateSeminar.title = payload
        },
        changeDescription(state, {payload}) {
            state.updateSeminar.description = payload
        },
        changeDate(state, {payload}) {
            state.updateSeminar.date = payload
        },
        changeTime(state, {payload}) {
            state.updateSeminar.time = payload
        },
        changePhoto(state, {payload}) {
            state.updateSeminar.photo = payload
        },

        deletedSeminar(state, {payload}) {
            state.seminars = state.seminars.filter(seminar => seminar.id !== payload)
        },
        patchSeminar(state, {payload}){
            const newSeminar = {
                id: payload,
                title: state.updateSeminar.title, 
                description: state.updateSeminar.description, 
                date: state.updateSeminar.date, 
                time: state.updateSeminar.time, 
                photo: state.updateSeminar.photo
            }
            state.seminars = state.seminars.map(seminar => {
                if(seminar.id === payload) 
                    return newSeminar
                else {
                    return seminar
                }
            })
            state.updateSeminar = {
                id: '',
                title: '', 
                description: '', 
                date: '', 
                time: '', 
                photo: ''
            }
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchingSeminars.pending, (state, {payload})=>{
            state.status= true;
        })
        builder.addCase(fetchingSeminars.fulfilled, (state, {payload})=> {
            state.status= false;
            state.seminars = payload;
        })
        builder.addCase(fetchingSeminars.rejected, (state, {payload})=> {
            state.status= false;
            state.error = payload
        })
    }
})

export const {changeTitle, changeDescription, changeDate, changeTime, changePhoto, deletedSeminar, patchSeminar} = SeminarSlice.actions

export default SeminarSlice.reducer