import React from 'react'
import { useState } from 'react'
import "./CSS/sudoku.css"

const Sudoku = () => {
    const [array, setarray] = useState([
        [7, 0, 0, 0, 0, 0, 2, 0, 0],
        [4, 0, 2, 0, 0, 0, 0, 0, 3],
        [0, 0, 0, 2, 0, 1, 0, 0, 0],
        [3, 0, 0, 1, 8, 0, 0, 9, 7],
        [0, 0, 9, 0, 7, 0, 6, 0, 0],
        [6, 5, 0, 0, 3, 2, 0, 0, 1],
        [0, 0, 0, 4, 0, 9, 0, 0, 0],
        [5, 0, 0, 0, 0, 0, 1, 0, 6],
        [0, 0, 6, 0, 0, 0, 0, 0, 8]
    ])
    let temp = [
        [7, 0, 0, 0, 0, 0, 2, 0, 0],
        [4, 0, 2, 0, 0, 0, 0, 0, 3],
        [0, 0, 0, 2, 0, 1, 0, 0, 0],
        [3, 0, 0, 1, 8, 0, 0, 9, 7],
        [0, 0, 9, 0, 7, 0, 6, 0, 0],
        [6, 5, 0, 0, 3, 2, 0, 0, 1],
        [0, 0, 0, 4, 0, 9, 0, 0, 0],
        [5, 0, 0, 0, 0, 0, 1, 0, 6],
        [0, 0, 6, 0, 0, 0, 0, 0, 8]
    ];
    let solution = [
        [7, 6, 5, 8, 4, 3, 2, 1, 9],
        [4, 1, 2, 6, 9, 7, 8, 5, 3],
        [9, 3, 8, 2, 5, 1, 7, 6, 4],
        [3, 2, 4, 1, 8, 6, 5, 9, 7],
        [1, 8, 9, 5, 7, 4, 6, 3, 2],
        [6, 5, 7, 9, 3, 2, 4, 8, 1],
        [8, 7, 1, 4, 6, 9, 3, 2, 5],
        [5, 9, 3, 7, 2, 8, 1, 4, 6],
        [2, 4, 6, 3, 1, 5, 9, 7, 8]
    ];
    function change(e) {
        if (e.value.length === 1 && temp[parseInt(parseInt((e.id)) / 10)][parseInt(e.id) % 10] === 0)
            array[parseInt(parseInt((e.id)) / 10)][parseInt(e.id) % 10] = parseInt(e.value)
        else if (e.value.length == 2) {
            array[parseInt(parseInt((e.id)) / 10)][parseInt(e.id) % 10] = parseInt(e.value) % 10
        }
        setarray([...array])
        let zeros = 0
        array.map((e) => {
            if (!e.includes(0)) {
                zeros++;
            }
        })
        if (zeros === 9) {
            chkSolutioin();
        }

    }

    const chkSolutioin = () => {
        if (JSON.stringify(array) === JSON.stringify(solution)) {
            setTimeout(() => {
                alert("you did it")
                setarray(temp)
            }, 300)

        } else {
            setTimeout(() => {
                alert("still somewhere wrong")
            }, 300)
        }
    }
    // const getData = () => {
    //     let content = [];
    //     // for (let item of animals) {
    //     //   content.push(<li key={item.id}>{item.animal}</li>);
    //     // }

    //     let i=0,j=0,k=0,iTemp = 0;
    //                     for( k = 0;k<9;k++){
    //                     let jTemp = j==9?0:j;
    //                     iTemp = j==9?i:iTemp;
    //                     for( i=iTemp;i<iTemp+3;i++){
    //                         content.concat(<div className='sud-in' >
    //                             {
    //                                 for( j=jTemp;j<jTemp+3;j++){
    //                                     return(
    //                                         <></>
    //                                     )
    //                                 } 
    //                             }
    //                         </div>)

    //                     }

    //     return content;
    //   };


    return (
        <>
            <div className="sudoku center">
                <div className="sud">
                    {
                        array.map((e, i) => {
                            return (
                                <>
                                    {
                                        e.map((e1, i1) => {
                                            return (
                                                <input type="number" key={i1} autoComplete="off" max={"9"} min={"1"} className={`center sudContent ${temp[i][i1] != 0 ? "defined" : ""}`} id={`${i}${i1}`} value={e1 == 0 ? "" : e1} onChange={(e) => change(e.target)} />
                                            )
                                        })
                                    }
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Sudoku