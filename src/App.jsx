import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Master from './Components/Master';
import Resume from './Components/Resume';
import Todo from './Projects/Todo';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
         <BrowserRouter>
         <Routes>
          <Route path='/' element={<Master />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/todo' element={<Todo />} />
         </Routes>
         </BrowserRouter>
           <Footer />
    </div>

  )
}

export default App