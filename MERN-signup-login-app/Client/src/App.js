import { Routes, Route } from "react-router-dom";
import SearchAppBar from './Forms/navbar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<> <SearchAppBar/> <Homepage/></>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    
    </>
  );
}

export default App;
