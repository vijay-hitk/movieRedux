import {configureStore} from '@reduxjs/toolkit';
import  movieDetail  from '../features/moviedetailSlice';


export const store = configureStore({
    reducer : { 
        app : movieDetail,
       
    },
})