// import React from 'react'
// import productData from '../sampledata.json'
// import Cartitem from './Cartitem';

// function Carts(props) {
//   let {category}=props;
//   const targetCat = category;

//   const product = productData.products;

//   return (
//     <div className='container my-5'>
//     <div className="container"></div>
//     <div className="row">
//       {
//         targetCat ==="all" ?
//         product.map((element) => (
//           <div className="col-md-4" key={element.id}>
//             <Cartitem title={element.title} price={element.price} description={element.description} image_url={element.image_url} />
//           </div> 
//         ))
//         :
//         product.filter(product => product.category === targetCat).map((element) => (
//           <div className="col-md-4" key={element.id}>
//             <Cartitem title={element.title} price={element.price} description={element.description} image_url={element.image_url} />
//           </div> 
//         ))
//       }
//     </div>
//   </div>
//   )
// }

// export default Carts

// import React from 'react';
// import productData from '../sampledata.json';
// import Cartitem from './Cartitem';

// function Carts(props) {
//   const { category, selectedOption } = props;

//   let products = productData.products;

//   // Sort the products based on the sorting option
//   if (selectedOption === 'lowtohigh') {
//     products = products.slice().sort((a, b) => a.price - b.price);
//   } else if (selectedOption === 'hightolow') {
//     products = products.slice().sort((a, b) => b.price - a.price);
//   }

//   return (
//     <div className='container my-5'>
//       <div className="container"></div>
//       <div className="row">
//         {category === "all" ? (
//           products.map((element) => (
//             <div className="col-md-4" key={element.id}>
//               <Cartitem title={element.title} price={element.price} description={element.description} image_url={element.image_url} />
//             </div>
//           ))
//         ) : (
//           products
//             .filter(product => product.category === category)
//             .map((element) => (
//               <div className="col-md-4" key={element.id}>
//                 <Cartitem title={element.title} price={element.price} description={element.description} image_url={element.image_url} />
//               </div>
//             ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Carts;

import React from 'react';
import axios from 'axios';

import productData from '../sampledata.json';
import Cartitem from './Cartitem';

function Carts(props) {
  const { category } = props;
  let { sortingOption } = props;
 
  let products = productData.products;

  if (sortingOption === 'lowtohigh') {
    products = products.slice().sort((a, b) => a.price - b.price);
  } else if (sortingOption === 'hightolow') {
    products = products.slice().sort((a, b) => b.price - a.price);
  }

  return (
    <div className='container my-5'>
      <div className="container"></div>
      <div className="row">
        {
          category === "all" ?
            products.map((element) => (
              <div className="col-md-4" key={element.id}>
                <Cartitem title={element.title} price={element.price} description={element.description} image_url={element.image_url} />
              </div>
            ))
            :
            products.filter(product => product.category === category).map((element) => (
              <div className="col-md-4" key={element.id}>
                <Cartitem title={element.title} price={element.price} description={element.description} image_url={element.image_url} />
              </div>
            ))
        }
      </div>
    </div>
  );
}

export default Carts;
