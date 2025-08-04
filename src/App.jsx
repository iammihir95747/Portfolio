import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Master from './Components/Master';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Todo from './Projects/Todo';
import Footer from './Components/Footer';
import TaskList from './Projects/TaskList';

function App() {
  return (
    <div>
         <BrowserRouter>
         <Routes>
          <Route path='/' element={<Master />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/tasklist' element={<TaskList />} />

         </Routes>
         </BrowserRouter>
           <Footer />
    </div>

  )
}

export default App