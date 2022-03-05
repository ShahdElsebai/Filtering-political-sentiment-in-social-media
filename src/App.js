import { Routes, Route } from 'react-router-dom'
import Layout from '@Containers/Layout'
import AboutUs from '@Features/AboutUs'


function App () {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/aboutUs' element={<AboutUs/>}/>
      </Route>
    </Routes>

  )
}

export default App