import { useState } from 'react'
import './App.css'
import Landing from './Pages/Landing/Landing'
import SetUp from './Pages/SetUp/SetUp'
import { Route, Routes, useLocation } from 'react-router-dom'
import Questions from './Pages/Questions/Questions'
import Finish from './Pages/Finish/Finish'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='setup' element={<SetUp/>}/>
      <Route path="questions" element={<Questions/>}/>
      <Route path="exit" element={<Finish/>}/>
    </Routes>
    </>
  )
}

export default App
