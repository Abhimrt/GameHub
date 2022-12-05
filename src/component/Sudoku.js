import React from 'react'
import "./CSS/sudoku.css"

const Sudoku = () => {
  return (
    <>
        <div className="sud" contenteditable="true">
            <ul className='center '>
                <li contentEditable="true">f </li>
                <li>sd </li>
                <li>fds</li>
            </ul>
            <ul className='center '>
                <li>f </li>
                <li>sd </li>
                <li>fds</li>
            </ul>
            <ul className='center '>
                <li>f </li>
                <li>sd </li>
                <li>fds</li>
            </ul>
        </div>
        
    </>
  )
}

export default Sudoku