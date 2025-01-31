
import AdminPage from './components/adminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<AdminPage/>}/>
        {/* <Route path='/*' element={<h1>Error Not Found 404</h1>}/>

         */}
      </Routes>
    
    
    
    </BrowserRouter>
  )
}
export default App
