import { Route, Routes, Navigate, NavLink } from "react-router-dom";
import './App.css';
import Snake from "./component/Snake";
import Sudoku from "./component/Sudoku";
import Main from "./Main";

function App() {

  return (
    <>
      {/* navbar */}
      < nav >
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={"/GameHub"}>☠️ GameHub</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to={"/"} role="button" aria-expanded="false">🎮 Games</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href={"/GameHub/Snake"}>🐍 Snake</a></li>
              <li><NavLink className="dropdown-item" to={"/GameHub/Sudoku"}>📃 Sudoku</NavLink></li>
              <li><a className="dropdown-item" to={"/"}>Something else here</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" to={"/"}>Separated link</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={"https://github.com/Abhimrt"}>🧑🏻‍💻 Developer</a>
          </li>
         
        </ul>
      </nav >
      <Routes className="main">
        <Route path="/" element={<Main />} />
        <Route path="/Snake" element={<Snake />} />
        <Route path="/Sudoku" element={<Sudoku />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  )
}

export default App;
