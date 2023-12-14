import React from 'react'
import { useState } from 'react'
import "./CSS/sudoku.css"

const SudSolver = () => {
    const [array, setarray] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ])
    const [solution, setSolution] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]);
    function change(e) {
        if (e.value.length === 1 ) {
            array[parseInt(parseInt((e.id)) / 10)][parseInt(e.id) % 10] = parseInt(e.value)
            solution[parseInt(parseInt((e.id)) / 10)][parseInt(e.id) % 10] = parseInt(e.value)
        }
        else if (e.value.length === 2) {
                array[parseInt(parseInt((e.id)) / 10)][parseInt(e.id) % 10] = parseInt(e.value) % 10
                solution[parseInt(parseInt((e.id)) / 10)][parseInt(e.id) % 10] = parseInt(e.value) % 10
        }
        setarray([...array])
        setSolution([...solution])

    }

    function findSolution() {
        let chk = solveSudoku(0, 0)
        if (!chk) {
            alert("Question is Wrong")
        }
    }

    // function sleep(milliseconds) {
    //     return new Promise(resolve => setTimeout(resolve, milliseconds));
    // }

    let N = 9
    function solveSudoku(row, col) {

        if (row === N)
            return true;

        let nrow, ncol
        if (col === N - 1) {
            nrow = row + 1;
            ncol = 0;
        } else {
            nrow = row;
            ncol = col + 1;
        }

        if (solution[row][col] !== 0) {
            if (isSafe(row, col, solution[row][col])) {
                if (solveSudoku(nrow, ncol)) {
                    return true;
                }
            } 
            else {
                return false
            }

        } else {
            for (let num = 1; num < 10; num++) {
                if (isSafe(row, col, num)) {
                    solution[row][col] = num;
                    setSolution([...solution])

                    if (solveSudoku(nrow, ncol))
                        return true;
                }
                solution[row][col] = 0;
                setSolution([...solution])
            }
        }


        return false;
    }

    function isSafe(row, col, num) {
        //        chk horizontal and vertical
        let i, j
        for (i = 0; i < N; i++) {
            if (solution[row][i] === num  ) {
                if(i!==col)
                    return false;
            }
        }
        for (i = 0; i < N; i++) {
            if (solution[i][col] === num  ) {
                if(row!==i)
                    return false;
            }
        }
        //        chk in the inner box
        for (i = (row - row % 3); i < (row - row % 3) + 3; i++) {
            for (j = (col - col % 3); j < (col - col % 3) + 3; j++) {
                if (solution[i][j] === num && i!==row && j!==col) {
                    return false;
                }
            }
        }

        return true;
    }
    function fun() { }

    return (
        <>
            <div className="sudoku center">

                <div>
                    <h3>Question</h3>
                    <div className="sud">

                        {
                            array.map((e, i) => {
                                return (
                                    <>
                                        {
                                            e.map((e1, i1) => {
                                                return (
                                                    <input type="number" key={i1} autoComplete="off" max={"9"} min={"1"} className={`center sudContent ${e1 !== 0 ? "defined" : ""}`} id={`${i}${i1}`} value={e1 === 0 ? "" : e1} onChange={(e) => change(e.target)} />
                                                )
                                            })
                                        }
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <button className='btn btn-primary' onClick={findSolution}> Solve </button>
                <div>
                    <h3>Solution</h3>
                    <div className="sud">

                        {
                            solution.map((e, i) => {
                                return (
                                    <>
                                        {
                                            e.map((e1, i1) => {
                                                return (
                                                    <input type="number" key={i1} autoComplete="off" max={"9"} min={"1"} className={`center sudContent ${array[i][i1] !== 0 ? "defined" : ""}`} id={`${i}${i1}`} value={e1 === 0 ? "" : e1} onChange={fun} disabled />
                                                )
                                            })
                                        }
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SudSolver