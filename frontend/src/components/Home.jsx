import React from 'react';
import SearchButton from './SearchButton';

function Home({ Phone, setPhone , dataFetch}) {


  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="flex justify-center p-6">
        <a href="https://shop.thrd.store/"><img src="//shop.thrd.store/cdn/shop/files/black.png?" className="w-24" alt="Logo" /></a>
      </div>
      <div className="flex flex-col justify-center items-center flex-1 w-full px-4">
        <h1 className="text-2xl m-5 text-center">
          Enter your Phone Number To Get Your Order Details
        </h1>
        <input
          value={Phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          className="border-2 border-gray-300 p-2 rounded-md text-center w-full max-w-sm"
          placeholder="Phone Number"
        />
        <SearchButton Phone={Phone} dataFetch={dataFetch} style = "p-4 px-8 rounded-full" />
      </div>
    </div>
  );
}

export default Home;
