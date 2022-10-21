import React from 'react'
import { Link  } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import {getMovieDetails} from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

const MovieDetals = () => {


  const dispatch = useDispatch();
  const detail=useSelector(state => state.movies);

  const Params=useParams()

  useEffect(()=>{
    dispatch(getMovieDetails(Params));
  },[])

  return (
    <>
    <Zoom >

    <div className="row   mb-3 justify-content-center"  style={{marginTop:"50px"}}>

    <img src={ `//image.tmdb.org/t/p/w500${detail.poster_path}`} alt='pic' className=' col-3'/>
    <img src={ `//image.tmdb.org/t/p/w500${detail.backdrop_path}`} alt='pic' className=' col-3'/>
     
    </div>
    <div className="row   mb-3  font-ar " style={{color:"#fd7f17",borderBottom:"1px solid #fd7f17" ,boxShadow:"5px 0 1px black"}}>
      <p className='h3 story'> اسم الفيلم: <span className='mx-1 text-light h5' >{detail.title}</span> </p>
      <p className='h3 story'> تاريخ الفيلم: <span className='mx-1 text-light h6' >{detail.release_date}</span> </p>
      <p className='h3 story'> عدد المقيمين: <span className='mx-1 text-light h6' >{detail.vote_count}</span> </p>
      <p className='h3 story'> التقييم : <span className='mx-1 text-light h6' >{detail.vote_average}</span> </p>

    </div>    
    <div className="row   mb-3  font-ar " style={{color:"#fd7f17",borderBottom:"1px solid #fd7f17" ,boxShadow:"5px 0 1px black"}}>
      <p className='h2 story  text-center'> قصة الفيلم: <p className='mt-3 text-center text-light h6' >{detail.overview}</p> </p>
    </div> 

    <div className="row d-block font-ar my-5  text-center">
      
      <Link to="/">
      <input className='col-3 mx-3 btn btn-outline-light' type="button" value="عوده للرئسية" />
      </Link>
    
    
      <a className='col-3 btn btn-outline-light' href={detail.homepage}> مشاهدة الفيلم </a> 
      
    </div> 
    </Zoom>  
    </>
  )
}

export default MovieDetals