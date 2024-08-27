import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {  Suspense,lazy} from 'react';
import Landing from './Components/Landing';

const Count =lazy(()=>import('./Components/Count'))



export default function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/count' element={<Suspense fallback={<div>Loading...</div>}><Count/></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}






