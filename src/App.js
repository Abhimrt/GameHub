import { Route, Routes,Navigate } from "react-router-dom";
import './App.css';
import Snake from "./component/Snake";
import Main from "./Main";

function App() {

 return(
  <Routes className="main">
    <Route path="/" element={<Main/>}/>
    <Route path="/Snake" element={<Snake/>}/>
    <Route path="*" element={<Navigate to={"/"} />} />
  </Routes>
 )
}

export default App;
