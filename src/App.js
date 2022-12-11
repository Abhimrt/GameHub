import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Snake from "./component/Snake";
import Sudoku from "./component/Sudoku";
import SudSolver from "./component/SudSolver";
import Main from "./Main";

function App() {

  return (
    <>
      {/* navbar */}
      < nav className="mb-4">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={"/GameHub"}>☠️ GameHub</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to={"/"} role="button" aria-expanded="false">🎮 Games</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href={"/GameHub/Snake"}>🐍 Snake</a></li>
              <li><a className="dropdown-item" href={"/GameHub/Sudoku"}>📃 Sudoku</a></li>
              <li><a className="dropdown-item" href={"/GameHub/Sudoku-solver"}>❓ Sudoku Solver</a></li>
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
        <Route path="/" element={<Snake />} />
        <Route path="/Snake" element={<Snake />} />
        <Route path="/Sudoku" element={<Sudoku />} />
        <Route path="/Sudoku-solver" element={<SudSolver />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  )
}

export default App;
