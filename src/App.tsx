import React, {useEffect, useState} from 'react';
import "./App.css"
import BoardComponents from "./components/boardComponents";
import {Board} from "./models/Board";
import {Playrs} from "./models/Playrs";
import {Colors} from "./models/Colors";
import LostFigure from "./components/lostFigure";
import Timer from "./components/Timer";


function App() {
    const [board, setBoard] = useState(new Board())
    const [whitePlayer] = useState(new  Playrs(Colors.WHITE))
    const [blackPlayer ] = useState(new  Playrs(Colors.BLACK))
    const [currentPlayer, setCurrentPlayer] = useState <Playrs | null>(null)


    useEffect(() => {
        restart()
        setCurrentPlayer(whitePlayer)
    }, []);

    function restart(){
        const newBoard = new Board();
        newBoard.initCells()
        newBoard.addFigure()
        setBoard(newBoard)
    }

    function swapPlayer(){
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }

  return (
      <div className='app'>
          <Timer
            restart={restart}
            currentPlayer={currentPlayer}
          />
        <BoardComponents
            board = {board}
            setBoard = {setBoard}
            currentPlayer = {currentPlayer}
            swapPlayer ={swapPlayer}
        />
          <div>
              <LostFigure
                  title="Черные фигуры"
                  figure={board.lostBlackFigure}
              />
              <LostFigure
                  title="Белые фигуры"
                  figure={board.lostWitheFigure}
              />
          </div>
      </div>
  );
}

export default App;
