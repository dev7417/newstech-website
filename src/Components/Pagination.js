import React from 'react'
import { useGlobal } from './Context'

export default function Pagination() {
  const {page, nbPages,getPrevPage,getNextPage} = useGlobal();
  return (
    <>
      <div className='pagination_btn'>
        <button onClick={()=>getPrevPage()}>PREV</button>
        <p>{page + 1}<span>of</span> {nbPages}</p>
        <button onClick={()=>getNextPage()}>NEXT</button>
      </div>
    </>
  )
}
