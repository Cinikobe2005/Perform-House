import React from 'react'
import Header from '../components/Header';
import Allperfumes from '../components/Allperfumes';
import Cart from '../components/Cart';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-8">
            <Allperfumes />
          </div>
          <div className="col-lg-3">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage