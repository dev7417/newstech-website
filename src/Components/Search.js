import React from 'react'
import { useGlobal } from './Context'

export default function Search() {
  const {query, searchQuery} = useGlobal();
  return (
    <>
      <h1>Our Tech News</h1>
      <form>
        <div className='inputBox'>
          <input type='text' placeholder="search here" value={query} onChange={(e)=>searchQuery(e.target.value)} />
        </div>
      </form>
    </>
  )
}
