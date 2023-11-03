// import './App.css';
// import Navbar from './components/Navbar';
// import Carts from './components/Carts';
// import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import {  useState } from 'react';

// function App() {
//   const [cat, setcat] = useState('all');
  
//   const handleCatChange = (category)=>{
//     setcat(category);
//   }
//   return (
//     <>
//     <BrowserRouter>
//       <Navbar handleCatChange={handleCatChange} />
//       <Routes>
//         <Route path='/' element={<Carts category={cat} sortingOption={selectedOption}/>} />
//         <Route path='/Mens Wear' element={<Carts category={'Mens Wear'} sortingOption={selectedOption} />} />
//         <Route path='/Ledies Wear' element={<Carts category='Ledies Wear' sortingOption={selectedOption}/>} />
//         <Route path='/Electronics' element={<Carts category='Electronics' sortingOption={selectedOption} />} />
//         <Route path='/Jewelry' element={<Carts category='Jewelry' sortingOption={selectedOption}/>} />
        

//       </Routes> 
//     </BrowserRouter>
//   </>
//   );
// }

// export default App;

// import './App.css';
// import Navbar from './components/Navbar';
// import Carts from './components/Carts';
// import MyDropdown from './components/Dropdown'; // Import the MyDropdown component
// import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import { useState } from 'react';

// function App() {
//   const [cat, setcat] = useState('all');
//   const [selectedOption, setSelectedOption] = useState('lowtohigh'); // Define selectedOption state

//   const handleCatChange = (category) => {
//     setcat(category);
//   }

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//   }

//   return (
//     <>
//       <BrowserRouter>
//         <Navbar handleCatChange={handleCatChange} />
//         <MyDropdown selectedOption={selectedOption} handleOptionChange={handleOptionChange} /> {/* Pass selectedOption and handleOptionChange as props */}
//         <Routes>
//           <Route path='/' element={<Carts category={cat} sortingOption={selectedOption} />} />
//           <Route path='/Mens Wear' element={<Carts category={'Mens Wear'} sortingOption={selectedOption} />} />
//           <Route path='/Ledies Wear' element={<Carts category='Ledies Wear' sortingOption={selectedOption} />} />
//           <Route path='/Electronics' element={<Carts category='Electronics' sortingOption={selectedOption} />} />
//           <Route path='/Jewelry' element={<Carts category='Jewelry' sortingOption={selectedOption} />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Carts from './components/Carts';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MyDropdown from './components/MyDropdown';

function App() {

  const [cat, setCat] = useState('all');
  const [selectedOption, setSelectedOption] = useState('lowtohigh'); // Default sorting option

  const handleCatChange = (category) => {
    setCat(category);
  }

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar handleCatChange={handleCatChange} />
        {/* <MyDropdown selectedOption={selectedOption} handleOptionChange={handleOptionChange} /> */}
        <Routes>
          <Route path='/' element={<Carts category={cat} sortingOption={selectedOption} />} />
          <Route path='/MensWear' element={<Carts category='Mens Wear' sortingOption={selectedOption} />} />
          <Route path='/LediesWear' element={<Carts category='Ledies Wear' sortingOption={selectedOption} />} />
          <Route path='/Electronics' element={<Carts category='Electronics' sortingOption={selectedOption} />} />
          <Route path='/Jewelry' element={<Carts category='Jewelry' sortingOption={selectedOption} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


