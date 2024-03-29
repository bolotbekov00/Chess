import React, {FC, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import CellComponents from "./CellComponents";
import {Cell} from "../models/Cell";
import {Playrs} from "../models/Playrs";

interface BoardProps{
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer:  Playrs | null;
    swapPlayer: () => void
}

const BoardComponents: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
    const [selectedCell, setSelectedCell] = useState <Cell | null>(null);

    function click(cell:Cell){
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)){
            selectedCell.moveFigure(cell)
            swapPlayer()
            setSelectedCell(null)
        }
        else {
            if (cell.figure?.color === currentPlayer?.color)
            setSelectedCell(cell)
        }

    }

    useEffect(() => {
        hightlinghtCell()
    }, [selectedCell])

    function hightlinghtCell(){
        board.hightlinghtCell(selectedCell)
        updateBoard()
    }



    function updateBoard(){
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (

        <div>
            <h3>текущий игрок   {currentPlayer?.color}</h3>
            <div className="board">
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(cell =>
                            <CellComponents
                                click ={click}
                                cell={cell}
                                key={cell.id}
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            />
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default BoardComponents;