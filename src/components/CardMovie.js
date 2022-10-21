import {Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';


const CardMovie=({M})=>{
    const images=`//image.tmdb.org/t/p/w500${M.poster_path}`

    return (
        <>
    <Col xs="6" md="4" lg="3" className='my-1'>
        <Zoom>
        <Link to={`/movie/${M.id}`}>
        <Card className='card' style={{border:"0",  boxShadow: "0 5px 20px black"}}>
            <img src= {images} alt='pic' className='card-image'/>
            <div className='card-overlay'>
                <div className='overlay-text text-center w-100 p-2'>
                    <p> اسم الفيلم: {M.title} </p>
                    <p> تاريخ الاصدار: {M.release_date} </p>
                    <p> النوع: سسسسس </p>
                    <p> المشاهدات: {M.vote_count} </p>
                    <p> التقيم: {M.vote_average} </p>
                </div>
            </div>
        </Card>
        </Link>
        </Zoom>
    </Col>
    </>
    )
}
export default CardMovie ;