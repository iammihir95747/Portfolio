import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Master from './Components/Master';
import Resume from './Components/Resume';
import Projects from './Components/Projects';

function App() {
  return (
    <div>
         <BrowserRouter>
         <Routes>
          <Route path='/' element={<Master />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
          
         </Routes>
         </BrowserRouter>
    </div>

  )
}

export default App