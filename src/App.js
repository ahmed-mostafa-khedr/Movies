import './index.css';
import {Container} from 'react-bootstrap'
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';

import {BrowserRouter , Routes , Route} from 'react-router-dom'

import MovieDetals from './components/MovieDetals';




function App() {



 



  
  return (

    <>
    <NavBar />
    <Container>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList  />}/>
        <Route path="movie/:id" element={ <MovieDetals/>} />
      </Routes>
      </BrowserRouter>
      
     
    </Container>
    </>
  );
}

export default App;
