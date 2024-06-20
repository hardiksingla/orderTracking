import React, { useEffect } from 'react';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';

function List({ Phone, setPhone, dataFetch, ordersRes }) {
  const [orders, setOrders] = React.useState([]);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = React.useState(false);
  const [selectedOrder, setSelectedOrder] = React.useState("");

  useEffect(() => {
    console.log(ordersRes);

    ordersRes.sort((a, b) => b.order_number - a.order_number);

    const findStatus = (cancelled, fulfilled) => {
      if (cancelled !== "false") {
        return 'Cancelled';
      } else if (fulfilled != null) {
        return 'Fulfilled';
      }
      return 'Pending';
    }

    const handleOrderClick = (e, orderNumber) => {
      let clickedOrder = ordersRes.find(order => order.order_number === orderNumber);
      console.log(clickedOrder);
      setSelectedOrder(clickedOrder);
      // showPopup ? setShowPopup(false) : setShowPopup(true);
      togglePopup();

      // if (e.button === 1) { 
      //   window.open(clickedOrder.status_url, '_blank');
      // } else if (e.button === 0) { 
      //   navigate(`/order/${orderNumber}`);
      // }
    };

    setOrders(ordersRes.map((order, index) => (
      <div key={index} className={'flex justify-between mx-5 border-b-2 p-1'}>
        <div className="w-full flex justify-around p-3"
          onMouseDown={(e) => handleOrderClick(e, order.order_number)}
          style={{ cursor: 'pointer' }}>
          <p>{order.order_number}</p>
          <p>{Math.round(order.price)}</p>
          <p>{findStatus(order.cancelled, order.fullfilment_status)}</p>
          {/* <a><button>Return/Exchange</button></a> */}
        </div>
      </div>
    )));
  }, [ordersRes, navigate]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className=''>
      <Popup show={showPopup} onClose={togglePopup} data={selectedOrder} />
      {/* {
        showPopup &&
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
            
            >
          <div className="bg-white p-4 rounded shadow-lg w-1/3">
            <button
              onClick={() => setShowPopup(false)}
              className="float-right text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <div className="mt-4">
              <p>This is a centered popup!</p>
              <p>{selectedOrder}</p>
            </div>
          </div>
        </div>
      } */}
      
      <SearchBar Phone={Phone} setPhone={setPhone} dataFetch={dataFetch} />
      {orders.length === 0 ? <div>No Orders Found</div> :
        <div>
          <div className='flex justify-between mx-5 border-t-2 border-b-2 p-1 bg-gray-200'>
            <div className='w-full flex justify-around p-3'>
              <p>Order</p>
              <p>Total</p>
              <p>Status</p>
              {/* <p>Status</p> */}
            </div>
          </div>
          {orders}
        </div>
      }
    </div>
  );
}

export default List;
