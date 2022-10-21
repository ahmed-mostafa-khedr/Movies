import Container from 'react-bootstrap/Container';

import {Navbar} from 'react-bootstrap';
import RubberBand from 'react-reveal/RubberBand';
import  s from '../images/s.png';
import {getMovies} from '../redux/actions'
import { useDispatch} from 'react-redux';
import {getSelectedMovie} from '../redux/actions'

function NavBar() {

  const onSearch=(word)=>{
    searching(word)
    
  }


  const dispatch = useDispatch()
  const searching =  (word)=>{
    if(word !== ""){
      dispatch(getSelectedMovie(word))
      
    }else{
      dispatch(getMovies())
    }
  
  }

   
    



  return (
    <>
    <Navbar style={{backgroundColor:"black" ,boxShadow:"0 0 200px white" }} className="font" expand="lg">
      <Container > 
        <RubberBand>
        <Navbar.Brand
        href="/" 
        className="logo" 
        style={{color:"white" , fontWeight:"bold",position:"relative"}}>
            Cinema Store
        </Navbar.Brand>
        </RubberBand>
 
            <dix style={{display:"flex" , width:"50%" ,position:"relative"}}>
            <img src={s} className="search-img" alt="Movie Pic"/>
            <input
              type="text"
              style={{width:"100%", borderRadius:"7px", outlineColor:"#fd7f17" ,border:"0" }}
              className="me-2 px-2"
              onChange={(e)=> onSearch(e.target.value)}
              placeholder="إبحث......"
              />
            
          </dix>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;