
import AdminPage from './pages/admin/adminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/homePage';



function App() {
  return (
    <BrowserRouter>
      <Routes path="/*">
         <Route path="/*" element={<HomePage/>}/>
        <Route path="/admin/*" element={<AdminPage/>}/>
        
      </Routes>
    
    
    
    </BrowserRouter>
  )
}
export default App
