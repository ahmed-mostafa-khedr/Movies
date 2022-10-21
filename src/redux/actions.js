
import axios from 'axios';





//Action to Get Movies & Pages
export const getMovies = ()=>{

     // using axios to import db
    return async (waitreturn)=>{
        
        const response =await  axios.get("https://api.themoviedb.org/3/movie/popular?api_key=5b96b970ad965f135d27e754ce54ac80&language=ar")
     
        waitreturn({type:"ALLMOVIES" , viewAllMovies: response.data.results , pagesnum : response.data.total_pages} )
    }
}

//search action
export const getSelectedMovie = (word)=>{

     // using axios to import db
    return async (waitreturn)=>{
        
        const response =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5b96b970ad965f135d27e754ce54ac80&query= ${word}`)
      
        waitreturn({type:"ALLMOVIES" , viewAllMovies: response.data.results , pagesnum : response.data.total_pages } )
    }
}
//page counter action
export const getPageCounte = (pageNum)=>{

     // using axios to import db
    return async (waitreturn)=>{
        
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5b96b970ad965f135d27e754ce54ac80&language=ar&page= ${pageNum}`)
      
        waitreturn({type:"ALLMOVIES" , viewAllMovies: response.data.results , pagesnum : response.data.total_pages } )
    }
}
//movie details
export const getMovieDetails = (p)=>{
    
     // using axios to import db
    return async (waitreturn)=>{

        const response = await axios.get(`https://api.themoviedb.org/3/movie/${p.id}?api_key=5b96b970ad965f135d27e754ce54ac80&language=ar`)
      
        waitreturn({type:"ALLMOVIES" , viewAllMovies: response.data , pagesnum : response.data.total_pages } )
    }
}