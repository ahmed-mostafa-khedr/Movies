

export const moviesReducer=(state ={movies:[],pageCount:0},action)=>{

switch(action.type){
    case "ALLMOVIES":
        return { movies : action.viewAllMovies , pageCount: action.pagesnum }
    default:
        return  state;
}

}