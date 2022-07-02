import { Routes, Route } from 'react-router-dom'
import Layout from '@Containers/Layout'
import AboutUs from '@Features/AboutUs'
import HomePage from '@Features/HomePage'
import ReportPage from '@Features/ReportPage'


function App () {
  return (

    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/report" element={<ReportPage/>}/>
        <Route index element={<HomePage/>}/>
      </Route>
    </Routes>

  )
}

export default App