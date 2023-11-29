import React, { useRef, useState } from 'react'

const TicTacToe = () => {
    const [currentPlayer, setcurrentPlayer] = useState("❎")
    const [count, setCount] = useState(0)
    const [Data, setData] = useState(["      ", "      ", "      ", "      ", "      ", "      ", "      ", "      ", "      "])
    const Message = useRef()
    const Screen = useRef() // show when the players win or match draw so that no one can click on the screen

    const clickHandler = (e) => {
        console.log(Data)
        if (e.target.innerText === "      ") {
            // e.target.innerText = currentPlayer
            const temp = Data;
            temp[parseInt(e.target.id)] = currentPlayer
            setData(temp)
            setCount(count + 1);
            GameOver()
            setcurrentPlayer(currentPlayer == "❎" ? "⭕" : "❎")
        }
    }

    const GameOver = () => {
        if ((Data[0] !== "      " && Data[0] == Data[1] && Data[1] == Data[2]) || // Top row
            (Data[3] !== "      " && Data[3] == Data[4] && Data[4] == Data[5]) || // Middle row
            (Data[6] !== "      " && Data[6] == Data[7] && Data[7] == Data[8]) || // Bottom row
            (Data[0] !== "      " && Data[0] == Data[3] && Data[3] == Data[6]) || // Left column
            (Data[1] !== "      " && Data[1] == Data[4] && Data[4] == Data[7]) || // Middle column
            (Data[2] !== "      " && Data[2] == Data[5] && Data[5] == Data[8]) || // Right column
            (Data[0] !== "      " && Data[0] == Data[4] && Data[4] == Data[8]) || // Diagonal
            (Data[2] !== "      " && Data[2] == Data[4] && Data[4] == Data[6])   // Diagonal
        ) {
            Message.current.innerText = currentPlayer + " Wins!!!";
            Reset()

        } else if (count == 8) {
            Message.current.innerText = "Match Draw, No one wins"
            Reset()
        }
    }

    const Reset = () => {
        Screen.current.style.display = "block"
        setTimeout(() => {
            Screen.current.style.display = "none"
            Message.current.innerText = "Current Player : " + currentPlayer;
            const temp = Data;
            temp.fill("      ")
            setData(temp)
            setCount(0);
        }, 3000);
    }


    return (
        <div className='w-full h-[80vh] center flex-col relative'>
            <div ref={Screen} className=' w-full h-full absolute ' style={{ display: 'none' }}></div>
            <h2 ref={Message} className='text-6xl mb-10'>Current Player : {currentPlayer}</h2>
            <div class="grid grid-cols-3  text-6xl">
                <div className='internalTictactoe border-r-4 border-b-4 hover:text-blue-600' id='0' onClick={(e) => clickHandler(e)}>{Data[0]}</div>
                <div className='internalTictactoe border-r-4 border-b-4 text' id='1' onClick={(e) => clickHandler(e)}> {Data[1]}</div>
                <div className='internalTictactoe border-b-4' id='2' onClick={(e) => clickHandler(e)}> {Data[2]}</div>
                <div className='internalTictactoe border-r-4 border-b-4' id='3' onClick={(e) => clickHandler(e)}> {Data[3]}</div>
                <div className='internalTictactoe border-r-4 border-b-4' id='4' onClick={(e) => clickHandler(e)}> {Data[4]}</div>
                <div className='internalTictactoe border-b-4' id='5' onClick={(e) => clickHandler(e)}> {Data[5]}</div>
                <div className='internalTictactoe border-r-4' id='6' onClick={(e) => clickHandler(e)}> {Data[6]}</div>
                <div className='internalTictactoe border-r-4' id='7' onClick={(e) => clickHandler(e)}> {Data[7]}</div>
                <div className='internalTictactoe ' id='8' onClick={(e) => clickHandler(e)}> {Data[8]}</div>

            </div>

        </div>
    )
}

export default TicTacToe