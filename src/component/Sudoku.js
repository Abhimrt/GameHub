import React from 'react'
import "./CSS/sudoku.css"

const Sudoku = () => {
    return (
        <>
            <div className="sudoku center">
                <div className="sud">
                    {/* top left */}
                    <div className="sud-in" >
                        <div contentEditable="true" className='center ' id='00'></div>
                        <div contentEditable="true" className='center ' id="01" ></div>
                        <div contentEditable="true" className='center ' id="02" ></div>
                        <div contentEditable="true" className='center ' id="10" ></div>
                        <div contentEditable="true" className='center ' id="11" ></div>
                        <div contentEditable="true" className='center ' id="12" ></div>
                        <div contentEditable="true" className='center ' id="20" ></div>
                        <div contentEditable="true" className='center ' id="21" ></div>
                        <div contentEditable="true" className='center ' id="22" ></div>
                    </div>
                    {/* top middle */}
                    <div className="sud-in" >
                        <div contentEditable="true" className='center' id='03'></div>
                        <div contentEditable="true" className='center' id='04'></div>
                        <div contentEditable="true" className='center' id='05'></div>
                        <div contentEditable="true" className='center' id='13'></div>
                        <div contentEditable="true" className='center' id='14'></div>
                        <div contentEditable="true" className='center' id='15'></div>
                        <div contentEditable="true" className='center' id='23'></div>
                        <div contentEditable="true" className='center' id='24'></div>
                        <div contentEditable="true" className='center' id='25'></div>
                    </div>
                    {/* top right */}
                    <div className="sud-in" >
                        <div contentEditable="true" className='center' id='06'></div>
                        <div contentEditable="true" className='center' id='07'></div>
                        <div contentEditable="true" className='center' id='08'></div>
                        <div contentEditable="true" className='center' id='16'></div>
                        <div contentEditable="true" className='center' id='17'></div>
                        <div contentEditable="true" className='center' id='18'></div>
                        <div contentEditable="true" className='center' id='26'></div>
                        <div contentEditable="true" className='center' id='27'></div>
                        <div contentEditable="true" className='center' id='28'></div>
                    </div>
                    {/* middle left */}
                    <div className="sud-in" >
                        <div contentEditable="true" className='center' id='30'></div>
                        <div contentEditable="true" className='center' id='31'></div>
                        <div contentEditable="true" className='center' id='32'></div>
                        <div contentEditable="true" className='center' id='40'></div>
                        <div contentEditable="true" className='center' id='41'></div>
                        <div contentEditable="true" className='center' id='42'></div>
                        <div contentEditable="true" className='center' id='50'></div>
                        <div contentEditable="true" className='center' id='51'></div>
                        <div contentEditable="true" className='center' id='52'></div>
                    </div>
                    {/* middle middle */}
                    <div className="sud-in" >
                        <div contentEditable="true" className='center' id='33'></div>
                        <div contentEditable="true" className='center' id='34'></div>
                        <div contentEditable="true" className='center' id='35'></div>
                        <div contentEditable="true" className='center' id='43'></div>
                        <div contentEditable="true" className='center' id='44'></div>
                        <div contentEditable="true" className='center' id='45'></div>
                        <div contentEditable="true" className='center' id='53'></div>
                        <div contentEditable="true" className='center' id='54'></div>
                        <div contentEditable="true" className='center' id='55'></div>
                    </div>
                    {/* middle right */}
                    <div className="sud-in" >
                        <div contentEditable="true" className='center' id='36'></div>
                        <div contentEditable="true" className='center' id='37'></div>
                        <div contentEditable="true" className='center' id='38'></div>
                        <div contentEditable="true" className='center' id='46'></div>
                        <div contentEditable="true" className='center' id='47'></div>
                        <div contentEditable="true" className='center' id='48'></div>
                        <div contentEditable="true" className='center' id='56'></div>
                        <div contentEditable="true" className='center' id='57'></div>
                        <div contentEditable="true" className='center' id='58'></div>
                    </div>
                    {/* bottom left */}
                    <div className="sud-in" >
                        <div contentEditable="true" className='center' id='60'></div>
                        <div contentEditable="true" className='center' id='61'></div>
                        <div contentEditable="true" className='center' id='62'></div>
                        <div contentEditable="true" className='center' id='70'></div>
                        <div contentEditable="true" className='center' id='71'></div>
                        <div contentEditable="true" className='center' id='72'></div>
                        <div contentEditable="true" className='center' id='80'></div>
                        <div contentEditable="true" className='center' id='81'></div>
                        <div contentEditable="true" className='center' id='82'></div>
                    </div>
                    {/* bottom middle */}
                    <div className="sud-in" >
                        <div contentEditable="true" className='center' id='63'></div>
                        <div contentEditable="true" className='center' id='64'></div>
                        <div contentEditable="true" className='center' id='65'></div>
                        <div contentEditable="true" className='center' id='73'></div>
                        <div contentEditable="true" className='center' id='74'></div>
                        <div contentEditable="true" className='center' id='75'></div>
                        <div contentEditable="true" className='center' id='83'></div>
                        <div contentEditable="true" className='center' id='84'></div>
                        <div contentEditable="true" className='center' id='85'></div>
                    </div>
                    {/* bottom right */}
                    <div className="sud-in" >
                        <div contentEditable="true" className='center' id='66'></div>
                        <div contentEditable="true" className='center' id='67'></div>
                        <div contentEditable="true" className='center' id='68'></div>
                        <div contentEditable="true" className='center' id='76'></div>
                        <div contentEditable="true" className='center' id='77'></div>
                        <div contentEditable="true" className='center' id='78'></div>
                        <div contentEditable="true" className='center' id='86'></div>
                        <div contentEditable="true" className='center' id='87'></div>
                        <div contentEditable="true" className='center' id='88'></div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Sudoku