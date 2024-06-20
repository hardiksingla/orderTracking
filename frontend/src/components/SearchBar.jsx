import React from 'react'
import SearchButton from './SearchButton'

function SearchBar({ Phone, setPhone , dataFetch}) {
  return (
    <div className='flex align-middle justify-center'>
      <input
        value={Phone}
        onChange={(e) => setPhone(e.target.value)}
        type="number"
        className='border-2 border-gray-300 p-2 rounded-md text-center m-3'
        placeholder='Phone Number'
      />
      <SearchButton Phone={Phone} dataFetch={dataFetch} style="p-2 rounded-xl" />
    </div>
  )
}

export default SearchBar
