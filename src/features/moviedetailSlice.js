import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

//create action 
export const createMovie = createAsyncThunk('createMovie', async (data,{rejectWithValue}) => {

    const response = await fetch('https://667aa32ebd627f0dcc8fda62.mockapi.io/movie/crud',{
        method : 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body : JSON.stringify(data)
    });
    try{

        const result = await response.json();
        return result;

    }catch(err){
        return rejectWithValue(err);


    }
})

//Read action

export const showMovies = createAsyncThunk('showmovie', async (args,{rejectWithValue}) =>{
    const response = await fetch('https://667aa32ebd627f0dcc8fda62.mockapi.io/movie/crud')

    try{
        const result = await response.json();
        return result;
        
    }catch(err){
        return rejectWithValue(err);

    }

})

//Delete action
export const deleteMovie = createAsyncThunk('deleteMovie', async (id , {rejectWithValue})=>{
    const response = await fetch(`https://667aa32ebd627f0dcc8fda62.mockapi.io/movie/crud/${id}`,{
        method:'DELETE'
    })
    try{
        const result = await response.json();
        return result;
    }
    catch(err){
        return rejectWithValue(err);
    }
   
})

//Update Movie 
export const updateMovie = createAsyncThunk('updateMovie' , async (data , {rejectWithValue})=>{
    const response = await fetch(`https://667aa32ebd627f0dcc8fda62.mockapi.io/movie/crud/${data.id}`,{
        method : 'PUT',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify(data)
    })
    try{
        const result = await response.json();
        return result;
    }
    catch(err){
        return rejectWithValue(err);
    }
}) 


//createAsyncThunk return promise , so now we have to handle in extraReducers 

export const movieDetail = createSlice({
    name : "movieDetail",
    initialState : {
        movies : [],
        loading : false ,
        error : null,
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(createMovie.pending, (state) => {
            state.loading = true;
        })
        .addCase(createMovie.fulfilled , (state,action) =>{
            state.loading = false ;
            state.movies.push(action.payload);

        })
        .addCase(createMovie.rejected ,(state,action) => {
            state.loading = false ;
            state.error = action.payload;
        })
        .addCase(showMovies.pending, (state) => {
            state.loading = true;
        })
        .addCase(showMovies.fulfilled , (state,action) =>{
            state.loading = false ;
            state.movies = action.payload;

        })
        .addCase(showMovies.rejected ,(state,action) => {
            state.loading = false ;
            state.error = action.payload;
        })
        .addCase(deleteMovie.pending , (state) =>{
            state.loading = true ;
        })
        .addCase(deleteMovie.fulfilled, (state,action) => {
            state.loading = false;
            console.log(action.payload);

            const {id} = action.payload;
            if(id){
                state.movies = state.movies.filter((ele) => ele.id !== id);
            }
           
        })
        .addCase(deleteMovie.rejected , (state,action) => {
            state.loading = false;
            state.error = action.payload;

        })
        .addCase(updateMovie.pending,(state,action) => {
            state.loading = true;
        })
        .addCase(updateMovie.fulfilled,(state,action) => {
            state.laoding = false;
            state.movies = state.movies.map((ele) => ele.id === action.payload.id ? action.payload :ele);

        })
        .addCase(updateMovie.rejected,(state,action) => {
            state.laoding = false;
            state.error = action.payload;
        })
    }


})

export const {toggleWatch} = movieDetail.actions;
export default movieDetail.reducer;
