import ReactPaginate from 'react-paginate';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPageCounte } from './../redux/actions';



const PaginationBar =()=> {

  const dispatch= useDispatch()
  const pages = useSelector(state => state.pageCount)

  // dispatch actions


  useEffect(() => {
 
    dispatch(getPageCounte(pages))

  }, [])


  
  //get curr page

  const handlePageClick= (data)=> {
  
    dispatch(getPageCounte(data.selected + 1))
  }

  




  return (
    <>

      <ReactPaginate
      style={{backgroundColor:"red"}}
        breakLabel="...."
        nextLabel=" >>"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={ pages > 500 ? pages -34831 : pages }
        previousLabel="<<"
        
        containerClassName={"pagination justify-content-center p-2 my-3  "}
        pageClassName={"page-item xx"}
        pageLinkClassName={"page-link text-dark"}
        previousClassName={'page-item '}
        previousLinkClassName={"page-link n-p xx"}
        nextClassName={'page-item'}
        nextLinkClassName={"page-link n-p xx"}
        breakClassName={"page-item xx"}
        breakLinkClassName={"page-link "}
        activeClassName={"active  text-light xx"}
        activeLinkClassName={"xx bg-light  border-0 "}
        
      />
  
    </>
  );
}

export default PaginationBar ;