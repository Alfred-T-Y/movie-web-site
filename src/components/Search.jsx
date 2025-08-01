import React from 'react'

const Search = ({searchTerm, setsearchTerm}) => {
  return (
    <div className='search'>
      <div>
        <img src='search.svg' alt='seach'/>

        <input
          type="text"
          placeholder="Search a movie"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />

      </div>
    </div>
  )
}

export default Search