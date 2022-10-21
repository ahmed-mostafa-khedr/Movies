import {Row , Alert , Spinner} from "react-bootstrap";
import CardMovie from './CardMovie'
import PaginationBar from './PaginationBar'
import { useState,useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getMovies} from '../redux/actions'
import Rotate from 'react-reveal/Rotate';
 const MovieList =()=>{

const [Movies,setMovies]=useState([])
const [welcome,setNum]=useState([""])


  // dispatch actions

  const dispatch = useDispatch()
  useEffect(() => {
 
    dispatch(getMovies())
    
  }, [])

  const moviesData = useSelector(state => state.movies)
  useEffect(() => {
 
    setMovies(moviesData)
    
  }, [moviesData])

  useEffect(() => {


  setInterval(() => {
    setNum(() => "Watch Movies Online")
  },1500); 

  },[])

    return (
        
        <>
       
              <Row  className="mt-1  h1 " style= {{backgroundColor:"#fd7f17" ,height:"100px",direction:"ltr" , borderRadius:"10px" ,color:"white",position:"relative",zIndex:"10" }}>
              <p className=" h2 text-center m-auto"  style= {{textShadow:"0 2px 5px black"}} ><Rotate> {welcome}</Rotate> </p>
              </Row>
               
        

        
        <Row className="mt-5">
        { 
        moviesData.length >= 1 ?
        (moviesData.map(M =>{ return( <CardMovie key={M.id} M={M}/>  )}
        
        )) :<>
        <Alert className=" bg-light text-danger">   
     معزرة!<br/>جاري اضافه افلام جديده.... 
     <Spinner animation="border" role="status" style={{color:"#fd7f17" ,width:"15px" , height:"15px"}}>
      
      </Spinner>
        </Alert>
        </>
        }
        {
            Movies.length >= 1 && <PaginationBar /> 
        }
      
        
    </Row>
    </>
    
    )
}
export default MovieList ;