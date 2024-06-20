import React from 'react'
import { useNavigate } from 'react-router-dom';

function SearchButton({Phone , dataFetch , style = ""}) {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate('/list');
        dataFetch();
        console.log(`Phone Number Submitted: ${Phone}`);
      };
  
    return (
    <button
        className={`bg-black text-white m-5 ${style}`}
        onClick={clickHandler}
    >
        Find Orders
    </button>
  )
}

export default SearchButton
