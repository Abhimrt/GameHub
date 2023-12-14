import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Snake from "./component/Snake";
import Sudoku from "./component/Sudoku";
import SudSolver from "./component/SudSolver";
import TicTacToe from "./component/TicTacToe";

function App() {

  return (
    <>
      {/* navbar */}
      < nav className="mb-4">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={"/"}>☠️ GameHub</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href={"/"} role="button" aria-expanded="false">🎮 Games</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href={"/Snake"}>🐍 Snake</a></li>
              <li><a className="dropdown-item" href={"/Sudoku"}>📃 Sudoku</a></li>
              <li><a className="dropdown-item" href={"/Sudoku-solver"}>❓ Sudoku Solver</a></li>
              <li className="mt-2 text-sm text-gray-500">   🚻 Dual Player<hr className="dropdown-divider mt-0" /> </li>
              <li><a className="dropdown-item" href={"/tictactoe"}>❎ TicTacToe</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={"https://www.abhisheksinghal.in/"}>🧑🏻‍💻 Developer</a>
          </li>

        </ul>
      </nav >
      <Routes className="main">
        <Route path="/" element={<Snake />} />
        <Route path="/Snake" element={<Snake />} />
        <Route path="/Sudoku" element={<Sudoku />} />
        <Route path="/Sudoku-solver" element={<SudSolver />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  )
}

export default App;
