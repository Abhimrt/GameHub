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
    function change(e){
        if( e.value.length === 1 && temp[parseInt(parseInt((e.id))/10)][parseInt(e.id)%10]===0 )
            array[parseInt(parseInt((e.id))/10)][parseInt(e.id)%10] = parseInt(e.value)
        else if(e.value.length==2 ){
            array[parseInt(parseInt((e.id))/10)][parseInt(e.id)%10] = parseInt(e.value)%10
        }
        setarray([...array])
    }
    
    
    return (
        <>
            <div className="sudoku center">
                <div className="sud">
                {
                    array.map((e,i)=>{
                        return (
                            <>
                                {
                                    e.map((e1,i1)=>{
                                        return(
                                            <input type="number" key={i1} autoComplete="off" max={"9"} min={"1"} className={`center sudContent ${temp[i][i1]!=0?"defined":""}`} id={`${i}${i1}`} value={e1==0?"":e1} onChange={(e)=>change(e.target)}/>
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