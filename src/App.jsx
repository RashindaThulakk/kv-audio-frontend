
import AdminPage from './pages/admin/adminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import Testing from './components/testingPage';
import TestingPage from './components/testingPage';
import LoginPage from './pages/login/login';



function App() {
  return (
    <BrowserRouter>
      <Routes path="/*">
      <Route path='login' element={<LoginPage/>}/>
         <Route path="/*" element={<HomePage/>}/>
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path='/testing/' element={<TestingPage/>}/>
        
      </Routes>
    
    
    
    </BrowserRouter>
  )
}
export default App
