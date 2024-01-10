import React, {FC, useEffect, useRef, useState} from 'react';
import {Playrs} from "../models/Playrs";
import {Colors} from "../models/Colors";

interface TImerProps {
    currentPlayer: Playrs | null;
    restart: () => void
}

const Timer: FC< TImerProps> = ({currentPlayer, restart}) => {
    const [blackTime, setBlackTime] = useState(300)
    const [witheTime, setWitheTime] = useState(300)
    const timer = useRef<null | ReturnType<typeof  setInterval>>(null)

    useEffect( () => {
        startTimer()
    }, [currentPlayer])

    function startTimer(){
        if (timer.current){
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color == Colors.WHITE ? decrementWitheTimer : decrementBlackTimer
        timer.current = setInterval(callback, 1000)
    }
    function decrementBlackTimer(){
        setBlackTime( prev => prev - 1)
    }
    function decrementWitheTimer(){
        setWitheTime(prev => prev - 1)
    }

    const handelRestart = () =>{
        setWitheTime(300)
        setBlackTime(300)
        restart()
    }



    return (
        <div>
            <div>
                <button onClick={handelRestart}>Restart game</button>
            </div>
            <h2>Черные - {blackTime}</h2>
            <h2>Белые - {witheTime}</h2>

        </div>
    );
};

export default Timer;